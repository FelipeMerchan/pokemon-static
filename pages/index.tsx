import { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts'

const HomePage: NextPage = (props) => {
  console.log({props})

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
  console.log('Hola')

  return {
    props: {
      name: 'Felipe'
    }
  }
}

export default HomePage
