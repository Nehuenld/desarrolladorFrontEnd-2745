export const FETCH_PEOPLE_SEARCHING = 'FETCH_PEOPLE_SEARCHING'
export const FETCH_PEOPLE_SEARCHED = 'FETCH_PEOPLE_SEARCHED'
export const FETCH_PEOPLE_FAILED = 'FETCH_PEOPLE_FAILED'

export const FETCH_DETAIL_SEARCHING = 'FETCH_DETAIL_SEARCHING'
export const FETCH_DETAIL_SEARCHED = 'FETCH_DETAIL_SEARCHED'

export const fetchPeopleStart = () => {
  return {
    type: FETCH_PEOPLE_SEARCHING,
    text: 'Build my first Redux app'
  }
}

export const fetchPeopleSuccess = (response) => {
  return {
    type: FETCH_PEOPLE_SEARCHED,
    payload: {
      results: response.results
    }
  }
}

export const fetchDetailStart = () => {
  return {
    type: FETCH_DETAIL_SEARCHING,
    text: 'Build my first Redux app'
  }
}

export const fetchDetailSuccess = (response) => {
  return {
    type: FETCH_DETAIL_SEARCHED,
    payload: response
  }
}
