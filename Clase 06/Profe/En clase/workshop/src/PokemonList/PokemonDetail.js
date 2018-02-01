import React from 'react'

const styles = {
  li: {
    textTransform: 'capitalize',
    fontSize: 24
  }
}

function PokemonDetail ({ id, name, height, weight, sprites }) {
  return (
    <li style={styles.li}>
      {`# ${id} ${name} P: ${weight} A:${height}`}
      <img src={sprites.front_default} />
    </li>
  )
}

export default PokemonDetail
