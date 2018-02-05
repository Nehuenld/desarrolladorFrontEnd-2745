import React, { Component } from 'react'
import PeopleList from './PeopleList'
import PeopleDetail from './PeopleDetail'

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
    const { fetchPeopleSucces, fetchPeople } = this.props
    request(url, 'GET').then((response) => {
      this.addPeople(response.results)
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
    request(url, 'GET').then((response) => {
      this.setState({ selectedPeople: response })
    })
  }

  render () {
    const { peopleList, searching, inputValue, selectedPeople } = this.state

    const filteredList = peopleList.filter((people) =>
      people.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
      <div style={styles.root}>
        <div>
          {searching ? 'Buscando...' : null}
          <div>
            <input onChange={this.handleChange} />
          </div>
          <PeopleList
            peopleList={filteredList}
            onSelectPeople={this.handleSelectPeople}
          />
        </div>
        <div>
          {selectedPeople ? (
            <PeopleDetail
              name={selectedPeople.name}
              eyeColor={selectedPeople['eye_color']}
              height={selectedPeople.height}
            />
          ) : null}
        </div>
      </div>
    )
  }
}
export default PeoplePage
