import React from 'react'

const styles = {
  li: {
    textTransform: 'capitalize',
    fontSize: 48,
    fontweight: 'bold'
  }
}

function PokemonDetail({ id, name, height, weight, sprites }) {
  return <li style={styles.li}>{`# ${id} ${name}`}</li>
}

export default PokemonDetail
