export const FETCH_STARSHIPS_SEARCHING = 'FETCH_STARSHIPS_SEARCHING'
export const FETCH_STARSHIPS_SEARCHED = 'FETCH_STARSHIPS_SEARCHED'
export const FETCH_STARSHIPS_FAILED = 'FETCH_STARSHIPS_FAILED'

export const fetchStarships = () => {
  return (dispatch, getState, { api, request }) => {
    dispatch({
      type: FETCH_STARSHIPS_SEARCHING
    })
    request(`${api}/starships`, 'GET')
      .then((response) =>
        dispatch({
          type: FETCH_STARSHIPS_SEARCHED,
          payload: {
            results: response.results
          }
        })
      )
      .catch((error) =>
        dispatch({
          type: FETCH_STARSHIPS_FAILED,
          payload: {
            error: error
          }
        })
      )
  }
}
