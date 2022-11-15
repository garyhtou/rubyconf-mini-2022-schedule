import axios from 'axios';
import cheerio from 'cheerio';
import moment, { Moment } from 'moment-timezone';

var lastScraped = 0;
var cache: event[] = null;

const BASE_URL = 'http://www.rubyconfmini.com';
const SCHEDULE_URL = BASE_URL + '/schedule';
export const ET_TZ = 'America/New_York';
const DAYS = [
	{ id: 'tuesday', date: moment.tz('2022-11-15', ET_TZ) },
	{ id: 'wednesday', date: moment.tz('2022-11-16', ET_TZ) },
	{ id: 'thursday', date: moment.tz('2022-11-17', ET_TZ) },
];

export async function getEvents(force: boolean = false) {
	if (!force && cache && lastScraped > moment().subtract(4, 'minutes').unix()) {
		console.log('Using cached events');
		return cache;
	}
	console.log('Scrapping events');

	const html = await getHtml();
	const $ = cheerio.load(html);

	const events: event[] = [];
	for (const day of DAYS) {
		const dayId = day.id;
		const date = day.date;

		const div = $(`#${dayId} + .schedule-day`);
		const dayEvents = await parseDay($, date, div);
		events.push(...dayEvents);
	}

	if (events.length == 0) {
		// fail safe
		return cache;
	}

	// Assume successful scrape. Update cache.
	cache = events;
	lastScraped = moment().unix();

	return events;
}

function parseDay($: cheerio.Root, date: Moment, dayHtml: cheerio.Cheerio) {
	let events = [];
	const scheduleItems = dayHtml.children();

	for (let i = 0; i < scheduleItems.length; i++) {
		try {
			events.push(parseItem($, date, $(scheduleItems[i])));
		} catch (e) {
			console.log(e);
		}
	}

	return events;
}

function parseItem($: cheerio.Root, date: Moment, itemHtml: cheerio.Cheerio) {
	const timeLocation = itemHtml.find('.schedule-item-time').text().split('•');
	const times = timeLocation[0].split('-').map((s) => s.trim());
	const location = timeLocation[1]?.trim() || undefined;

	const start = moment.tz(
		`${date.format('YYYY-MM-DD')} ${times[0]}`,
		'YYYY-MM-DD h:mmA',
		ET_TZ
	);
	const end =
		times.length == 2
			? moment.tz(
					`${date.format('YYYY-MM-DD')} ${times[1]}`,
					'YYYY-MM-DD h:mmA',
					ET_TZ
			  )
			: start;

	const title = itemHtml.find('.schedule-item-title').text().trim();
	let url = itemHtml.find('a')?.attr('href')?.toString()?.trim() || null;
	if (url) url = BASE_URL + url;
	const authors = itemHtml.find('.speaker-names').text().trim() || null;

	const event: event = {
		start,
		end,
		title,
		location,
		url,
		authors,
	};
	return event;
}

export type event = {
	start: Moment;
	end: Moment;
	title: string;
	url?: string;
	authors?: string;
	location?: string;
};

async function getHtml() {
	const res = await axios.get(SCHEDULE_URL);
	return await res.data;
}
