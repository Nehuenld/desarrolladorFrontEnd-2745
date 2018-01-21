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
    this.isAdmin = isAdmin
    this._telephones = telephones = []
  }

/*- Una función `set` publica que reciba un número y permita agregar
 el teléfono al usuario marcando `isMobile: true` si es celular (empieza con `+549`)
  y `isMobile: false` en caso contrario.*/
  
 // dame el numero , tiene el +549 , ok es mobile, si no lo tiene te lo agrego! 
//  '+5491177338844'
 
  set phone(phone){
    if(phone.indexOf('+549')!==-1){
      this._telephones.push({
        number:phone,
        isMobile: true
      })
    }else{
      this._telephones.push({
        number:phone,
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
return `nombre ${this._firstName},
 apellido ${this._lastName}, dni ${this._dni},
  telefono ${this._telephones[phone]}`;
 
  var element = [
  this._firstName = "Pedro",
  this._lastName = "Dietrich",
  this._dni : 58987229,
  this._telephones : [1,2,4,7,8,9,0,8,6]

  ];
  var result = element.reduce(User)

  console.log(result)

}