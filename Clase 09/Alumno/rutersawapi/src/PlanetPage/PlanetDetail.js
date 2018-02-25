import React, { Component } from 'react'
import PlanetList from './PlanetList'
import PlanetDetail from './PlanetDetail'
import { connect } from 'react-redux'

import { fetchPlanet, fetchDetail } from './actions'

import { CircularProgress, Paper, TextField } from 'material-ui/'

const styles = {
  root: {
    display: 'flex'
  },
  detail: {
    padding: '0 15px',
    backgroundImage: 'url("https://i.ytimg.com/vi/6MPJGaBHoOM/hqdefault.jpg")',
    color: 'white'
  },
  dark: {
    background: 'black',
    color: 'white'
  }
}

class PlanetPage extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  componentWillMount() {
    const { fetchPlanet } = this.props
    fetchPlanet()
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { isSearching, planetList, planetDetail, fetchDetail } = this.props

    const { inputValue } = this.state

    const filteredList = planetList.filter(planet =>
      planet.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
      <div style={styles.root}>
        <Paper style={styles.dark} zDepth={2}>
          <div>
            {isSearching ? <CircularProgress size={60} thickness={7} /> : null}

            <div>
              <TextField
                value={inputValue}
                hintText="Busca la pelicula"
                onChange={this.handleChange}
                floatingLabelText="Pelicula"
              />
            </div>
            <PlanetList
              planetList={filteredList}
              onSelectPlanet={fetchDetail}
            />
          </div>
        </Paper>
        <div style={styles.detail}>
          {planetDetail ? (
            <PlanetDetail
              title={planetDetail.title}
              director={planetDetail.director}
              opening_crawl={planetDetail.opening_crawl}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    planetPage: { isSearching, planetList = [], planetDetail = null }
  } = state

  return {
    isSearching,
    planetList,
    planetDetail
  }
}

const mapDispatchToProps = {
  fetchPlanet,
  fetchDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetPage)
