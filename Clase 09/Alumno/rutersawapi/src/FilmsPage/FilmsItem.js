import React from 'react'
import { MenuItem } from 'material-ui/MenuItem'

const styles = {
  root: {
    cursor: 'pointer',
    color: 'white'
  }
}

function FilmsItem({ title, url, onSelectFilms }) {
  return (
    <MenuItem
      style={styles.root}
      onClick={() => onSelectFilms(url)}
      primaryText={title}
    />
  )
}

export default FilmsItem
