import React from 'react'

import { List } from 'material-ui/List'

import './filmsList.css'

import FilmsItem from './FilmsItem'

const styles = {
  root: {
    padding: 0
  }
}

function FilmsList({ filmsList, onSelectFilms }) {
  return (
    <List style={styles.root}>
      {filmsList.map((films, index) => (
        <FilmsItem
          key={films.url}
          title={films.title}
          url={films.url}
          isOdd={index % 2}
          onSelectFilms={onSelectFilms}
        />
      ))}
    </List>
  )
}

export default FilmsList
