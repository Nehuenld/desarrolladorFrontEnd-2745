import React, { Component } from 'react'
import PeopleList from './PeopleList'
import PeopleDetail from './PeopleDetail'
import { connect } from 'react-redux'

import {
  fetchPeopleStart,
  fetchPeopleSuccess,
  fetchDetailStart,
  fetchDetailSuccess
} from './actions'

import { request } from './utils'

const styles = {
  root: {
    display: 'flex'
  }
}

class PeoplePage extends Component {
  constructor () {
    super()
    this.state = {
      peopleList: [],
      searching: true,
      inputValue: '',
      selectedPeople: null
    }
  }

  componentWillMount () {
    this.getPeople('https://swapi.co/api/people/')
  }

  getPeople (url) {
    const {
      fetchPeopleSucces,
      fetchPeople,
      fetchPeopleStart,
      fetchPeopleSuccess
    } = this.props

    fetchPeopleStart()

    request(url, 'GET').then((response) => {
      fetchPeopleSuccess(response)
    })
  }

  addPeople (people) {
    const { peopleList } = this.state
    this.setState({
      peopleList: peopleList.concat(people)
    })
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSelectPeople = (url) => {
    const { fetchDetailStart, fetchDetailSuccess } = this.props
    fetchDetailStart()
    request(url, 'GET').then((response) => {
      fetchDetailSuccess(response)
    })
  }

  render () {
    const { isSearching, peopleList, peopleDetail } = this.props

    const { inputValue } = this.state

    const filteredList = peopleList.filter((people) =>
      people.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
      <div style={styles.root}>
        <div>
          {isSearching ? 'Buscando...' : null}
          <div>
            <input onChange={this.handleChange} />
          </div>
          <PeopleList
            peopleList={filteredList}
            onSelectPeople={this.handleSelectPeople}
          />
        </div>
        <div>
          {peopleDetail ? (
            <PeopleDetail
              name={peopleDetail.name}
              eyeColor={peopleDetail['eye_color']}
              height={peopleDetail.height}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    peoplePage: { isSearching, peopleList = [], peopleDetail = null }
  } = state

  return {
    isSearching,
    peopleList,
    peopleDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeopleStart: () => dispatch(fetchPeopleStart()),
    fetchPeopleSuccess: (response) => dispatch(fetchPeopleSuccess(response)),
    fetchDetailStart: () => dispatch(fetchDetailStart()),
    fetchDetailSuccess: (response) => dispatch(fetchDetailSuccess(response))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage)
