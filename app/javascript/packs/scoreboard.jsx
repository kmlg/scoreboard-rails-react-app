import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux'
import { reducers, initialState } from './reducers';

import Sports from './sports'

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL: 'http://localhost:3000/scoreboard',
  responseType: 'json'
})

//create the store
let store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    axiosMiddleware(client)
  )
)

const Scoreboard = props => (
  <div>
    <h1>{props.name}!</h1>
    <Sports store={store} />
  </div>
)

Scoreboard.defaultProps = {
  name: 'Scoreboard'
}

Scoreboard.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Scoreboard store={store} name="Scoreboard" />,
    document.body.appendChild(document.createElement('div')),
  )
})
