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
      ],
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
    return Number.parseInt(moment().format("D"));
  }

  getEventsInDay(d) {
    let eventsInDay = []
    eventsInDay = this.state.events.filter(event => Number.parseInt(moment(event.date, "DD-MM-YYYY").format("D")) === d);
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
    this.setState({
      events: this.state.events.concat(event)
    })
  }
  onDayClick(e, d) {
    this.setState({
      selectedDay: d,
      showEventsDetails: true,
    },
      () => {
        console.log("state", this.state);
      }
    );
  };
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
            <Table>
              <caption>{this.getCurrentMounth()}</caption>
              <TableHead className='calendar-head'>
                <TableRow>{weekDaysName}</TableRow>
              </TableHead>
              <TableBody>{viewDaysInMounth}</TableBody>
            </Table>
            <div onClick={this.showAddEventsForm} className="add-button btn">
              <span>Add event</span>
            </div>
          </Card>
        </>
      )
    }
    else if (this.state.showEventsDetails === true) {
      console.log("this.state.selectedDay", this.state.selectedDay)
      let eventsInDay = this.getEventsInDay(this.state.selectedDay)
      console.log("eventsInDay", eventsInDay)
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


class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      time: "",
      date: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    //let date = moment(this.state.date, "DD-MM-YYYY").format("DD-MM-YYYY");
    return (
      <Card className="form-add-event">
        <form onSubmit={this.handleSubmit}>
          <label className="input-event">
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
            <span className="label">Title</span>
            <span className="border"></span>
          </label>
          <label className="input-event">
            <input
              type="text"
              name="time"
              value={this.state.time}
              onChange={this.handleInputChange}
            />
            <span className="label">Time</span>
            <span className="border"></span>
          </label>
          <label className="input-event">
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
            <span className="label">Date</span>
            <span className="border"></span>
            </label>
            <div className="add-event btn"
              type='submit'
              onClick={() => {
                this.props.onAddEvents(this.state)
                this.props.closeAddEventsForm()
              }}
            >
              <span>Add event </span>
            </div>
        </form>
      </Card>
    );
  }
};

const EventsDetails = (props) => {
  console.log("props", props.eventsInDay)
  return (
    <Card>
      <div>Details event</div>
      <div>{props.eventsInDay.map(e => {
        // eslint-disable-next-line no-unused-expressions
        <span>{e.title}</span>
      })}</div>
    </Card>

  )
}

export default MyCalendar;
