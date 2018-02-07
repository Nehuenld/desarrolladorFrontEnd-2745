import { request } from './utils'

export const FETCH_PEOPLE_SEARCHING = 'FETCH_PEOPLE_SEARCHING'
export const FETCH_PEOPLE_SEARCHED = 'FETCH_PEOPLE_SEARCHED'
export const FETCH_PEOPLE_FAILED = 'FETCH_PEOPLE_FAILED'

export const FETCH_DETAIL_SEARCHING = 'FETCH_DETAIL_SEARCHING'
export const FETCH_DETAIL_SEARCHED = 'FETCH_DETAIL_SEARCHED'

export const fetchPeople = () => {
  return (dispatch, getState, api) => {
    dispatch({
      type: FETCH_PEOPLE_SEARCHING,
      text: 'Build my first Redux app'
    })
    request(`${api}/people`, 'GET').then((response) =>
      dispatch({
        type: FETCH_PEOPLE_SEARCHED,
        payload: {
          results: response.results
        }
      })
    )
  }
}

export const fetchDetail = (url) => {
  return (dispatch, getState, api) => {
    dispatch({
      type: FETCH_DETAIL_SEARCHING,
      text: 'Build my first Redux app'
    })
    request(url, 'GET').then((response) =>
      dispatch({
        type: FETCH_DETAIL_SEARCHED,
        payload: response
      })
    )
  }
}

// export const fetchDetailStart = () => {
//   return {
//     type: FETCH_DETAIL_SEARCHING,
//     text: 'Build my first Redux app'
//   }
// }

// export const fetchDetailSuccess = (response) => {
//   return {
//     type: FETCH_DETAIL_SEARCHED,
//     payload: response
//   }
// }
