import React from 'react';
import { storiesOf } from '@storybook/react';
import MyCalendar from '../src/components/MyCalendar/MyCalendar';

export default {
  title: 'MyCalendar',
};

const events = [
  {
    title: "swimming",
    time: '13:00',
    date: '22-11-2019'
  },
  {
    title: "dancing",
    time: '13:00',
    date: '15-11-2019'
  },
  {
    title: "singing",
    time: '13:00',
    date: '13-11-2019',
  },
];

storiesOf('MyCalendar', module)
  .add('MyCalendar', () => <MyCalendar events={events}/>)
 