import React, { Component } from 'react'

import Student from './Student'
import Image from './Image'

import './header.css'

var studentsList = [
  {
    firstName: 'Mercedes',
    lastName: 'Baylac',
    dni: 54353353,
    telephones: [
      { number: +54912345678, isMobile: true },
      { number: +54987654321, isMobile: true }
    ]
  },
  {
    firstName: 'Julian',
    lastName: 'Bonpland',
    dni: 54533343,
    telephones: [
      { number: +5478987865, isMobile: false },
      { number: +54987654321, isMobile: true }
    ]
  },
  { firstName: 'Nehuen', lastName: 'Diaz', dni: 54353512 },
  { firstName: 'Ramiro Avalos', lastName: 'Avalos', dni: 54533843 },
  {
    firstName: 'Barbara',
    lastName: 'Pavan',
    dni: 54357512,
    telephones: [ { number: +54936473829, isMobile: true } ]
  }
]

class Header extends Component {
  constructor (props) {
    super()

    this.state = {
      showImage: true,
      value: ''
    }
  }

  handlerToggle = () => {
    const { showImage } = this.state

    this.setState({
      showImage: !showImage
    })
  }

  handleChangeInput = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    const { showImage, value } = this.state

    const image = showImage ? <Image /> : null

    // console.log(studentsList.find((student) => student.firstName === value))

    const header = (
      <header className='App-header' onClick={this.handlerToggle}>
        {image}
        {studentsList.map((student) => (
          <Student
            key={student.dni}
            firstName={student.firstName}
            lastName={student.lastName}
          />
        ))}

        <input onChange={this.handleChangeInput} />
      </header>
    )

    return header
  }
}

export default Header
