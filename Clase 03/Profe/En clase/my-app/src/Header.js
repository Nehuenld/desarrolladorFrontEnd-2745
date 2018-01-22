import React, { Component } from 'react'
import logo from './logo.svg'

const styles = {
  header: {
    backgroundColor: 'red'
  },
  myH1: {
    fontSize: 72
  },
  headerBlue: {
    backgroundColor: 'blue'
  }
}

class Header extends Component {
  render () {
    const { title, subtitle } = this.props

    const pepe = true

    return (
      <header
        className={pepe ? 'App-header' : ''}
        style={pepe ? styles.header : styles.headerBlue}
      >
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title' style={styles.myH1}>
          {title}
        </h1>
        <p>{subtitle}</p>
      </header>
    )
  }
}

export default Header
