import React, { Component } from 'react'

const styles = {
  root: {
    cursor: 'pointer'
  }
}

styles.rootChoosen = {
  ...styles.root,
  backgroundColor: 'red'
}

class Pokemon extends Component {
  componentWillReceiveProps (nextProps) {
    const { name, isChoosen } = this.props
    const { isChoosen: nextIsChoosen } = nextProps

    if (!isChoosen && nextIsChoosen) {
      // console.log('Eligieron a mi pokémon ', name)
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    const { name, isChoosen } = this.props
    const { isChoosen: nextIsChoosen } = nextProps

    if (!isChoosen && nextIsChoosen) {
      return true
    }

    return false
  }

  componentWillUnmount () {
    console.log('Me fuí de la pantalla', this.props.name)
  }

  render () {
    const { isChoosen, name, onClickPokemon } = this.props
    // console.log('Mi poke', name)
    return (
      <h1
        style={isChoosen ? styles.rootChoosen : styles.root}
        onClick={() => onClickPokemon(name)}
      >
        {name}
      </h1>
    )
  }
}

export default Pokemon
