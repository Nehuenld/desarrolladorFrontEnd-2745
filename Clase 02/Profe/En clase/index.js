// # Programación funcional

// - Concepto general
//    * Funciones puras, no es afectada ni afecta el contexto externo

// let name = 'Pepe'

// function showMessage () {
//   console.log(name)
// }

// showMessage()

// console.log('Pepe')

//    * Transparencia referencial, a igual valores de entrada igual resultado

// const number = 5

// function showNumbers (number) {
//   for (let i = 0; i < number; i++) {
//     console.log(i)
//   }
// }

// showNumbers(3)

// number = 3

// showNumbers(3)

//    * Inmutabilidad, evitar los cambios de estado especialmente objetos o arrays!

// const user = {
//   name: 'Pedro'
// }

// function setName (user) {
//   user.name = 'Ana'
//   console.log(user)
// }
// setName(user)

// - Imperativa, ¿Como lo estamos haciendo? vs Declarativa, ¿Que estamos haciendo?

// Imperativo

// const students = [ 'Juan', 'Ana', 'Barbara' ]

// function searchName (name, students) {
//   let index = -1
//   for (let i = 0; i < students.length; i++) {
//     if (students[i] === name) {
//       index = i
//       break
//     }
//   }
//   return index
// }

// console.log(searchName('Ana', students))

// // Declarativo

// console.log(students.indexOf('Ana'))

// - Operador unario o If in-line

// const students = [ 'Juan', 'Ana', 'Barbara' ]

// function searchStudent (name, students) {
//   const index = students.indexOf(name)
//   if (index === -1) {
//     return false
//   } else {
//     return true
//   }
// }

// const result = students.indexOf('') === -1 ? false : true

// console.log(result)

// - Map

// const numbers = [ 1166447733, 1177338844, 2399887766 ]

// function mapNumbers (numbers) {
//   let newNumbers = []
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i]
//     newNumbers.push(`+54${number}`)
//   }
//   return newNumbers
// }

// const newStudents = mapNumbers(numbers)

// console.log(newStudents)

// const newStudents1 = numbers.map(function (number) {
//   return `+54${number}`
// })

// const newStudents2 = numbers.map((number) => {
//   console.log('Paso el map')
//   return `+54${number}`
// })

// console.log(numbers, newStudents2)

// - Filter
// const fruitsArray = [
//   { name: 'Banana', color: 'Amarillo' },
//   { name: 'Sandía', color: 'Verde' },
//   { name: 'Pera', color: 'Verde' }
// ]

// const fruits = fruitsArray.filter((fruit) => fruit.color === 'Roja')

// console.log(JSON.stringify(fruits, null, 2))

// - Reduce
// - Find

// const fruits = [
//   { name: 'Banana', color: 'Amarillo' },
//   { name: 'Sandía', color: 'Verde' },
//   { name: 'Pera', color: 'Verde' }
// ]

// const fruit = fruits.find((fruit) => fruit.color === 'Rojo')

// console.log(fruit && fruit.name)

// # Clases en JS

//    * Sintaxis

// class User {
//   constructor (name, lastName) {
//     this._name = name
//     this._lastName = lastName
//     this._modified = false
//   }

//   showName () {
//     console.log(`Soy ${this._name}`)
//   }
// }

// const user = new User('Barbara')

// class MyComponent extends User {
//   showName () {
//     super.showName()
//     console.log(`No soy ${this._name}`)
//   }

//   get fullName () {
//     return `${this._name} ${this._lastName}`
//   }

//   set name (name) {
//     this._name = name
//     this._modified = true
//   }

//   get modified () {
//     return this._modified
//   }
// }

// const myUser = new MyComponent('Barbara', 'Favan')

// console.log(myUser.fullName)
// console.log(myUser.modified)

// myUser.name = 'Carlos'

// console.log(myUser.fullName)
// console.log(myUser.modified)

// myUser.showName()

//    * Constructores
//    * Extends
//    * Super
//    * Get
//    * Set

// AND

// const students = [
//   {
//     name: 'Nehuen'
//   }
// ]

// const name = students[0] && students[0].name

// const students = {}

// const name = students.name || 'Pato'

// const user1 = {
//   name: 'Pedro',
//   isAdmin: true
// }

// const user2 = {
//   name: 'Juan',
//   isAdmin: false
// }

// const message = user2.isAdmin ? `${user2.name} sos administrador` : `${user2.name} NO sos administrador`

// console.log(message)

// '+5491177338844'

// set phone(phone){
//   if(phone.indexOf('+549')!==-1){
//     this._telephones.push({
//       number:phone,
//       isMobile: true
//     })
//   }else{
//     this._telephones.push({
//       number:phone,
//       isMobile: false
//     })
//   }
// }
