import React from 'react'

const styles = {
  li: {
    textTransform: 'capitalize',
    fontSize: 24,
    color: red
  },
  img: {
    width: 200
  }
}

function Detalles({ id, name, height, weight, sprites }) {
  return (
    <li style={styles.li}>
      <img style={styles.img} src={sprites.front_default} />
      <dl>{`# ${id} ${name}`}</dl>
      <dl> {`Peso: ${height}`}</dl>
      <dl> {`Altura:${height}`}</dl>
    </li>
  )
}

export default Detalles
