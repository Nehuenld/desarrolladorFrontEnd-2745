import { combineReducers } from 'redux'
import peoplePage from './PeoplePage/reducer'
import starshipsPage from './StarshipsPage/reducer'

const starWars = combineReducers({
  peoplePage,
  starshipsPage
})

export default starWars
