import * as ActionTypes from './actions'

const initialState = {
  isSearching: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PLANETS_SEARCHING:
      return {
        ...state,
        isSearching: true
      }

    case ActionTypes.FETCH_PLANETS_SEARCHED:
      const { payload } = action
      return {
        ...state,
        isSearching: false,
        planetsList: payload.results
      }
    default:
      return state
  }
}
