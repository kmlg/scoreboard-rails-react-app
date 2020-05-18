import * as Actions from '../actions/app';

export const initialState = {
  sports: [],
  currentSport: {},
  events: [],
  currentEvent: {},
  outcomes: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_SPORTS_SUCCESS:
      return {
        ...state,
        sports: action.payload.data
      }
    case Actions.SET_CURRENT_SPORT:
      let sportId = action.payload
      let currentSport = state.sports.find((sport) => {
        return sport.vb_id == sportId
      })
      return {
        ...state,
        currentSport: currentSport
      }
    case Actions.GET_EVENTS_SUCCESS:
      return {        
        ...state,
        events: action.payload.data
      }
    case Actions.SET_CURRENT_EVENT:
      let eventId = action.payload
      let currentEvent = state.events.find((event) => {
        return event.vb_id == eventId
      })
      return {
        ...state,
        currentEvent: currentEvent
      }
    case Actions.GET_OUTCOMES_SUCCESS:
      return {
        ...state,
        outcomes: action.payload.data
      }
    case Actions.CLEAR_STATE:
      return {
        ...state,
        currentEvent: {},
        outcomes: []
      }

    default: return state
  }
}