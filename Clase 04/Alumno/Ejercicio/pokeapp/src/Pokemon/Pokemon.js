import React from 'react'

function Pokemon({ name, id }) {
  return (
    <ul class="list">
      <li>{`# ${id}  ${name}` || !`#Sin Resultados`}</li>
    </ul>
  )
}

export default Pokemon
