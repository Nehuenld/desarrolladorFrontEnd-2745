import React from 'react'
import { MenuItem } from 'material-ui/MenuItem'

const styles = {
  root: {
    cursor: 'pointer',
    color: 'white'
  }
}

function PlanetItem({ name, url, onSelectPlanet }) {
  return (
    <MenuItem
      style={styles.root}
      onClick={() => onSelectPlanet(url)}
      primaryText={name}
    />
  )
}

export default PlanetItem
