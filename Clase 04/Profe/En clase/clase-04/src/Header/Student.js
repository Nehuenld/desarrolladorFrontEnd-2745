import React from 'react'

function Student ({ firstName, lastName }) {
  return (
    <div>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
    </div>
  )
}

export default Student
