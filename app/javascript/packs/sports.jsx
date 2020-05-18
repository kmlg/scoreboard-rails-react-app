import React from 'react'
import SportsList from './sports_list'
import EventsList from './events_list'
import OutcomesList from './outcomes_list'

import { connect } from 'react-redux'

import LocalizedStrings from 'react-localization'

import {
  getSports,
  getEvents,
  getOutcomes,
  fetchData,
  setCurrentEvent,
  setCurrentSport,
  clearState
} from './actions/app'

let i18n = new LocalizedStrings({
  en:{
    sports: "Sports",
    events: "Events",
    outcomes: "Outcomes"
  },
  de: {
    sports: "Sports[DE]",
    events: "Events[DE]",
    outcomes: "Outcomes[DE]"
  }
 })
class Sports extends React.Component {
  componentWillMount() {
    this.props.getSports()
  }

  fetchData() {
    this.props.fetchData().then(() => {
      this.props.getSports()
    })
  }

  switchLocale(e) {
    let locale = e.target.getAttribute('rel')
    i18n.setLanguage(locale);
    this.setState({})
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchData.bind(this)}>Fetch live data</button>
        <button onClick={this.switchLocale.bind(this)} rel="en">English</button>
        <button onClick={this.switchLocale.bind(this)} rel="de">German</button>
        <h2>{i18n.sports}</h2>
        <SportsList sports={this.props.sports} currentSport={this.props.currentSport} setCurrent={this.props.getEvents} />
        <h2>{i18n.events}</h2>
        <EventsList events={this.props.events} currentEvent={this.props.currentEvent} setCurrent={this.props.getOutcomes} />
        <h2>{i18n.outcomes}</h2>
        <OutcomesList outcomes={this.props.outcomes} />
      </div>
    )
  }
}

const mapStateToProps = (state) => (state.app)

const mapDispatchToProps = (dispatch) => ({
  getSports: () => {
    dispatch(getSports())
  },
  getEvents: (sportId) => {
    dispatch(getEvents(sportId))
    dispatch(setCurrentSport(sportId))
    dispatch(clearState())
  },
  getOutcomes: (eventId) => {
    dispatch(getOutcomes(eventId))
    dispatch(setCurrentEvent(eventId))
  },
  fetchData: () => {
    return dispatch(fetchData())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sports)
