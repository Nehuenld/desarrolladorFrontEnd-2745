import React, { Component } from 'react'
import PeopleList from './PeopleList'
import PeopleDetail from './PeopleDetail'
import { connect } from 'react-redux'

import { TextField, Paper, LinearProgress } from 'material-ui'

import { fetchPeople, fetchDetail } from './actions'

const styles = {
  root: {
    display: 'flex'
  },
  detail: {
    padding: '0 15px',
    flex: '1'
  }
}

class PeoplePage extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: ''
    }
  }

  componentWillMount () {
    const { fetchPeople } = this.props
    fetchPeople()
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render () {
    const {
      isSearching,
      isSearchingDetail,
      peopleList,
      peopleDetail,
      fetchDetail
    } = this.props

    const { inputValue } = this.state

    const filteredList = peopleList.filter((people) =>
      people.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
      <div>
        {isSearching || isSearchingDetail ? (
          <LinearProgress mode='indeterminate' color='rgba(0,255,0,1)' />
        ) : null}
        <div style={styles.root}>
          <Paper>
            <div>
              <TextField
                value={inputValue}
                hintText='Luke'
                floatingLabelText='Nombre del personaje'
                onChange={this.handleChange}
              />
            </div>
            <PeopleList
              peopleList={filteredList}
              onSelectPeople={fetchDetail}
            />
          </Paper>
          <div style={styles.detail}>
            {peopleDetail ? (
              <PeopleDetail
                name={peopleDetail.name}
                eyeColor={peopleDetail['eye_color']}
                height={peopleDetail.height}
              />
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    peoplePage: {
      isSearching,
      isSearchingDetail,
      peopleList = [],
      peopleDetail = null
    }
  } = state

  return {
    isSearching,
    isSearchingDetail,
    peopleList,
    peopleDetail
  }
}

const mapDispatchToProps = {
  fetchPeople,
  fetchDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage)
