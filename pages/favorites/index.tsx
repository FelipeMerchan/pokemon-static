import { useEffect, useState } from 'react'
import { NextPage } from 'next'

import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { FavoriteCardPokemon, FavoritePokemonList } from '../../components/pokemon'
import localFavorite from '../../utils/localFavorite'

const FavoritesPage: NextPage = () => {
  const [favoritePokemonList, setFavoritePokemonList] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemonList(localFavorite.pokemonList())
  }, [])

  return (
    <Layout title='Pokémon - Favoritos'>
      {
        favoritePokemonList.length === 0
          ? (<NoFavorites />)
          : (
            <FavoritePokemonList>
              {
                favoritePokemonList.map(id => (
                  <FavoriteCardPokemon
                    pokemonId={id}
                    key={id}
                  />
                ))
              }
            </FavoritePokemonList>
          )
      }
    </Layout>
  )
}

export default FavoritesPage
