import { combineReducers } from 'redux'
import filmsPage from './FilmsPage/reducer'
import planetsPage from './PlanetsPage/reducer'

const starWars = combineReducers({
  filmsPage,
  planetsPage
})

export default starWars
