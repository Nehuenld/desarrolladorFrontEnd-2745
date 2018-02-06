import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import PeoplePage from './PeoplePage'

import starWars from './reducers'

let store = createStore(
  starWars,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
