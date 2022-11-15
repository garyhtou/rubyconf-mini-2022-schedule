import { getEvents, ET_TZ, event } from './events';
import ical, { ICalEvent, ICalEventData } from 'ical-generator';

async function getCalendar() {
	const calendar = ical({
		name: 'RubyConf Mini 2022',
		description:
			'Schedule for RubyConf Mini 2022 in Providence, IR. Nov 15th - 17th.',
		timezone: ET_TZ,
	});

	const events = await getEvents();

	// add events to calendar
	events.forEach((e) => {
		calendar.createEvent(format(e));
	});

	return calendar;

	function format(e: event): ICalEvent | ICalEventData {
		const authors = e.authors ? 'Speaker: ' + e.authors + '\n\n' : '';
		const url = e.url ? '\n' + e.url : ''; // not all calendar support the URL field, so we add it to the description
		const des = authors + (e.description || '') + url;

		return {
			start: e.start,
			end: e.end,
			summary: e.title,
			description: des,
			location: e.location,
			url: e.url,
			timezone: ET_TZ,
		};
	}
}

export { getCalendar };
