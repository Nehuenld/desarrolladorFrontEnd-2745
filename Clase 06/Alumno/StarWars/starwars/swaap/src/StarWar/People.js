import React from 'react'

const styles = {
  li: {
    textTransform: 'capitalize',
    fontSize: 16,
    cursor: 'pointer'
  }
}

function People({ name, url, onSelectPeople }) {
  return (
    <li
      style={styles.li}
      onClick={() => onSelectPeople(url)}
    >{`#  ${name}`}</li>
  )
}

export default People
