import React, { Component } from 'react'
import Pokemon from './Pokemon'
import PokemonDetail from './PokemonDetail'
import './pokemonList.css'

const styles = {
  root: {
    display: 'flex'
  },
  input: {
    margin: 'auto'
  },
  firstColumn: {
    width: 300,
    display: 'flex-column',
    alignItems: 'center',
    textAlign: 'center'
  }
}

class PokemonList extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    const { pokemonList, selectedPokemon, onSelectPokemon } = this.props
    const { value } = this.state

    const filteredPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.includes(value.toLowerCase())
    )
    console.log(selectedPokemon)
    return (
      <div style={styles.root}>
        <div style={styles.firstColumn}>
          <input style={styles.input} onChange={this.handleInputChange} />
          <ul>
            {value ? (
              filteredPokemonList.map((pokemon) => (
                <Pokemon
                  key={pokemon.url.split('/')[6]}
                  id={pokemon.url.split('/')[6]}
                  name={pokemon.name}
                  url={pokemon.url}
                  onSelectPokemon={onSelectPokemon}
                />
              ))
            ) : (
              pokemonList.map((pokemon) => (
                <Pokemon
                  key={pokemon.url.split('/')[6]}
                  id={pokemon.url.split('/')[6]}
                  name={pokemon.name}
                  url={pokemon.url}
                  onSelectPokemon={onSelectPokemon}
                />
              ))
            )}
          </ul>
        </div>
        <div>
          {selectedPokemon ? (
            <PokemonDetail
              key={selectedPokemon}
              id={selectedPokemon.id}
              name={selectedPokemon.name}
              weight={selectedPokemon.weight}
              height={selectedPokemon.height}
              sprites={selectedPokemon.sprites}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default PokemonList
