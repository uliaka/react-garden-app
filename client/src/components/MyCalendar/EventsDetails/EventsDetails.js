import React from 'react';
import './EventsDetails.css';

const EventsDetails = (props) => {
  const events = props.eventsInDay
  const columnNane = ['Title', 'Time', 'Date']
  return (
    <div className="card">
      <div className='card-title'>Details event</div>
      {events.length ?
        <div className='events-list'>
          {columnNane.map(name => 
            <div id='column-name'>{name}</div>)}
          {events.map(event =>
            <>
              <div>{event.title}</div>
              <div>{event.time}</div>
              <div>{event.date}</div>
            </>
          )}
        </div>
        :
        <div> No events </div>}
    </div>
  )
}

export default EventsDetails;
