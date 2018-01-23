import React, { Component } from 'react'
import Pokemon from './Pokemon'

const pokemon = {
  name: 'Pikachu',
  height: '30 cm',
  weigth: '40 kg'
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Pokemon
          name={pokemon.name}
          height={pokemon.height}
          weigth={pokemon.weigth}
        />
        <Pokemon name={'Charizard'} height={'2 m'} weigth={'300 kg'} />
      </div>
    )
  }
}

export default App
