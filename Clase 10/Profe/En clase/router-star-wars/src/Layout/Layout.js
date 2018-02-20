import React, { Component } from 'react'

import PeoplePage from '../PeoplePage'

import StarshipsPage from '../StarshipsPage'

import { Tabs, Tab } from 'material-ui/Tabs'

import { Route } from 'react-router-dom'

class Layout extends Component {
  handleSelectRoute = (route) => {
    const { history } = this.props
    history.push(`/${route}`)
  }

  render () {
    return (
      <div>
        <Tabs>
          <Tab
            label='Personajes'
            onActive={() => this.handleSelectRoute('people')}
          />
          <Tab
            label='Naves'
            onActive={() => this.handleSelectRoute('starships')}
          />
        </Tabs>
        <Route exact path='/' component={PeoplePage} />
        <Route exact path='/starships' component={StarshipsPage} />
        <Route exact path='/people' component={PeoplePage} />
      </div>
    )
  }
}

export default Layout
