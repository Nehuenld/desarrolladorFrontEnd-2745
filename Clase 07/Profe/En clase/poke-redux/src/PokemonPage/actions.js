export const POKEMONPAGE_LIST_FETCH_SEARCHING =
  'POKEMONPAGE_LIST_FETCH_SEARCHING'
export const POKEMONPAGE_LIST_FETCH_SEARCHED = 'POKEMONPAGE_LIST_FETCH_SEARCHED'

export const fetchPokemonList = () => {
  return {
    type: POKEMONPAGE_LIST_FETCH_SEARCHING
  }
}

export const fetchPokemonListSearched = (response) => {
  return {
    type: POKEMONPAGE_LIST_FETCH_SEARCHED,
    payload: response
  }
}
