import React, { Component } from 'react'

import Pokemon from './Pokemon'

import { request } from './utils'

const styles = {
  message: {
    background: 'red'
  }
}

class PokemonPages extends Component {
  constructor() {
    super()
    this.state = {
      pokemonList: [],
      selectedPokemon: null,
      message: 'Buscando Datos'
    }
  }

  componentWillMount() {
    this.fetchPokemonPage('https://pokeapi.co/api/v2/pokemon/')
  }

  fetchPokemonPage = url => {
    request(url, 'GET')
      .then(response => {
        this.appendPokemons(response.results)
        if (response.next) {
          this.fetchPokemonPage(response.next)
          if (response.next) {
            this.fetchPokemonPage(response.next)
          }
        }
      })
      .catch(error => console.log('Error', error))
  }

  appendPokemons = results => {
    const { pokemonList } = this.state
    this.setState({
      pokemonList: pokemonList.concat(results),
      message: null
    })
  }

  handleSelectPokemon = selectedPokemonUrl => {
    request(selectedPokemonUrl, 'GET')
      .then(response => {
        this.setState({
          selectedPokemon: response
        })
      })
      .catch(error => console.log('Error', error))
  }

  render() {
    const { pokemonList, selectedPokemon, message } = this.state

    return (
      <div>
        <div style={styles.message}>{message}</div>
        <Pokemon
          pokemonList={pokemonList}
          selectedPokemon={selectedPokemon}
          onSelectPokemon={this.handleSelectPokemon}
        />
      </div>
    )
  }
}

export default PokemonPages
