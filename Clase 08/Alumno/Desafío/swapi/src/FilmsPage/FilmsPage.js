import React, { Component } from 'react'
import FilmsList from './FilmsList'
import FilmsDetail from './FilmsDetail'
import { connect } from 'react-redux'

import { fetchFilms, fetchDetail } from './actions'

import { CircularProgress, Paper, TextField } from 'material-ui'

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
            <FilmsList filmsList={filteredList} onSelectFilms={fetchDetail} />
          </div>
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
