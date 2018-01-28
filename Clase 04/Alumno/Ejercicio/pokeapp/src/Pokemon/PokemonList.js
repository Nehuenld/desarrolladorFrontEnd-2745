import React, { Component } from 'react'

import Pokemon from './Pokemon'

import './style.css'

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
  constructor(props) {
    super()

    this.state = {
      showPokemon: true,
      value: ''
    }
  }

  handlerToggle = () => {
    const { showPokemon } = this.state

    this.setState({
      showPokemon: !showPokemon
    })
  }

  handleChangeInput = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { showPokemon, value } = this.state

    const pokemon = showPokemon
      ? pokemonList.map(pokemon => (
          <Pokemon name={pokemon.name} id={pokemon.id} />
        ))
      : null

    pokemonList.find(pokemon => pokemon.name === value)

    const div = (
      <div class="poke">
        <form>
          <input type="text" onChange={this.handleChangeInput} />
        </form>
        <button onClick={this.handlerToggle} onChange={this.handleChangeToggle}>
          {showPokemon ? 'Ocultar' : 'Mostrar'}
        </button>
        {pokemon}
      </div>
    )

    return div
  }
}

export default PokemonList
