import React from 'react'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

function PlanetsPage({ planetsList }) {
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
        {planetsList.map(planets => (
          <TableRow key={planets.url}>
            <TableRowColumn>{planets.name}</TableRowColumn>
            <TableRowColumn>{planets.population}</TableRowColumn>
            <TableRowColumn>{planets.terrain}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PlanetsPage
