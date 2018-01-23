import React, { Component } from 'react'

const styles = {
  root: {
    textAlign: 'center'
  },
  name: {
    color: 'red'
  }
}

class Pokemon extends Component {
  render () {
    const { name, height, weigth } = this.props

    return (
      <div style={styles.root}>
        <h1 style={styles.name}>{`Soy un ${name}`}</h1>
        <h3>{`Mido ${height}`}</h3>
        <h4>{`Peso ${weigth}`}</h4>
      </div>
    )
  }
}

export default Pokemon
