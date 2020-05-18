import {
  combineReducers
} from 'redux'

import {
  initialState as appInitialState,
  reducer as appReducer
} from './app'

export const initialState = {
  app: appInitialState
}

export const reducers = combineReducers({
  app: appReducer
})