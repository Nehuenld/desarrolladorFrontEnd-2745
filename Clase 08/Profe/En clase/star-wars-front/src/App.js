import React, { Component } from 'react'

import { Provider } from 'react-redux'

import PeoplePage from './PeoplePage'

import store from './store'

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
