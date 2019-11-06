import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import Calendar from '../src/components/Calendar/Calendar.js';

const allEvents = [
  { 
    'event1': {
    title:
      "Swiim",
      date: moment().startOf("day").add(1, "d")
    }
  },
  { 
    'event2': {
    title:
      "Selebration",
      date: moment().startOf("day").add(14, "h")
    }
  },
  { 
    'event3': {
    title:
      "New Year",
    date: moment().startOf("day").add(13, "h")
    }
  },
  { 
    'event4': {
    title:
      "Birth Wew",
      date: moment().startOf("day").add(10, "h")
    }
  },
  { 
    'event5': {
    title:
      "Mother day",
      date: moment().startOf("day").add(16, "h")
    }
  }
]

storiesOf('Calendar', module)
  .add('calendar', () => <Calendar events={allEvents}/>)
 