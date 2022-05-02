import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Card, Grid } from '@nextui-org/react'

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
      {
        favoritePokemonList.length === 0
          ? (<NoFavorites />)
          : (
            <Grid.Container
              gap={2}
              direction='row'
              justify='flex-start'
            >
              {
                favoritePokemonList.map(id => (
                  <Grid
                    xs={6}
                    sm={3}
                    md={2}
                    xl={1}
                    key={id}
                  >
                    <Card
                      hoverable
                      clickable
                      css={{ padding: 10 }}
                    >
                      <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width='100%'
                        height={140}
                      />
                    </Card>
                  </Grid>
                ))
              }
            </Grid.Container>
          )
      }
    </Layout>
  )
}

export default FavoritesPage
