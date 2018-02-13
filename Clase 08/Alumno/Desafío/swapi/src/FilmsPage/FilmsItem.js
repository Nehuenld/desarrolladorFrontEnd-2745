import React from 'react'

const styles = {
  root: {
    cursor: 'pointer'
  }
}

function FilmsItem({ title, url, onselecFilms }) {
  return (
    <li style={styles.root} onClick={() => onselecFilms(url)}>
      {title}
    </li>
  )
}

export default FilmsItem
