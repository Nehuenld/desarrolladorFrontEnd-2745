import React, { Component } from 'react'
import Pokemon from './Pokemon'

class PokemonList extends Component {
  constructor () {
    super()

    this.state = {
      showList: true
    }
  }

  handleListButton = () => {
    const { showList } = this.state

    this.setState({
      showList: !showList
    })
  }

  render () {
    const { pokemonList } = this.props

    const { showList } = this.state

    const list = pokemonList.map((pokemon) => (
      <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} />
    ))

    return (
      <div>
        <button onClick={this.handleListButton}>
          {showList ? 'Ocultar' : 'Mostrar'}
        </button>
        <ul>{showList ? list : null}</ul>
      </div>
    )
  }
}

export default PokemonList
