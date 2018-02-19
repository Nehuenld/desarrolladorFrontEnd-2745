import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'react-redux'

import PeoplePage from './PeoplePage'

import store from './store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme({ fontFamily: 'Arial' })}>
          <PeoplePage />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
