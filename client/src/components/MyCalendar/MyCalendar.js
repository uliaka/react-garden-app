import React from 'react';
import moment from 'moment';
import './MyCalendar.css';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Events from './Events.js';
import EventsDetails from './EventsDetails.js';

class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [...this.props.events],
      date: moment(),
      showAddEventsForm: false,
      showEventsDetails: false,
      selectedDay: ""

    }

    this.getDaysInMounth = this.getDaysInMounth.bind(this)
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this)
    this.getCurrentMounth = this.getCurrentMounth.bind(this)
    this.getEventsInDay = this.getEventsInDay.bind(this)
    this.showAddEventsForm = this.showAddEventsForm.bind(this)
    this.closeAddEventsForm = this.closeAddEventsForm.bind(this)
    this.onAddEvents = this.onAddEvents.bind(this)
    this.onDayClick = this.onDayClick.bind(this)
  }

  getCurrentMounth() {
    return this.state.date.startOf('month').format('MMMM YYYY');
  }
  getDaysInMounth() {
    return this.state.date.daysInMonth();;
  }
  firstDayOfMonth() {
    const firstDayOfMonth = this.state.date.startOf('month').format('d');
    return firstDayOfMonth
  }
  getCurrentDay() {
    return Number.parseInt(moment().format("D"));
  }

  getEventsInDay(d) {
    const startDate = this.state.date.format("DD-MM-YYYY")
    let eventsInDay = []
    eventsInDay = this.state.events.filter((event) => {
      const checkDay = Number.parseInt(moment(event.date, "DD-MM-YYYY").format("D")) === d;
      if (checkDay) {
        return moment(event.date, "DD-MM-YYYY").format("DD-MM-YYYY") === moment(startDate, "DD-MM-YYYY").add('days', d - 1).format("DD-MM-YYYY");;
      }
    });
    return eventsInDay;
  }
  showAddEventsForm() {
    this.setState({
      showAddEventsForm: true
    })
  }
  closeAddEventsForm() {
    this.setState({
      showAddEventsForm: false
    })
  }
  onAddEvents(event) {
    return this.setState({
      events: this.state.events.concat(event)
    })
  }
  onDayClick(e, d) {
    this.setState({
      selectedDay: d,
      showEventsDetails: true,
    },
      () => {
      }
    );
  };
  onPrevMounth = () => {
    this.setState({
      date: this.state.date.subtract(1, "month")
    });
  };
  onNextMounth = () => {
    this.setState({
      date: this.state.date.add(1, "month")
    });
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
      let currentDay = d === this.getCurrentDay() ? "today" : '';
      let viewEvents = 0 === this.getEventsInDay(d).length ? "no-events" : "show-events"
      daysInMonth.push(
        <TableCell key={d} className={`calendar-day ${currentDay}`}>
          <span onClick={e => { this.onDayClick(e, d) }} >
            {d}
            <div className={` ${viewEvents}`}>{this.getEventsInDay(d).length}</div>
          </span>
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

    if (!this.state.showAddEventsForm && !this.state.showEventsDetails) {
      return (
        <>
          <Card className='my-calendar'>
            <div className="wrapper-mounth">
              <span onClick={e => {
                this.onPrevMounth();
              }}
                class="button-prev"
              />
              <h3>{this.getCurrentMounth()}</h3>
              <span onClick={e => {
                this.onNextMounth();
              }}
                class="button-next"
              />
            </div>
            <Table>
              <TableHead className='calendar-head'>
                <TableRow>{weekDaysName}</TableRow>
              </TableHead>
              <TableBody>{viewDaysInMounth}</TableBody>
            </Table>
            <div onClick={this.showAddEventsForm} className="add-event btn">
              <span>Add event</span>
            </div>
          </Card>
        </>
      )
    }
    else if (this.state.showEventsDetails === true) {
      let eventsInDay = this.getEventsInDay(this.state.selectedDay)
      return (
        <EventsDetails
          eventsInDay={eventsInDay}
        />
      )
    }
    else if (this.state.showAddEventsForm) {
      return (
        <Events
          onAddEvents={(event) => this.onAddEvents(event)}
          closeAddEventsForm={() => this.closeAddEventsForm()}
        />
      )
    }
  }
}


export default MyCalendar;

