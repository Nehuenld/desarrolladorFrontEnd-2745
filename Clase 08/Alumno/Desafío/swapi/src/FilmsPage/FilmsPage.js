import React, { Component } from 'react'
import FilmsList from './FilmsList'
import FilmsDetail from './FilmsDetail'
import { connect } from 'react-redux'

import { fetchFilms, fetchDetail } from './actions'

import { request } from './utils'

const styles = {
  root: {
    display: 'flex'
  }
}

class FilmsPage extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  componentWillMount() {
    const { fetchFilms } = this.props
    fetchFilms()
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { isSearching, filmsList, filmsDetail, fetchDetail } = this.props

    const { inputValue } = this.state

    const filteredList = filmsList.filter(films =>
      films.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
      <div style={styles.root}>
        <div>
          {isSearching ? 'Cargando Datos...' : null}
          <div>
            <input onChange={this.handleChange} />
          </div>
          <FilmsList filmsList={filteredList} onSelectPeople={fetchDetail} />
        </div>
        <div>
          {filmsDetail ? (
            <FilmsDetail
              title={filmsDetail.title}
              director={filmsDetail.director}
              opening_crawl={filmsDetail.opening_crawl}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    filmsPage: { isSearching, filmsList = [], filmsDetail = null }
  } = state

  return {
    isSearching,
    filmsList,
    filmsDetail
  }
}

const mapDispatchToProps = {
  fetchFilms,
  fetchDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage)
