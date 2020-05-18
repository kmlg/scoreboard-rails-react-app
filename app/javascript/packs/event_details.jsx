import React from 'react'
import { formatDate } from './utils'

export default class Event extends React.Component {
  render () {
    return (
      <li class="card">
        { this.props.currentEvent.vb_id == this.props.event.vb_id
          ? 'selected' : '' 
        }
        <h4><a onClick={this.props.setCurrent} rel={this.props.event.vb_id}>{this.props.event.title}</a></h4>
      </li>
    )
  }
}