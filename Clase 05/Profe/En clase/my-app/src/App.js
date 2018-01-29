import React, { Component } from 'react'

import { request } from './utils'

import Pokemon from './Pokemon'

// const pokemonList = [
//   {
//     id: 1,
//     name: 'bulbasaur'
//   },
//   {
//     id: 2,
//     name: 'ivysaur'
//   },
//   {
//     id: 3,
//     name: 'venusaur'
//   },
//   {
//     id: 4,
//     name: 'charmander'
//   },
//   {
//     id: 5,
//     name: 'charmeleon'
//   },
//   {
//     id: 6,
//     name: 'charizard'
//   },
//   {
//     id: 7,
//     name: 'squirtle'
//   },
//   {
//     id: 8,
//     name: 'wartortle'
//   },
//   {
//     id: 9,
//     name: 'blastoise'
//   },
//   {
//     id: 10,
//     name: 'caterpie'
//   },
//   {
//     id: 11,
//     name: 'metapod'
//   },
//   {
//     id: 12,
//     name: 'butterfree'
//   },
//   {
//     id: 13,
//     name: 'weedle'
//   },
//   {
//     id: 14,
//     name: 'kakuna'
//   },
//   {
//     id: 15,
//     name: 'beedrill'
//   },
//   {
//     id: 16,
//     name: 'pidgey'
//   },
//   {
//     id: 17,
//     name: 'pidgeotto'
//   },
//   {
//     id: 18,
//     name: 'pidgeot'
//   },
//   {
//     id: 19,
//     name: 'rattata'
//   },
//   {
//     id: 20,
//     name: 'raticate'
//   }
// ]

class App extends Component {
  constructor () {
    super()

    this.state = {
      inputText: '',
      choosenPokemon: [],
      pokemonList: [],
      showList: true,
      message: 'Cargando'
    }

    // console.log('Constructor ', this.state.choosenPokemon)
  }

  componentWillMount () {
    const { choosenPokemon } = this.state
    this.setState({
      choosenPokemon: [ 'bulbasaur' ]
    })

    request('https://pokeapi.co/api/v2/pokemon/', 'GET')
      .then((response) => this.appendPokemons(response.results))
      .catch((error) => console.log('Error', error))

    // console.log('Se va a montar', choosenPokemon)
  }

  handleInputChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  componentDidMount () {
    const { choosenPokemon } = this.state

    // console.log('Ya se monto', choosenPokemon)
  }

  appendPokemons = (results) => {
    const { pokemonList } = this.state
    this.setState({
      pokemonList: pokemonList.concat(results),
      message: null
    })
  }

  handleClickPokemon = (name) => {
    const { choosenPokemon } = this.state

    const newChoosenPokemon = choosenPokemon.slice()

    newChoosenPokemon.push(name)

    this.setState({
      choosenPokemon: newChoosenPokemon
    })
  }

  hideList = () => {
    this.setState({
      showList: false
    })
  }

  render () {
    const { showList, choosenPokemon, pokemonList, message } = this.state

    return (
      <div>
        {message}
        {showList ? (
          pokemonList.map(
            (poke) =>
              choosenPokemon.indexOf(poke.name) === -1 ? (
                <Pokemon
                  key={poke.name}
                  name={poke.name}
                  isChoosen={choosenPokemon.indexOf(poke.name) !== -1}
                  onClickPokemon={this.handleClickPokemon}
                />
              ) : null
          )
        ) : null}
      </div>
    )
  }
}

export default App
