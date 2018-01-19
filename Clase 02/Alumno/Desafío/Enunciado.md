1. Crear una clase llamada `Movie` con las siguientes características:

- Debe tener las siguientes propiedades, que deben ser recibidas al momento de crear el elemento: 
  * `title` String (Titulo de la película)
  * `year` Number (Año de estreno)
  * `director` String (Nombre del director)
  * `actors` Array de la forma de objetos de la forma { firstName: String, lastName: String } (Nombre y apellido de los actores que participaron, valor por defecto Array vacío)

- De tener un método `searchActor` que permita buscar un actor por nombre y en caso de encontrarlo devuelva `true` si no `false`, usando la función `find` de JS.

- Crear los métodos set y get para cada propiedad del objeto.