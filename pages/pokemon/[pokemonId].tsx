import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title='Algún Pokémon'>
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
                ghost
              >
                Guardar en favoritos
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
                  src={pokemon.sprites.front_shiny}
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

export const getStaticPaths: GetStaticPaths = async (ctx) => {
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

/* Después de que se ejecuta getStaticPaths se pasa a getStaticProps donde este úñtimo
recibe por parámetro los paths que retorna getStaticPaths */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pokemonId } = params as { pokemonId: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${pokemonId}`)

  return {
    props: {
      pokemon: data,
    }
  }
}

export default PokemonPage