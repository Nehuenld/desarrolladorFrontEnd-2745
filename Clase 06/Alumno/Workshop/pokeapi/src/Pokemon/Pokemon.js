import React from 'react'

const styles = {
  detail: {
    cursor: 'pointer'
  }
}

styles.detailPoint = {
  ...styles.detail,
  backgroundColor: 'red'
}

class Pokemon extends Component {
  comoponentWillReceiveProps(nextProps) {
    const { name, isPoint } = this.props
    const { isPoint: nextIsPoint } = nextProps

    if (!isPoint && nextIsPoint) {
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { name, isPoint } = this.props
    const { isPoint: nextIsPoint } = nextProps

    if (!isPoint && nextIsPoint) {
      return true
    }
    return false
  }

  componentWillUnmount() {
    console.log('Me fui de la pantalla', this.props.name)
  }

  render() {
    const { isPoint, name, onPointPokemon } = this.props

    return (
      <h1
        style={isPoint ? styles.detailPoint : styles.detail}
        onClick={() => onPointPokemon(name)}
      >
        {name}
      </h1>
    )
  }
}
