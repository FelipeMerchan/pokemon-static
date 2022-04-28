import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title='Lista de Pokemon'>
      <Button color='gradient'>
        Hola
      </Button>
    </Layout>
  )
}

export default HomePage