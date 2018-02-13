import React from 'react'

import FilmsItem from './FilmsItem'

function FilmsList({ filmsList, onselectFilms }) {
  return (
    <ul>
      {filmsList.map(films => (
        <FilmsItem
          key={films.url}
          title={films.title}
          url={films.url}
          onselectFilms={onselectFilms}
        />
      ))}
    </ul>
  )
}

export default FilmsList
