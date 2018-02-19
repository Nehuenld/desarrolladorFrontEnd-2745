import React from 'react'

import { Paper } from 'material-ui'

const styles = {
  h1: {
    textTransform: 'uppercase',
    color: 'withe',
    textAling: 'center'
  },
  details: {
    backgroound: 'transparent'
  }
}
function FilmsDetail({ title, director, opening_crawl }) {
  return (
    <div style={styles.details}>
      <h1 style={styles.h1}>{title}</h1>
      <h3>{`Director: ${director}`}</h3>
      <p>{`Descripción:${opening_crawl}`}</p>
    </div>
  )
}

export default FilmsDetail
