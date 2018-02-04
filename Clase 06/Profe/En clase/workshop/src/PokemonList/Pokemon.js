import React from 'react'

const styles = {
  li: {
    textTransform: 'capitalize',
    fontSize: 16,
    cursor: 'pointer'
  }
}

function Pokemon ({ id, name, url, onSelectPokemon }) {
  return (
    <li
      style={styles.li}
      onClick={() => onSelectPokemon(url)}
    >{`# ${id} ${name}`}</li>
  )
}

export default Pokemon
