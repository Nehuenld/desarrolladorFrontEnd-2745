import React, { Component } from 'react'
import Pokemon from './Pokemon'

const pokemonList = [
  {
    id: 1,
    name: 'bulbasaur'
  },
  {
    id: 2,
    name: 'ivysaur'
  },
  {
    id: 3,
    name: 'venusaur'
  },
  {
    id: 4,
    name: 'charmander'
  },
  {
    id: 5,
    name: 'charmeleon'
  },
  {
    id: 6,
    name: 'charizard'
  },
  {
    id: 7,
    name: 'squirtle'
  },
  {
    id: 8,
    name: 'wartortle'
  },
  {
    id: 9,
    name: 'blastoise'
  },
  {
    id: 10,
    name: 'caterpie'
  },
  {
    id: 11,
    name: 'metapod'
  },
  {
    id: 12,
    name: 'butterfree'
  },
  {
    id: 13,
    name: 'weedle'
  },
  {
    id: 14,
    name: 'kakuna'
  },
  {
    id: 15,
    name: 'beedrill'
  },
  {
    id: 16,
    name: 'pidgey'
  },
  {
    id: 17,
    name: 'pidgeotto'
  },
  {
    id: 18,
    name: 'pidgeot'
  },
  {
    id: 19,
    name: 'rattata'
  },
  {
    id: 20,
    name: 'raticate'
  }
]

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
