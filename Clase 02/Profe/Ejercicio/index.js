class User {
  constructor (firstName, lastName, dni, isAdmin = false, telephones = []) {
    this._firstName = firstName
    this._lastName = lastName
    this._dni = dni
    this._isAdmin = isAdmin
    this._telephones = telephones
  }

  set phone (phone) {
    // Error mío el teléfono debería ser un String
    this._telephones.push({
      number: phone,
      isMobile: phone.startsWith('+549')
    })
  }

  // showAll () {
  //   return `Mi nombre es ${this._firstName || ''} ${this._lastName || ''}, mi DNI es ${this
  //     ._dni} y mis números de teléfono son ${this._telephones.map((item) => item.number).join(' / ')}`
  // }

  showAll () {
    return `Mi nombre es ${this._firstName || ''} ${this._lastName || ''}, mi DNI es ${this
      ._dni} y mis números de teléfono son ${this._telephones.reduce(function (ant, act) {
      return `${ant.number || ant} / ${act.number}`
    })}`
  }

  get telephones () {
    return this._telephones
  }
}

const user = new User('Adrián', 'Ferré', 34180352, true, [ { number: '+5491177227733', isMobile: true } ])

// console.log(user.showAll())

// user.phone = '+54911616363'

// user.phone = '+5477887788'

// console.log(user.showAll())
// console.log(JSON.stringify(user.telephones, null, 2))

// Resolver en clase la segunda parte
// Crear un array de objetos User usando la función map y el siguiente array:

var studentsList = [
  {
    firstName: 'Mercedes',
    lastName: 'Baylac',
    dni: 54353353,
    telephones: [ { number: '+54912345678', isMobile: true }, { number: '+54987654321', isMobile: true } ]
  },
  {
    firstName: 'Julian',
    lastName: 'Bonpland',
    dni: 54533343,
    telephones: [ { number: '+5478987865', isMobile: false }, { number: '+54987654321', isMobile: true } ]
  },
  { firstName: 'Nehuen', lastName: 'Diaz', dni: 54353512 },
  { firstName: 'Ramiro Avalos', lastName: 'Avalos', dni: 54533843 },
  {
    firstName: 'Barbara',
    lastName: 'Pavan',
    dni: 54357512,
    telephones: [ { number: '+54936473829', isMobile: true } ]
  }
]

const newStudentsList = studentsList.map(
  (item) => new User(item.firstName, item.lastName, item.dni, item.isAdmin, item.telephones)
)

console.log(newStudentsList[0].showAll())
