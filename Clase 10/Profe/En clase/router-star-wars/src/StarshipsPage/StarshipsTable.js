import React from 'react'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

function StarshipsPage ({ starshipsList }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>{'Nombre'}</TableHeaderColumn>
          <TableHeaderColumn>{'Modelo'}</TableHeaderColumn>
          <TableHeaderColumn>{'Precio'}</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {starshipsList.map((starship) => (
          <TableRow key={starship.url}>
            <TableRowColumn>{starship.name}</TableRowColumn>
            <TableRowColumn>{starship.model}</TableRowColumn>
            <TableRowColumn>{starship.cost_in_credits}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default StarshipsPage
