import { combineReducers } from 'redux'
import FilmsPage from './FilmsPage/reducer'
import PlanetPage from './PlanetPage/reducer'

const starWars = combineReducers({
  FilmsPage,
  PlanetPage
})

export default starWars
