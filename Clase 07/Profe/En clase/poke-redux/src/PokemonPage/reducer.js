import * as ActionTypes from './actions'

const initialState = {
  isSearchingList: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.POKEMONPAGE_LIST_FETCH_SEARCHING:
      return {
        ...state,
        isSearchingList: true
      }
    case ActionTypes.POKEMONPAGE_LIST_FETCH_SEARCHED:
      return {
        ...state,
        isSearchingList: false,
        pokemonList: action.payload.results,
        pokemonCount: action.payload.count
      }
    default:
      return state
  }
}
