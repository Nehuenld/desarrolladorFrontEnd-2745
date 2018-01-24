/*1. Crear una clase llamada `User` con las siguientes características:

- Debe tener las siguientes propiedades, que deben ser recibidas al 
momento de crear el elemento: 
  * `firstName` String
  * `lastName` Number
  * `dni` Number
  * `isAdmin` Boolean (Valor por defecto `false`)
  * `telephones` Array de objetos con la forma { number: Number, isMobile: Boolean }
   (Valor por defecto Array vacío)*/

class User {
  constructor(firstName, lastName, dni, isAdmin = false, telephones = []) {
    this._firstName = firstName
    this._lastName = lastName
    this._dni = dni
    this._isAdmin = isAdmin
    this._telephones = telephones
  }

  /*- Una función `set` publica que reciba un número y permita agregar
   el teléfono al usuario marcando `isMobile: true` si es celular (empieza con `+549`)
    y `isMobile: false` en caso contrario.*/

  // dame el numero , tiene el +549 , ok es mobile, si no lo tiene te lo agrego! 
  //  '+5491177338844'

  set phone(phone) {
    if (phone.indexOf('+549') !== -1) {
      this._telephones.push({
        number: phone,
        isMobile: true
      })
    } else {
      this._telephones.push({
        number: phone,
        isMobile: false
      })
    }
  }

  /*- Una función que devuelva toda la información del usuario
   en un String `firstName`, `lastName`, `dni` y `telephones`
    con los telefonos separados por ` / ` usando reduce.*/

  // let integrado = User[].reduce( function() {
  //     return : `nombre ${_firstName}, apellido ${lastName}, dni ${_dni}, telefono ${phone}`;
  //   });

}
let uno = new User(
  "Pedro", "Dietrich", 58987229, false,
  [111112345])



console.log(JSON.stringify(uno, null, 2))


// 2. Crear un array de objetos `User` usando la función map y el siguiente array:


var studentsList = [
  {
    firstName: 'Mercedes',
    lastName: 'Baylac',
    dni: 54353353,
    telephones: [{ number: +54912345678, isMobile: true }, { number: +54987654321, isMobile: true }]
  },
  {
    firstName: 'Julian',
    lastName: 'Bonpland',
    dni: 54533343,
    telephones: [{ number: +5478987865, isMobile: false }, { number: +54987654321, isMobile: true }]
  },
  { firstName: 'Nehuen', lastName: 'Diaz', dni: 54353512 },
  { firstName: 'Ramiro Avalos', lastName: 'Avalos', dni: 54533843 },
  {
    firstName: 'Barbara',
    lastName: 'Pavan',
    dni: 54357512,
    telephones: [{ number: +54936473829, isMobile: true }]
  }
]
function mapStudents(studentsList) {
  let newStudent = [{}]
  for (let i = 0; i < studentsList.length; i++) {
    const students = studentsList[i];
    newStudent.push(`Alumno ${studentsList}`)
  }
  return newStudent
}

const user = mapStudents(studentsList)

