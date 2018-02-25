import React from 'react'

import FilmsItem from './FilmsItem'

import Menu from 'material-ui/Menu'

function FilmsList({ filmsList, onSelectFilms }) {
  return (
    <Menu>
      {filmsList.map(films => (
        <FilmsItem
          key={films.url}
          title={films.title}
          url={films.url}
          onSelectFilms={onSelectFilms}
        />
      ))}
    </Menu>
  )
}

export default FilmsList
