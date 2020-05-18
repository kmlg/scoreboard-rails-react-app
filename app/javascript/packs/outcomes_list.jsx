import React from 'react'
import Outcome from './outcome_details'

export default class OutcomesList extends React.Component {
  render() {
    return (
      <div className="a_list section">
        { !this.props.outcomes.length ? (<p>No outcomes</p>) : (
          <table>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Market</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.props.outcomes.map((outcome) => {
                return (
                  <Outcome outcome={outcome} key={outcome.vb_id} setCurrent={this.props.setCurrent} />
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    )
  }
}
