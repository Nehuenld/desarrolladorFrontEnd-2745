export const FETCH_PLANETS_SEARCHING = 'FETCH_PLANETS_SEARCHING'
export const FETCH_PLANETS_SEARCHED = 'FETCH_PLANETS_SEARCHED'
export const FETCH_PLANETS_FAILED = 'FETCH_PLANETS_FAILED'

export const fetchPlanets = () => {
  return (dispatch, getState, { api, request }) => {
    dispatch({
      type: FETCH_PLANETS_SEARCHING
    })
    request(`${api}/planets`, 'GET')
      .then(response =>
        dispatch({
          type: FETCH_PLANETS_SEARCHED,
          payload: {
            results: response.results
          }
        })
      )
      .catch(error =>
        dispatch({
          type: FETCH_PLANETS_FAILED,
          payload: {
            error: error
          }
        })
      )
  }
}
