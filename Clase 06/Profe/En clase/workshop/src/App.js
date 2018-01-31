import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { request } from './utils'

class App extends Component {
  constructor () {
    super()
    this.state = {
      pokemonList: []
    }
  }

  componentWillMount () {
    this.fetchPokemonPage('https://pokeapi.co/api/v2/pokemon/')
  }

  fetchPokemonPage = (url) => {
    request(url, 'GET')
      .then((response) => {
        console.log('Lo que devuelve la API', response)
        this.appendPokemons(response.results)
        if (response.next) {
          this.fetchPokemonPage(response.next)
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

  render () {
    console.log(this.state.pokemonList)
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
