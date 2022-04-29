import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts'

const PokemonPage = () => {
  const { query } = useRouter()
  return (
    <Layout title='Algún Pokémon'>
      <p>{query.pokemonId}</p>
    </Layout>
  )
}

export default PokemonPage
