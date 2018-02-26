import React, { Component } from 'react'
import FilmsList from './FilmsList'
import FilmsDetail from './FilmsDetail'
import { connect } from 'react-redux'

import { TextField, Paper, LinearProgress } from 'material-ui'

import { fetchFilms, fetchDetail } from './actions'

const styles = {
  root: {
    display: 'flex'
  },
  detail: {
    padding: '0 15px',
    flex: '1'
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
    const {
      isSearching,
      isSearchingDetail,
      filmsList,
      filmsDetail,
      fetchDetail
    } = this.props

    const { inputValue } = this.state

    const filteredList = filmsList.filter(films =>
      films.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
      <div>
        {isSearching || isSearchingDetail ? (
          <LinearProgress mode="indeterminate" color="green" />
        ) : null}
        <div style={styles.root}>
          <Paper>
            <div>
              <TextField
                value={inputValue}
                hintText="Busca la pelicula"
                onChange={this.handleChange}
                floatingLabelText="Pelicula"
              />
            </div>
            <FilmsList filmsList={filteredList} onSelectFilms={fetchDetail} />
          </Paper>
          <div style={styles.detail}>
            {filmsDetail ? (
              <FilmsDetail
                title={filmsDetail.title}
                director={filmsDetail.director}
                opening_crawl={filmsDetail.opening_crawl}
              />
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    filmsPage: {
      isSearching,
      isSearchingDetail,
      filmsList = [],
      filmsDetail = null
    }
  } = state

  return {
    isSearching,
    isSearchingDetail,
    filmsList,
    filmsDetail
  }
}

const mapDispatchToProps = {
  fetchFilms,
  fetchDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage)
