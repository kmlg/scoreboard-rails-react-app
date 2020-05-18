import React from 'react'
import Event from './event_details'

export default class EventsList extends React.Component {
  render () {
    return (
      <div className="a_list">
        {this.props.currentEvent.title ? `<h3>this.props.currentEvent.title</h3>` : ''}
        <ul className="mat_list scrollable">
          { !this.props.events.length ? (<li>No events</li>) : '' }
          {this.props.events.map((event) => {
            return (
              <Event event={event} currentEvent={this.props.currentEvent} key={event.vb_id} setCurrent={this.props.setCurrent} />
            )
          })}
        </ul>
      </div>
    )
  }
}
