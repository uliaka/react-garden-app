import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import MyCalendar from '../src/components/MyCalendar/MyCalendar';

export default {
  title: 'MyCalendar',
};

const events = [
  {
    title: "swimming",
    date: '22-11-2019'
  },
  {
    title: "dancing",
    date: '15-11-2019'
  },
  {
    title: "singing",
    date: '13-11-2019',
  },
];

storiesOf('MyCalendar', module)
  .add('MyCalendar', () => <MyCalendar events={events}/>)
 