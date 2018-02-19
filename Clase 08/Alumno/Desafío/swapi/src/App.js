import React, { Component } from 'react'

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import FilmsPage from './FilmsPage'

import starWars from './reducers'

const api = 'https://swapi.co/api'

const styles = {
  logo: {
    backgroundImage:
      'url("https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz-04368052e188.png")',
    height: '66px',
    width: '366px',
    backgroundSize: '100%',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  nav: {
    textAlign: 'center'
  }
}

let store = createStore(
  starWars,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme({ fontFamily: 'Poller One' })}>
          <div style={styles.nav}>
            <div style={styles.logo} />
          </div>
          <FilmsPage />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
