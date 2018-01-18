1. Crear una clase llamada `User` con las siguientes características:

- Debe tener las siguientes propiedades, que deben ser recibidas al momento de crear el elemento: 
  * `firstName` String
  * `lastName` Number
  * `dni` Number
  * `isAdmin` Boolean (Valor por defecto `false`)
  * `telephones` Array de objetos con la forma { number: Number, isMobile: Boolean } (Valor por defecto Array vacío)

- Una función `set` publica que reciba un número y permita agregar el teléfono al usuario marcando `isMobile: true` si es celular (empieza con `+549`) y `isMobile: false` en caso contrario.

- Una función que devuelva toda la información del usuario en un String `firstName`, `lastName`, `dni` y `telephones` con los telefonos separados por ` / ` usando reduce.

2. Crear un array de objetos `User` usando la función map y el siguiente array:

```js
var studentsList = [
  {
    firstName: 'Mercedes',
    lastName: 'Baylac',
    dni: 54353353,
    telephones: [ { number: +54912345678, isMobile: true }, { number: +54987654321, isMobile: true } ]
  },
  {
    firstName: 'Julian',
    lastName: 'Bonpland',
    dni: 54533343,
    telephones: [ { number: +5478987865, isMobile: false }, { number: +54987654321, isMobile: true } ]
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
```