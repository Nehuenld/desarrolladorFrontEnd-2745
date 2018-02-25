import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import starWars from './reducers'
import { request } from './utils'

const api = 'https://swapi.co/api'

// const extraArguments = { api, request }

let store = createStore(
  starWars,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
