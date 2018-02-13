import React, { Component } from 'react'

import StarWar from './StarWar'

import { request } from './utils'

const styles = {
  message: {
    background: 'red'
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleList: [],
      selectedPeople: null,
      message: 'Buscando Datos'
    }
  }

  componentWillMount() {
    this.fetchPeoplePage('https://swapi.co/api/people')
  }

  fetchPeoplePage = url => {
    request(url, 'GET')
      .then(response => {
        this.appendPeople(response.results)
        if (response.next) {
          // this.fetchPeoplePage(response.next)
        }
      })
      .catch(error => console.log('Error', error))
  }

  appendPeople = results => {
    const { peopleList } = this.state
    this.setState({
      peopleList: peopleList.concat(results),
      message: null
    })
  }

  handleSelectPeople = selectedPeopleUrl => {
    request(selectedPeopleUrl, 'GET')
      .then(response => {
        this.setState({
          selectedPeople: response
        })
      })
      .catch(error => console.log('Error', error))
  }

  render() {
    const { peopleList, selectedPeople, message } = this.state

    return (
      <div>
        <div style={styles.message}>{message}</div>
        <StarWar
          peopleList={peopleList}
          selectedPeople={selectedPeople}
          onSelectPeople={this.handleSelectPeople}
        />
      </div>
    )
  }
}

export default App
