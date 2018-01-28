import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Pokemon from './Pokemon'

const ajaxInfo = {
  name: 'Pikachu',
  height: 100,
  weight: 100,
  url: `http://i1.kym-cdn.com/entries/icons/original/000/019/677/5Pikachu.png`
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Pokemon
          name={ajaxInfo.name}
          height={ajaxInfo.height}
          weight={ajaxInfo.weight}
          url={ajaxInfo.url1}
        />
      </div>
    )
  }
}

export default App
