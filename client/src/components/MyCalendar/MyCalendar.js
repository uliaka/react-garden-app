import React from 'react';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class MyCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment()
    }
    this.getDaysInMounth = this.getDaysInMounth.bind(this)
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this)
  }
  getCurrentDate() {
    return moment().date()
  }
  getDaysInMounth() {
    return moment().daysInMonth();;
  }

  firstDayOfMonth() {
    const firstDayOfMonth = moment(this.state.date).startOf('month').format('d');
    return firstDayOfMonth
  }

  render() {
    const daysName = moment.weekdaysShort()
    const weekDaysName = daysName.map(day => {
      return (
        <th key={day}>
          {day}
        </th>
      );
    });

    let emptyDayOfMounth = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      emptyDayOfMounth.push(
        <td>{""}</td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.getDaysInMounth(); d++) {
      daysInMonth.push(
        <td key={d}>
          {d}
        </td>
      );
    }

    var totalGrid = [...emptyDayOfMounth, ...daysInMonth];
    let rows = [];
    let cells = [];
    console.log("totalGrid", totalGrid)
    totalGrid.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalGrid.length - 1) {
        rows.push(cells);
      }
    });

    let viewDaysInMounth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <div className='my-calendar'>
        <table>
          <thead>
            <tr>{weekDaysName}</tr>
          </thead>
          <tbody>{viewDaysInMounth}</tbody>
        </table>
      </div>
    );
  }
}


