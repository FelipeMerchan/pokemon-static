import { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'

const HomePage: NextPage = (props) => {
  return (
    <Layout title='Lista de Pokemon'>
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
    </Layout>
  )
}

/* getStaticProps es una función que se ejecuta únicamente del lado del
servidor y solo se ejecuta en build time. Además, solo es posible usar este método
de Next en los componentes páginas */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get('/pokemon?limit=151')

  return {
    props: {
      pokemonList: data.results
    }
  }
}

export default HomePage
