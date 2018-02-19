import * as ActionTypes from './actions'

const initialState = {
  isSearching: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_STARSHIPS_SEARCHING:
      return {
        ...state,
        isSearching: true
      }

    case ActionTypes.FETCH_STARSHIPS_SEARCHED:
      const { payload } = action
      return {
        ...state,
        isSearching: false,
        starshipsList: payload.results
      }

    default:
      return state
  }
}
