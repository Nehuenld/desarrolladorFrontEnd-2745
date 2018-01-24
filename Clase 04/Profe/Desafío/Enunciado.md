# Mostrar en pantalla un listado de Pokemons

- Crear el componente Pokemon similar al de la clase anterior pero que muestre los parámetros `name` y `id`, el componente tiene que ser Dumb Component.

- Crea un componente PokemonList para mostrar una lista de Pokemons usando el Array `pokemonList`, el componente tiene que ser un Smart Component.

- Crear un botón que permita ocultar o mostrar la lista de Pokemons, el mensaje del botón tiene que alternar entre 'Mostrar' y 'Ocultar' según corresponda.

- Agregar un `input` que permita escribir y buscar un Pokemon ingresando el nombre, al encontrarlo mostrar solo ese elemento en la lista, si no lo encuentra mostrar el mensaje '# Sin Resultados'. La búsqueda es por palabra exacta usando el método `find` de JavaScript, pero sin distinguir entre mayúsculas y minúsculas (usar `toUpperCase` en la comparación). Si el `input` esta vacío mostrar toda la lista, si el usuario ingreso algo mostrar el resultado.

[Video ejemplo](https://www.useloom.com/share/553d1360f52442c7bee1f3f27ef1857e)

```js
const pokemonList = [
  {
    id: 1,
    name: 'bulbasaur'
  },
  {
    id: 2,
    name: 'ivysaur'
  },
  {
    id: 3,
    name: 'venusaur'
  },
  {
    id: 4,
    name: 'charmander'
  },
  {
    id: 5,
    name: 'charmeleon'
  },
  {
    id: 6,
    name: 'charizard'
  },
  {
    id: 7,
    name: 'squirtle'
  },
  {
    id: 8,
    name: 'wartortle'
  },
  {
    id: 9,
    name: 'blastoise'
  },
  {
    id: 10,
    name: 'caterpie'
  },
  {
    id: 11,
    name: 'metapod'
  },
  {
    id: 12,
    name: 'butterfree'
  },
  {
    id: 13,
    name: 'weedle'
  },
  {
    id: 14,
    name: 'kakuna'
  },
  {
    id: 15,
    name: 'beedrill'
  },
  {
    id: 16,
    name: 'pidgey'
  },
  {
    id: 17,
    name: 'pidgeotto'
  },
  {
    id: 18,
    name: 'pidgeot'
  },
  {
    id: 19,
    name: 'rattata'
  },
  {
    id: 20,
    name: 'raticate'
  }
]
```





