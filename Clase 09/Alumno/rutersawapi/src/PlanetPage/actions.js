export const FETCH_PLANET_SEARCHING = 'FETCH_PLANET_SEARCHING'
export const FETCH_PLANET_SEARCHED = 'FETCH_PLANET_SEARCHED'
export const FETCH_PLANET_FAILED = 'FETCH_PLANET_FAILED'

export const FETCH_DETAIL_SEARCHING = 'FETCH_DETAIL_SEARCHING'
export const FETCH_DETAIL_SEARCHED = 'FETCH_DETAIL_SEARCHED'

export const fetchPlanet = () => {
  return (dispatch, getState, api, request) => {
    dispatch({
      type: FETCH_PLANET_SEARCHING
    })
    request(`${api}/planet`, 'GET')
      .then(response =>
        dispatch({
          type: FETCH_PLANET_SEARCHED,
          payload: {
            results: response.results
          }
        })
      )
      .catch(error =>
        dispatch({
          type: FETCH_PLANET_FAILED,
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
