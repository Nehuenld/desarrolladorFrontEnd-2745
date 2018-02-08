import React, { Component } from 'react'
import PeopleList from './PeopleList'
import PeopleDetail from './PeopleDetail'
import { connect } from 'react-redux'

import { fetchPeople, fetchDetail } from './actions'

import { request } from './utils'

const styles = {
  root: {
    display: 'flex'
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
    const { isSearching, peopleList, peopleDetail, fetchDetail } = this.props

    const { inputValue } = this.state

    const filteredList = peopleList.filter((people) =>
      people.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
      <div style={styles.root}>
        <div>
          {isSearching ? 'Buscando...' : null}
          <div>
            <input onChange={this.handleChange} />
          </div>
          <PeopleList peopleList={filteredList} onSelectPeople={fetchDetail} />
        </div>
        <div>
          {peopleDetail ? (
            <PeopleDetail
              name={peopleDetail.name}
              eyeColor={peopleDetail['eye_color']}
              height={peopleDetail.height}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    peoplePage: { isSearching, peopleList = [], peopleDetail = null }
  } = state

  return {
    isSearching,
    peopleList,
    peopleDetail
  }
}

const mapDispatchToProps = {
  fetchPeople,
  fetchDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage)
