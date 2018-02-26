import React, { Component } from 'react'

import { fetchStarships } from './actions'

import { connect } from 'react-redux'

import StarshipsTable from './StarshipsTable'

class StarshipsPage extends Component {
  componentWillMount() {
    const { fetchStarships } = this.props

    fetchStarships()
  }

  render() {
    const { starshipsList } = this.props

    return <StarshipsTable starshipsList={starshipsList} />
  }
}

const mapStateToProps = state => {
  const { starshipsPage: { isSearching, starshipsList = [] } } = state

  return {
    isSearching,
    starshipsList
  }
}

const mapDispatchToProps = {
  fetchStarships
}

export default connect(mapStateToProps, mapDispatchToProps)(StarshipsPage)
