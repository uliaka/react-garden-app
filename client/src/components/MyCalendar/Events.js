import React from 'react';
import Card from '@material-ui/core/Card';
import './Events.css';

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

export default Events;
