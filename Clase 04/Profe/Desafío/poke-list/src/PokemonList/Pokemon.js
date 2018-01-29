import React from 'react'

function Pokemon ({ name, id }) {
  return <li>{`# ${id} ${name}`}</li>
}

export default Pokemon
