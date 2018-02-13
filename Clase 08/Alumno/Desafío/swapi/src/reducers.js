import { combineReducers } from 'redux'
import filmsPage from './FilmsPage/reducer'

const starWars = combineReducers({
  filmsPage
})

export default starWars
