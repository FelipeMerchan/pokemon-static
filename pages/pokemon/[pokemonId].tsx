import { useState } from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import confetti from 'canvas-confetti'

import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces'
import localFavorite from '../../utils/localFavorite'
import { getPokemonData, localFavorites } from '../../utils'

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

  const onToggleFavorite = () => {
    localFavorite.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })
  }

  /* Esta parte que está en el ámbito del componente
  se va a ejecutar del lado del servidor, por lo que no es
  posible usar las web api's, como por ejemplo: */
  /* console.log(localStorage.getItem('favorites')) */

  /* En cambio si ejecutamos un useEffect sí vamos a tener
  acceso a las web api's: */
  /* useEffect(() => {
    console.log(localStorage.getItem('favorites'))
  }, [pokemon]) */

  return (
    <Layout title={name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card css={{ p: 20 }}>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>
              <Button
                color='gradient'
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                { isInFavorites ? 'En favoritos' : 'Guardar en favoritos' }
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>
                Sprites:
              </Text>
              <Container display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemonList = [...Array(151)].map((value, index) => `${index + 1}`)
  return {
    paths: pokemonList.map(pokemonId => ({
      params: { pokemonId }
    })),
    /* Indica que si la persona ingresa a una ruta dinámica que
    no se encuentre pre renderizado con getStaticPaht y getStaticProps saldrá un
    404 */
    fallback: false
  }
}

/* Después de que se ejecuta getStaticPaths se pasa a getStaticProps donde este último
recibe por parámetro los paths que retorna getStaticPaths */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pokemonId } = params as { pokemonId: string }

  return {
    props: {
      pokemon: await getPokemonData(pokemonId),
    },
    revalidate: 86400,
  }
}

export default PokemonPage
