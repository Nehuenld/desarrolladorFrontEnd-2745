import React, { Component } from 'react'
import People from './People'
import Detalles from './Detalles'
import './style.css'

const styles = {
  root: {
    boxSizing: 'borderBox',
    display: 'flex',
    fontWeight: 'bold',
    marginTop: 20
  },
  input: {
    marginLeft: 22
  },
  firstColumn: {
    width: 300,
    display: 'flex-column',
    textAlign: 'left'
  }
}

class PeopleList extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { peopleList = [], selectedPeople, onSelectPeople } = this.props
    const { value } = this.state

    const filteredPeopleList = peopleList.filter(people =>
      people.name.toLowerCase().includes(value.toLowerCase())
    )
    console.log(selectedPeople)

    return (
      <div style={styles.root}>
        <div style={styles.firstColumn}>
          <input style={styles.input} onChange={this.handleInputChange} />
          <ul>
            {value
              ? filteredPeopleList.map(people => (
                  <People
                    key={people.url.split('/')[6]}
                    name={people.name}
                    url={people.url}
                    onSelectPeople={onSelectPeople}
                  />
                ))
              : peopleList.map(people => (
                  <People
                    key={people.url.split('/')[6]}
                    name={people.name}
                    url={people.url}
                    onSelectPeople={onSelectPeople}
                  />
                ))}
          </ul>
        </div>
        <div>
          Detalle del Personaje
          {selectedPeople ? (
            <Detalles
              key={selectedPeople}
              name={selectedPeople.name}
              gender={selectedPeople.gender}
              height={selectedPeople.height}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default PeopleList
