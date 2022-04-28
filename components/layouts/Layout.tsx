import { FC } from 'react'
import Head from 'next/head'

import { Navbar } from '../ui'

interface Props {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokémon App'}</title>
        <meta name='author' content='Felipe Merchan' />
        <meta name='description' content={`Información sobre el pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokémon, pokedex`} />
      </Head>
      <Navbar />
      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  )
}
