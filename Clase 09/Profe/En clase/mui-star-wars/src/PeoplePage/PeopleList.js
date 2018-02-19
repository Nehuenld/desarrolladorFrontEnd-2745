import React from 'react'

import { List } from 'material-ui/List'

import './peopleList.css'

import PeopleItem from './PeopleItem'

const styles = {
  root: {
    padding: 0
  }
}

function PeopleList ({ peopleList, onSelectPeople }) {
  return (
    <List style={styles.root}>
      {peopleList.map((people, index) => (
        <PeopleItem
          key={people.url}
          name={people.name}
          url={people.url}
          isOdd={index % 2}
          onSelectPeople={onSelectPeople}
        />
      ))}
    </List>
  )
}

export default PeopleList
