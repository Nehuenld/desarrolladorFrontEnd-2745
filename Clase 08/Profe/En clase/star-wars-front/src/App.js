import React, { Component } from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import PeoplePage from './PeoplePage'

import starWars from './reducers'

const api = 'https://swapi.co/api'

let store = createStore(
  starWars,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PeoplePage />
      </Provider>
    )
  }
}

export default App
