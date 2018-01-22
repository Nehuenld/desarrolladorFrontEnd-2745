import React, { Component } from 'react'

class Paragraph extends Component {
  render () {
    const { text: pepe } = this.props

    return <p className='App-intro'>{pepe}</p>
  }
}

export default Paragraph
