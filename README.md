# RubyConf Mini 2022 Schedule 🗓️

Do you wish to have the RubyConf Mini schedule in your own calendar app? Well, now you can! Subscribe to the
[`https://rubyconfmini.garytou.com/calendar.ics`](https://rubyconfmini.garytou.com/calendar.ics) ICS link in your favorite
calendar app such as Google Calendar, Apple Calendar, Outlook, etc.

This `node.js` app (really should be Ruby 🙄) web scrapes the RubyConf Mini schedule from their website and formats it
as an iCal (ics) file!

## 📎 How to use

| [`/calendar.ics`](https://rubyconfmini.garytou.com/calendar.ics) | iCal (ics) file of events (for subscription in calendar apps) |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| [`/events`](https://rubyconfmini.garytou.com/events)             | JSON endpoint of events                                       |

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