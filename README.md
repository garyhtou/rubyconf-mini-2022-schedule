# RubyConf Mini 2022 Schedule 🗓️

Do you wish to have the RubyConf Mini schedule in your own calendar app? Well, now you can! Subscribe to the
[`https://rubyconfmini.garytou.com/calendar.ics`](https://rubyconfmini.garytou.com/calendar.ics) ICS link in your favorite
calendar app such as Google Calendar, Apple Calendar, Outlook, etc.

This `node.js` app (really should be Ruby 🙄) web scrapes the RubyConf Mini schedule from their website and formats it
as an iCal (ics) file!

## 📎 How to use

| Google Calendar          | [Add to Google Calendar](https://calendar.google.com/calendar/render?cid=j4fl51nffh7vllo958sl3i8dp44s9qr9%40import.calendar.google.com) |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Apple Calendar on iPhone | [Add to Apple Calendar](https://rubyconfmini.garytou.com/calendar.ics)                                                                  |
| Others                   | Subscribe to the `https://rubyconfmini.garytou.com/calendar.ics` calendar link in your favorite calendar app!                           |

**Alternatively...**

Hack with the event data! You can access a JSON version of all the event data at
[`https://rubyconfmini.garytou.com/events`](https://rubyconfmini.garytou.com/events).

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