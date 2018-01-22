class Movie {
  constructor(title, year, director, actors = []) {
    this._title = title
    this._year = year
    this._director = director
    this._actors = actors = []
  }
  showName() {
    console.log(`titulo ${this._title}`)
  }
}
