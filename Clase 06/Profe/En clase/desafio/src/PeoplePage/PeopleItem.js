import React from 'react'

const styles = {
  root: {
    cursor: 'pointer'
  }
}

function PeopleItem ({ name, url, onSelectPeople }) {
  return (
    <li style={styles.root} onClick={() => onSelectPeople(url)}>
      {name}
    </li>
  )
}

export default PeopleItem
