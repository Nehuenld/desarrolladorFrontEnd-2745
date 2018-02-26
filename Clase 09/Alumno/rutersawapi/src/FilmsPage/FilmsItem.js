import React from 'react'
import { ListItem } from 'material-ui/List'

import FaceIcon from 'material-ui/svg-icons/action/face'

const styles = isOdd => ({
  root: {
    cursor: 'pointer',
    color: isOdd ? 'red' : 'blue'
  }
})

function FilmsItem({ title, url, isOdd, onSelectFilms }) {
  return (
    <ListItem
      leftIcon={<FaceIcon color={isOdd ? 'red' : 'blue'} />}
      style={styles(isOdd).root}
      onClick={() => onSelectFilms(url)}
      primaryText={title}
    />
  )
}

export default FilmsItem
