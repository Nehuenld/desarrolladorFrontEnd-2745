import React, { Component } from 'react'

const styles = {
  Pikachu: {
    weight: '150px',
    height: '150px'
  },
  Container: {
    margin: '10px 700px 10px 700px',
    borderRadius: '1%',
    border: 'solid black 1px',
    color: 'darkgray'
  }
}

class Pokemon extends Component {
  render() {
    const { name, height, weight, url } = this.props
    return (
      <div className="Container" style={styles.Container}>
        <div className="Pikachu" />
        <p>{`Nombre ${name}`}</p>
        <img
          className="Imagen"
          src={url}
          alt="pikachu"
          style={styles.Pikachu}
        />
        <p>{`Ancho ${height}`}</p>
        <p>{`Peso ${weight}`}</p>
      </div>
    )
  }
}
export default Pokemon
