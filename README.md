# RubyConf Mini 2022 Schedule 🗓️

Do you wish to have the RubyConf Mini schedule in your own calendar app? Well, now you can! Subscribe to the
[`https://rubyconfmini.garytou.com/calendar.ics`](https://rubyconfmini.garytou.com/calendar.ics) ICS link in your favorite
calendar app such as Google Calendar, Apple Calendar, Outlook, etc.

![image](https://user-images.githubusercontent.com/20099646/202037106-2f8b4ea1-7e77-4e3e-99d5-1d18f816f590.png)

This `node.js` app (really should be Ruby 🙄) web scrapes the RubyConf Mini schedule from their website and formats it
as an iCal (ics) file!

## 📎 How to use

<table>
<tr>
	<td>Google Calendar</td>
	<td><a href="https://calendar.google.com/calendar/render?cid=j4fl51nffh7vllo958sl3i8dp44s9qr9%40import.calendar.google.com">Add to Google Calendar</a></td>
</tr>
<tr>
	<td>Apple Calendar on iPhone</td>
	<td><a href="https://rubyconfmini.garytou.com/calendar.ics">Add to Apple Calendar</a></td>
</tr>
<tr>
	<td>Others</td>
	<td>Copy this link: <code>https://rubyconfmini.garytou.com/calendar.ics</code>, and subscribe to it in your favorite calendar app!</td>
</tr>
</table>

**Alternatively...**

Hack with the event data! You can access a JSON version of all the event data at
[`https://rubyconfmini.garytou.com/events`](https://rubyconfmini.garytou.com/events). Go build something cool!

## 🏗️ Development

```sh
git clone https://github.com/garyhtou/rubyconf-mini-2022-schedule

# enter the directory
cd rubyconf-mini-2022-schedule

# install dependencies
yarn

# run the server
yarn dev

# Open https://localhost:3000 in your browser

# the server will refresh on any saved changes
```