import React from 'react'

import PlanetItem from './PlanetItem'

import { Menu } from 'material-ui/Menu'

function PlanetList({ planetList, onSelectPlanet }) {
  return (
    <Menu>
      {planetList.map(planet => (
        <PlanetItem
          key={planet.url}
          name={planet.name}
          url={planet.url}
          onSelectPlanet={onSelectPlanet}
        />
      ))}
    </Menu>
  )
}

export default PlanetList
