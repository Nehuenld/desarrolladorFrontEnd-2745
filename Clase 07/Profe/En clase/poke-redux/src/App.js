import React, { Component } from 'react'
import PokemonPage from './PokemonPage'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PokemonPage />
      </Provider>
    )
  }
}

export default App
