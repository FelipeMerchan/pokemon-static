const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokemonId => pokemonId !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInFavorites = (id: number): boolean => {
  /* Este código puede que se ejecute del lado del servidor
  es por esto que se agrega la siguiente validación para evitar errores
  al intentar acceder a web API's cuando la aplicación se encuentre en el servidor:*/
  if (typeof window === 'undefined') return false
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
  return favorites.includes(id)
}

const pokemonList = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
  toggleFavorite,
  existInFavorites,
  pokemonList,
}