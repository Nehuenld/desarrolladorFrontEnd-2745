import React from 'react'

import { Card, CardTitle, CardText } from 'material-ui/Card'

function FilmsDetail({ title, director, opening_crawl }) {
  return (
    <Card>
      <CardTitle title={title} />
      <CardText>{`director ${director}`}</CardText>
    </Card>
  )
}

export default FilmsDetail
