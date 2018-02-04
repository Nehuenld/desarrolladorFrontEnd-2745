import React, { Component } from 'react'

import PokemonList from './PokemonList'

import { request } from './utils'

class App extends Component {
  constructor () {
    super()
    this.state = {
      pokemonList: [],
      selectedPokemon: null
    }
  }

  componentWillMount () {
    this.fetchPokemonPage('https://pokeapi.co/api/v2/pokemon/')
  }

  fetchPokemonPage = (url) => {
    request(url, 'GET')
      .then((response) => {
        this.appendPokemons(response.results)
        if (response.next) {
          // this.fetchPokemonPage(response.next)
        }
      })
      .catch((error) => console.log('Error', error))
  }

  appendPokemons = (results) => {
    const { pokemonList } = this.state
    this.setState({
      pokemonList: pokemonList.concat(results)
    })
  }

  handleSelectPokemon = (selectedPokemonUrl) => {
    request(selectedPokemonUrl, 'GET')
      .then((response) => {
        this.setState({
          selectedPokemon: response
        })
      })
      .catch((error) => console.log('Error', error))
  }

  render () {
    const { pokemonList, selectedPokemon } = this.state

    return (
      <div>
        <PokemonList
          pokemonList={pokemonList}
          selectedPokemon={selectedPokemon}
          onSelectPokemon={this.handleSelectPokemon}
        />
      </div>
    )
  }
}

export default App
