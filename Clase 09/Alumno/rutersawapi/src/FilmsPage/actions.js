export const FETCH_FILMS_SEARCHING = 'FETCH_FILMS_SEARCHING'
export const FETCH_FILMS_SEARCHED = 'FETCH_FILMS_SEARCHED'
export const FETCH_FILMS_FAILED = 'FETCH_FILMS_FAILED'

export const FETCH_DETAIL_SEARCHING = 'FETCH_DETAIL_SEARCHING'
export const FETCH_DETAIL_SEARCHED = 'FETCH_DETAIL_SEARCHED'

export const fetchFilms = () => {
  return (dispatch, getState, api, request) => {
    dispatch({
      type: FETCH_FILMS_SEARCHING
    })
    request(`${api}/films`, 'GET')
      .then(response =>
        dispatch({
          type: FETCH_FILMS_SEARCHED,
          payload: {
            results: response.results
          }
        })
      )
      .catch(error =>
        dispatch({
          type: FETCH_FILMS_FAILED,
          payload: {
            error: error
          }
        })
      )
  }
}

export const fetchDetail = url => {
  return (dispatch, getState, api, request) => {
    dispatch({
      type: FETCH_DETAIL_SEARCHING
    })
    request(url, 'GET').then(response =>
      dispatch({
        type: FETCH_DETAIL_SEARCHED,
        payload: response
      })
    )
  }
}
