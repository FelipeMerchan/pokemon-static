import { FC } from 'react'
import Head from 'next/head'

import { Navbar } from '../ui'

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokémon App'}</title>
        <meta name='author' content='Felipe Merchan' />
        <meta name='description' content={`Información sobre el pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokémon, pokedex`} />
        <meta property='og:title' content={`Información sobre ${title}`} />
        <meta property='og:description' content={`Esta es la página sobre ${title}`} />
        <meta property='og:image' content={`${origin}/images/banner.png`} />
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
