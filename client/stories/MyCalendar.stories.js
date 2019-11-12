import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

import MyCalendar from '../src/components/MyCalendar/MyCalendar';

export default {
  title: 'MyCalendar',
};

storiesOf('MyCalendar', module)
  .add('MyCalendar', () => <MyCalendar />)
 