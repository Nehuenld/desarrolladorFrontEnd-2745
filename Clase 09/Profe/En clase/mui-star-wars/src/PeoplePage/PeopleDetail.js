import React from 'react'

import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'

function PeopleDetail ({ name, eyeColor, height }) {
  return (
    <Card>
      <CardTitle title={name} />
      <CardText>{`Color de ojos: ${eyeColor}`}</CardText>
    </Card>
  )
}

export default PeopleDetail
