import React from 'react'

function FilmsDetail({ title, director, opening_crawl }) {
  return (
    <div>
      <h1>{`Titulo: ${title}`}</h1>
      <h3>{`Director: ${director}`}</h3>
      <p>{`Descripción:${opening_crawl}`}</p>
    </div>
  )
}

export default FilmsDetail
