import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts'

interface Props {
  /* pokemon: any; */
  id: string;
  name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const { query } = useRouter()
  return (
    <Layout title='Algún Pokémon'>
      <p>{query.pokemonId}</p>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  return {
    paths: [
      {
        params: {
          pokemonId: '1'
        }
      },
      {
        params: {
          pokemonId: '2'
        }
      },
    ],
    /* Indica que si la persona ingresa a una ruta dinámica que
    no se encuentre pre renderizado con getStaticPaht y getStaticProps saldrá un
    404 */
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  //const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  return {
    props: {
      id: 1,
      name: 'Bulbasaur'
    }
  }
}

export default PokemonPage
