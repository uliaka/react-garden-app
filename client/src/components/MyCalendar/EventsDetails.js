import React from 'react';
import Card from '@material-ui/core/Card';

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

export default EventsDetails;
