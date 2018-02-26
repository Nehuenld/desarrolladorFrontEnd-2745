import React, { Component } from 'react'

import PlanetPage from '../PlanetsPage'

import FilmsPage from '../FilmsPage'

import { Tabs, Tab } from 'material-ui/Tabs'

import { Route } from 'react-router-dom'

class Layout extends Component {
  handleSelectRoute = route => {
    const { history } = this.props
    history.push(`/${route}`)
  }

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Films" onActive={() => this.handleSelectRoute('films')} />
          <Tab
            label="Planetas"
            onActive={() => this.handleSelectRoute('planets')}
          />
        </Tabs>
        <Route exact path="/" component={FilmsPage} />
        <Route exact path="/planets" component={PlanetPage} />
        <Route exact path="/films" component={FilmsPage} />
      </div>
    )
  }
}

export default Layout
