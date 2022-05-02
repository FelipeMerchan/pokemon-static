import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import localFavorite from '../../utils/localFavorite'

const FavoritesPage: NextPage = () => {
  const [favoritePokemonList, setFavoritePokemonList] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemonList(localFavorite.pokemonList())
  }, [])

  return (
    <Layout title='Pokémon - Favoritos'>
      <NoFavorites />
    </Layout>
  )
}

export default FavoritesPage
