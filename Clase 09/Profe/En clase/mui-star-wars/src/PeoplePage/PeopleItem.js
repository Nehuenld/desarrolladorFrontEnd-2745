import React from 'react'

import { ListItem } from 'material-ui/List'

const styles = {
  root: {
    cursor: 'pointer'
  }
}

function PeopleItem ({ name, url, onSelectPeople }) {
  return (
    <ListItem
      style={styles.root}
      onClick={() => onSelectPeople(url)}
      primaryText={name}
    />
  )
}

export default PeopleItem
