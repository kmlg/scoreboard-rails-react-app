import React from 'react'
import { formatDate } from './utils'

export default class Outcome extends React.Component {
  render () {
    return (
      <tr>
        <td><span class="cell-label">ID</span> <span class="cell-content">{this.props.outcome.vb_id}</span></td>
        <td><span class="cell-label">Market</span> <span class="cell-content">{this.props.outcome.market}</span></td>
        <td><span class="cell-label">Description</span> <span class="cell-content">{this.props.outcome.description}</span></td>
      </tr>
    )
  }
}