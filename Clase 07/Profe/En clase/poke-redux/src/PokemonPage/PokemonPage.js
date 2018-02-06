import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonList from './PokemonList'

import { request } from './utils'

import { fetchPokemonList, fetchPokemonListSearched } from './actions'

class PokemonPage extends Component {
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
    const { fetchPokemonList, fetchPokemonListSearched } = this.props
    fetchPokemonList()
    request(url, 'GET')
      .then((response) => {
        fetchPokemonListSearched(response)
        // this.appendPokemons(response.results)
        // if (response.next) {
        //   // this.fetchPokemonPage(response.next)
        // }
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
    const { pokemonList, pokemonCount } = this.props
    const { selectedPokemon } = this.state

    return (
      <div>
        {`Mostrando ${pokemonList.length} de ${pokemonCount}`}
        <PokemonList
          pokemonList={pokemonList}
          selectedPokemon={selectedPokemon}
          onSelectPokemon={this.handleSelectPokemon}
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  const {
    pokemonPage: { isSearchingList, pokemonList = [], pokemonCount }
  } = store

  return {
    isSearchingList,
    pokemonList,
    pokemonCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemonList: () => dispatch(fetchPokemonList()),
    fetchPokemonListSearched: (response) =>
      dispatch(fetchPokemonListSearched(response))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage)
