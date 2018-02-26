import React, { Component } from 'react'

import { fetchPlanets } from './actions'

import { connect } from 'react-redux'

import PlanetsTable from './PlanetsTable'

class PlanetsPage extends Component {
  componentWillMount() {
    const { fetchPlanets } = this.props

    fetchPlanets()
  }

  render() {
    const { planetsList } = this.props

    return <PlanetsTable planetsList={planetsList} />
  }
}

const mapStateToProps = state => {
  const { planetsPage: { isSearching, planetsList = [] } } = state

  return {
    isSearching,
    planetsList
  }
}

const mapDispatchToProps = {
  fetchPlanets
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsPage)
