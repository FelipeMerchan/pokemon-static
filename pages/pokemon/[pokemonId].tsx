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
      <p>{pokemon.name}</p>
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
