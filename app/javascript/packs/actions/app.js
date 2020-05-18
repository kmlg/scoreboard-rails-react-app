export const GET_SPORTS = 'APP_GET_SPORTS'
export const GET_SPORTS_SUCCESS = 'APP_GET_SPORTS_SUCCESS'
export const GET_SPORTS_FAIL = 'APP_GET_SPORTS_FAIL'
export const getSports = () => ({
  type: GET_SPORTS,
  payload: {
    request: {
      url: '/sports'
    }
  }
})

export const GET_EVENTS = 'APP_GET_EVENTS'
export const GET_EVENTS_SUCCESS = 'APP_GET_EVENTS_SUCCESS'
export const GET_EVENTS_FAIL = 'APP_GET_EVENTS_FAIL'
export const getEvents = (payload) => {
  let sportId = payload.target.getAttribute('rel')
  return {
    type: GET_EVENTS,
    payload: {
      request:{
        url: `/events/${sportId}`
      }
    }
  }
}

export const GET_OUTCOMES = 'APP_GET_OUTCOMES'
export const GET_OUTCOMES_SUCCESS = 'APP_GET_OUTCOMES_SUCCESS'
export const GET_OUTCOMES_FAIL = 'APP_GET_OUTCOMES_FAIL'
export const getOutcomes = (payload) => {
  let eventId = payload.target.getAttribute('rel')
  return {
    type: GET_OUTCOMES,
    payload: {
      request:{
        url: `/outcomes/${eventId}`
      }
    }
  }
}

export const FETCH_DATA = 'APP_FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'APP_FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAIL = 'APP_FETCH_DATA_FAIL'
export const fetchData = () => {
  return {
    type: FETCH_DATA,
    payload: {
      request:{
        url: `/fetch`
      }
    }
  }
}

export const SET_CURRENT_EVENT = 'APP_SET_CURRENT_EVENT'
export const setCurrentEvent = (payload) => {
  return {
    type: SET_CURRENT_EVENT,
    payload: payload.target.getAttribute('rel')
  }
}

export const SET_CURRENT_SPORT = 'APP_SET_CURRENT_SPORT'
export const setCurrentSport = (payload) => {
  return {
    type: SET_CURRENT_SPORT,
    payload: payload.target.getAttribute('rel')
  }
}


export const CLEAR_STATE = 'APP_CLEAR_STATE'
export const clearState = () => {
  return {
    type: CLEAR_STATE,
    payload: []
  }
}
