import React, { Component } from 'react'

import { request } from './utils'

import Pokemon from './Pokemon'

import './style.css'

const styles = {
  message: {
    background: 'red',
    display: 'inline-block'
  }
}
styles.description = {
  display: 'inline-block'
}
styles.container = {
  display: 'flex'
}

class PokemonList extends Component {
  constructor(props) {
    super()

    this.state = {
      showPokemon: true,
      value: '',
      pokemonList: [],
      message: 'Buscando datos...',
      pointPokemon: []
    }
  }

  componentWillMount() {
    const { pointPokemon } = this.state
    this.setState({
      pointPokemon: ['bulbasaur']
    })

    this.fetchPokemos(`https://pokeapi.co/api/v2/pokemon`)
  }

  fetchPokemos = url => {
    request(url, 'GET')
      .then(response => {
        this.appendPokemons(response.results)
        // if (response.next) {}
        // this.fetchPokemos(response.next)

        this.setState({
          message: null
        })
      })
      .catch(error => console.log('Error', error))
  }

  // handlerToggle = () => {
  //   const { showPokemon } = this.state

  //   this.setState({
  //     showPokemon: !showPokemon
  //   })
  // }

  handleChangeInput = event => {
    this.setState({
      value: event.target.value
    })
  }

  componentDidMount() {
    const { pointPokemon } = this.state

    // console.log('Ya se monto', choosenPokemon)
  }

  appendPokemons = results => {
    const { pokemonList } = this.state
    this.setState({
      pokemonList: pokemonList.concat(results),
      message: null
    })
  }

  clickPokemon = name => {
    const { pointPokemon } = this.state

    const newPointPokemon = pointPokemon.slice()

    newPointPokemon.push(name)

    this.setState({
      pointPokemon: newPointPokemon
    })
  }
  hideList = () => {
    this.setState({
      showPokemon: false
    })
  }

  render() {
    const {
      showPokemon,
      value,
      pokemonList,
      message,
      clickPokemon
    } = this.state

    return (
      <div>
        {message}
        {showList
          ? pokemonList.map(
              poke =>
                pointPokemon.indexOf(poke.name) === -1 ? (
                  <Pokemon
                    key={poke.name}
                    name={poke.name}
                    isPoint={pointPokemon.indexOf(poke.name) !== -1}
                    onPointPokemon={this.clickPokemon}
                  />
                ) : null
            )
          : null}
      </div>
    )
  }
}

export default PokemonList
