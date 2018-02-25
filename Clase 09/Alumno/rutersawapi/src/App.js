import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './Layout'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider>
            <Route component={Layout} />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
