import React from 'react'
import { formatDate } from './utils'

export default class Sport extends React.Component {
  render () {
    return (
      <li className="card">
        { this.props.currentSport.vb_id == this.props.sport.vb_id
          ? 'selected' : '' 
        }
        <h4><a onClick={this.props.setCurrent} rel={this.props.sport.vb_id}>{this.props.sport.title}</a></h4>
      </li>
    )
  }
}