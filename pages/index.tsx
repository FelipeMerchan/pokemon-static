import { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { Layout } from '../components/layouts'
import { PokemonCard, PokemonList } from '../components/pokemon';

interface Props {
  pokemonList: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemonList }) => {
  return (
    <Layout title='Lista de Pokemon'>
      <PokemonList>
        {
          pokemonList.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
            />
          ))
        }
      </PokemonList>
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
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`,
  }))

  return {
    props: {
      pokemonList,
    }
  }
}

export default HomePage
