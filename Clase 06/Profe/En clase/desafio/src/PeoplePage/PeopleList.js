import React from 'react'
import './peopleList.css'

import PeopleItem from './PeopleItem'

function PeopleList ({ peopleList, onSelectPeople }) {
  return (
    <ul>
      {peopleList.map((people) => (
        <PeopleItem
          key={people.url}
          name={people.name}
          url={people.url}
          onSelectPeople={onSelectPeople}
        />
      ))}
    </ul>
  )
}

export default PeopleList
