import * as ActionTypes from './actions'

const initialState = {
  isSearching: false,
  isSearchingDetail: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PEOPLE_SEARCHING:
      return {
        ...state,
        isSearching: true
      }

    case ActionTypes.FETCH_PEOPLE_SEARCHED:
      const { payload } = action
      return {
        ...state,
        isSearching: false,
        peopleList: payload.results
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
        peopleDetail: action.payload
      }
    default:
      return state
  }
}
