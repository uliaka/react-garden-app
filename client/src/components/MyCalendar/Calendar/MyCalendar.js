import React from 'react';
import moment from 'moment';
import './MyCalendar.css';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddEvents from '../AddEvents/AddEvents.js';
import EventsDetails from '../EventsDetails/EventsDetails.js';

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
    this.getDate = this.getDate.bind(this)
    this.weekDaysName = this.weekDaysName.bind(this)
    this.emptyDayOfMounth = this.emptyDayOfMounth.bind(this)
    this.daysInMonth = this.daysInMonth.bind(this)
    this.totalGrid = this.totalGrid.bind(this)
    this.viewDaysInMounth = this.viewDaysInMounth.bind(this)
  }

  getCurrentMounth() {
    return this.state.date.startOf('month').format('MMMM YYYY');
  }
  getDaysInMounth() {
    return this.state.date.daysInMonth();;
  }
  firstDayOfMonth() {
    return this.state.date.startOf('month').format('d');
  }
  getCurrentDay() {
    return Number.parseInt(moment().format("D"));
  }
  getDate(d) {
    const startDate = this.state.date.format("DD-MM-YYYY")
    return moment(startDate, "DD-MM-YYYY").add('days', d - 1).format("DD-MM-YYYY");
  }
  getEventsInDay(d) {
    let eventsInDay = []
    eventsInDay = this.state.events.filter((event) => {
      const checkDay = Number.parseInt(moment(event.date, "DD-MM-YYYY").format("D")) === d;
      if (checkDay) {
        return moment(event.date, "DD-MM-YYYY").format("DD-MM-YYYY") === this.getDate(d);
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
  
  weekDaysName = () => {
    const daysName = moment.weekdaysShort()
    return daysName.map(day => {
      return (
        <th key={day}>
          {day}
        </th>
      );
    }); 
  }
  
  emptyDayOfMounth = () => {
    let emptyDayOfMounth = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
       emptyDayOfMounth.push(
        <TableCell>{""}</TableCell>
      );
    }
    return emptyDayOfMounth;
  }
  
  daysInMonth = () => {
    let daysInMonth = [];
    for (let d = 1; d <= this.getDaysInMounth(); d++) {
      let currentDay = d === this.getCurrentDay() ? "today" : '';
      let viewEvents = 0 === this.getEventsInDay(d).length ? "no-events" : "show-events"
      daysInMonth.push(
        <TableCell align="center" key={d} className={`calendar-day ${currentDay}`}>
          <span onClick={e => { this.onDayClick(e, d) }} >
            {d}
            <div className={` ${viewEvents}`}>{this.getEventsInDay(d).length}</div>
          </span>
        </TableCell>
      );
    }
    return daysInMonth;
  };

  totalGrid = () => {
    let totalGrid = [...this.emptyDayOfMounth(), ...this.daysInMonth()];
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
    return rows;
  };

   viewDaysInMounth = () => this.totalGrid().map((d, i) => {
    return <TableRow>{d}</TableRow>;
  });

  render() {
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
                <TableRow>{this.weekDaysName()}</TableRow>
              </TableHead>
              <TableBody>{this.viewDaysInMounth()}</TableBody>
            </Table>
            <div onClick={this.showAddEventsForm} className="add-event btn">
              <span>Add event</span>
            </div>
          </Card>
        </>
      )
    }
    else if (this.state.showEventsDetails === true) {
      return (
        <EventsDetails
          selectedDate={this.getDate(this.state.selectedDay)}
          eventsInDay={this.getEventsInDay(this.state.selectedDay)}
        />
      )
    }
    else if (this.state.showAddEventsForm) {
      return (
        <AddEvents
          onAddEvents={(event) => this.onAddEvents(event)}
          closeAddEventsForm={() => this.closeAddEventsForm()}
        />
      )
    }
  }
}


export default MyCalendar;

