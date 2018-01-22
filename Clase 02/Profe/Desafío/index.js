class Movie {
  constructor (title, year, director, actors = []) {
    this._title = title
    this._year = year
    this._director = director
    this._actors = actors.slice()
  }

  get title () {
    return this._title
  }

  get year () {
    return this._year
  }
  get director () {
    return this._director
  }

  get actors () {
    return this._actors
  }

  set title (title) {
    this._title = title
  }

  set year (year) {
    this._year = year
  }
  set director (director) {
    this._director = director
  }

  set actor (actor) {
    this._actors.push(actor)
  }

  searchActor (firstName) {
    return !!this._actors.find((actor) => actor.firstName === firstName)
  }

  showAll () {
    return `Título: ${this._title}, Año: ${this._year}, Director:  ${this._director}, Actores: ${this._actors
      .map((actor) => `${actor.firstName} ${actor.lastName}`)
      .sort()
      .join(' / ')}`
  }
}

const movie = new Movie('Matrix', 1999, 'Hermanas Wachowski', [
  {
    firstName: 'Keanu',
    lastName: 'Reeves'
  },
  {
    firstName: 'Laurence',
    lastName: 'Fishburne'
  },
  {
    firstName: 'Marcus',
    lastName: 'Chong'
  }
])

console.log(movie.showAll())

console.log(movie.searchActor('Keanu'))

console.log(movie.searchActor('Hugo'))

movie.actor = {
  firstName: 'Hugo',
  lastName: 'Weaving'
}

console.log(movie.searchActor('Hugo'))

console.log(movie.showAll())
