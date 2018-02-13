import React from 'react'

const styles = {
  li: {
    textTransform: 'capitalize',
    fontSize: 24,
    color: 'red',
    borderRadius: 9,
    borderColor: 'black',
    borderStyle: 'solid',
    margin: 0
  },
  img: {
    width: 200
  }
}

function Detalles({ name, height, gender }) {
  return (
    <li style={styles.li}>
      <dl>{`#  ${name}`}</dl>
      <dl> {`Peso: ${height}`}</dl>
      <dl> {`Sexo:${gender}`}</dl>
    </li>
  )
}

export default Detalles
