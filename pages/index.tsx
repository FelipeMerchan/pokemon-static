import { NextPage, GetStaticProps } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { Layout } from '../components/layouts'

interface Props {
  pokemonList: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemonList }) => {
  return (
    <Layout title='Lista de Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemonList.map(({ id, name, img }) => (
            <Grid
              xs={6}
              sm={3}
              md={2}
              xl={1}
              key={id}
            >
              <Card hoverable clickable>
                <Card.Body css={{ p: 8 }}>
                  <Card.Image
                    src={img}
                    width='100%'
                    height={140}
                  />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text transform='capitalize'>{name}</Text>
                    <Text>{id}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

/* getStaticProps es una función que se ejecuta únicamente del lado del
servidor y solo se ejecuta en build time. Además, solo es posible usar este método
de Next en los componentes páginas */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemonList: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: ++index,
    img:  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${++index}.svg`,
  }))

  return {
    props: {
      pokemonList,
    }
  }
}

export default HomePage
