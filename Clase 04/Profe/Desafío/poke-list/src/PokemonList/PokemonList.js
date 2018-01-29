import React, { Component } from 'react'
import Pokemon from './Pokemon'

const styles = {
  button: {
    marginTop: 20,
    marginLeft: 60
  },
  input: {
    marginTop: 20,
    marginLeft: 25
  }
}

class PokemonList extends Component {
  constructor () {
    super()

    this.state = {
      showList: true,
      searchText: ''
    }
  }

  handleListButton = () => {
    const { showList } = this.state

    this.setState({
      showList: !showList
    })
  }

  handleInputChange = (event) => {
    this.setState({ searchText: event.target.value })
  }

  render () {
    const { pokemonList } = this.props

    const { showList, searchText } = this.state

    const list = pokemonList.map((pokemon) => (
      <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} />
    ))

    const searchedPokemon = pokemonList.find(
      (pokemon) => pokemon.name === searchText
    )

    return (
      <div>
        <div style={styles.input}>
          <input onChange={this.handleInputChange} />
        </div>
        <div style={styles.button}>
          <button onClick={this.handleListButton}>
            {showList ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        <ul>
          {showList && !searchText ? (
            list
          ) : searchedPokemon ? (
            <Pokemon id={searchedPokemon.id} name={searchedPokemon.name} />
          ) : (
            'Sin resultados!'
          )}
        </ul>
      </div>
    )
  }
}

export default PokemonList
