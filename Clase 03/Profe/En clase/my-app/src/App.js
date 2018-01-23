import React, { Component } from 'react'

import Header from './Header'
import Paragraph from './Paragraph'
import './App.css'

const ajaxInfo = {
  title: 'Clase 03',
  subtitle: 'No se duerman!',
  text: 'Es la primera clase de React'
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        {ajaxInfo.title ? (
          <Header title={ajaxInfo.title} subtitle={ajaxInfo.subtitle} />
        ) : null}
        <Paragraph text={ajaxInfo.text} />
      </div>
    )
  }
}

export default App
