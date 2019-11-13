import React from 'react';
import moment from 'moment';
import './MyCalendar.css';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: "swimming",
          date: moment().format("D")
        },
        {
          title: "dancing",
          date: moment().format("D")
        },
        {
          title: "singing",
          date: moment().add(1, 'days').format("D"),
        },
      ]
    }


    this.getDaysInMounth = this.getDaysInMounth.bind(this)
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this)
    this.getCurrentMounth = this.getCurrentMounth.bind(this)
    this.getEventsInDay = this.getEventsInDay.bind(this)
  }

  getCurrentMounth() {
    return moment().startOf('month').format('MMMM YYYY');
  }
  getDaysInMounth() {
    return moment().daysInMonth();;
  }
  firstDayOfMonth() {
    const firstDayOfMonth = moment().startOf('month').format('d');
    return firstDayOfMonth
  }
  getCurrentDay() {
    return moment().format("D");
  }

  getEventsInDay(d) {
    let eventsInDay = []
    eventsInDay = this.state.events.filter(event => Number.parseInt(event.date) === d);
    return eventsInDay.length;
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
        <TableCell>{""}</TableCell>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.getDaysInMounth(); d++) {
      let currentDay = d === +this.getCurrentDay() ? "today" : '';
      daysInMonth.push(
        <TableCell key={d} className={`calendar-day ${currentDay}`}>
          {d}
          <div>{this.getEventsInDay(d)}</div>
        </TableCell>
      );
    }

    let totalGrid = [...emptyDayOfMounth, ...daysInMonth];
    let rows = [];
    let cells = [];
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
      return <TableRow>{d}</TableRow>;
    });

    return (
      <Card className='my-calendar'>
        <Table>
          <caption>{this.getCurrentMounth()}</caption>
          <TableHead className='calendar-head'>
            <TableRow>{weekDaysName}</TableRow>
          </TableHead>
          <TableBody>{viewDaysInMounth}</TableBody>
        </Table>
      </Card>
    );
  }
}


export default MyCalendar;
