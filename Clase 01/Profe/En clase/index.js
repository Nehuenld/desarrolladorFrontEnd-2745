// Repaso de conceptos anteriores:

// 1. Closures

// function suma (a) {
//   var name = 'juan'
//   return function (b) {
//     console.log(name)
//     console.log(a + b)
//   }
// }

// var funcSuma = suma(2)

// funcSuma(4)

// function mul (a) {
//   return function (b) {
//     return a * b
//   }
// }

// var dup = mul(19.5)

// console.log(dup(3))

// console.log(dup(4))

// 2. Local and global scope

// var name = 'Juan'

// function showMessage (name) {
//   console.log(name)
// }

// showMessage('Ana')

// 3. Hoisting

// name = 'Pepe'

// console.log(name)

// var name

// showMessage()

// function showMessage () {
//   console.log('Hola')
// }

// 4. Event loop y Sync / Async

// console.log('Empiezo')

// setTimeout(function () {
//   console.log('Soy un callback')
// }, 1000)

// console.log('Termino')

// 5. Para que sirve this

// var animal = 'Pato'

// function showMessage () {
//   this.animal = 'Ganso'
//   console.log(this.animal)
// }

// var obj = {
//   animal: 'Perro',
//   showMessage: showMessage
// }

// obj.showMessage()

// 6. Un breve repaso de objetos en JS

// function User (firstName, age) {
//   this.firstName = firstName
//   var name = 'Pepito'
//   this.showAge = function () {
//     return age
//   }
//   this.showName = function () {
//     return name
//   }
// }

// var student = new User('Pablo', 178)

// console.log(student.firstName)
// console.log(student.age)
// console.log(student.showAge())
// console.log(student.name)
// console.log(student.showName())

// Nuevo en ES6:

// 1. Let

// var name = 'Pepe'

// let age = 76

// age = 78

// for (var i = 0; i < 5; i++) {
//   console.log('Pasada')
// }

// console.log(i)

// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }

// console.log(i)

// 2. Const

// const Age = 78

// const _Age = 78

// const $Age76576 = 78

// age = 98

// console.log(age)

// const obj = {
//   firstName: 'Juan'
// }
// const obj3 = obj

// obj = {}

// obj.firstName = 'Ana'

// console.log(obj === obj3)

// console.log(obj, obj3)
// console.log(obj === obj2)

// const obj2 = {
//   firstName: 'Juan'
// }
// obj.firstName = 'Ana'

// console.log(2 == '2')

// console.log(2 === '2')

// var name1 = 'Juan'

// var name2 = 'Juan'

// console.log(name1 === name2)

// console.log(obj.firstName)

// 3. Default Parameter Values

// function showName (name = 'Pepe') {
//   console.log(name)
// }

// showName()
// showName('Ana')

// 4. String templates

// const name = 'Juan'

// const age = 76

// const message = 'Tu nombre es ' + name + ' y tenés ' + age

// console.log(message)

// const message2 = `Tu nombre es ${name} y tenés ${age}`

// console.log(message2)

// 5. Property Shorthand

// const firstName = 'Pedro'

// const obj = {
//   firstName: firstName
// }

// const obj2 = {
//   _id: '2',
//   firstName
// }

// 6. Arrow functions

// function User (name) {
//   this.name = name

//   const showName = () => {
//     console.log(this.name)
//   }
//   showName()
// }

// const student = new User('Pepe')

// function showMessage (name) {
//   this.name = name
//   function pepe () {
//     console.log('Soy la primera', this.name)
//   }
//   setTimeout(() => {
//     console.log('Soy la segunda', this.name)
//   }, 1000)

//   pepe()
// }

// showMessage('Pedro')
