import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import starWars from './reducers'

const api = 'https://swapi.co/api'

let store = createStore(
  starWars,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
