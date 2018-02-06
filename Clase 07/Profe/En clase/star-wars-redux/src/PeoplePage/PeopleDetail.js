import React from 'react'

function PeopleDetail ({ name, eyeColor, height }) {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{`Color de ojos: ${eyeColor}`}</h3>
      <h3>{`Altura: ${height}`}</h3>
    </div>
  )
}

export default PeopleDetail
