import * as ActionTypes from './actions'

const baseState = {
  isSearching: false,
  isSearchingDetail: false
}

export default function reducer(state = baseState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_FILMS_SEARCHING:
      return {
        ...state,
        isSearching: true
      }

    case ActionTypes.FETCH_FILMS_SEARCHED:
      const { payload } = action
      return {
        ...state,
        isSearching: false,
        filmsList: payload.results
      }

    case ActionTypes.FETCH_DETAIL_SEARCHING:
      return {
        ...state,
        isSearchingDetail: true
      }
    case ActionTypes.FETCH_DETAIL_SEARCHED:
      return {
        ...state,
        isSearchingDetail: false,
        filmsDetail: action.payload
      }
    default:
      return state
  }
}
