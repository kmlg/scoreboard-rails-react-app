import React from 'react'
import Sport from './sport_details'

export default class SportsList extends React.Component {
  render () {
    return (
      <div className="a_list">
        {this.props.currentSport.title ? `<h3>this.props.currentSport.title</h3>` : ''}
        <ul className="mat_list scrollable">
          { !this.props.sports.length ? (<li>No sports</li>) : '' }
          {this.props.sports.map((sport) => {
            return (
              <Sport sport={sport} currentSport={this.props.currentSport} key={sport.vb_id} setCurrent={this.props.setCurrent} />
            )
          })}
        </ul>
      </div>
    )
  }
}