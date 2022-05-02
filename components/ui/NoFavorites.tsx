import Image from 'next/image'
import { Container, Text } from '@nextui-org/react'

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      height: 'calc(100vh - 100px)',
    }}>
      <Text h1>No hay favoritos</Text>
      <figure style={{
        opacity: 0.1,
        margin: 0,
      }}>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg'
          width={100}
          height={100}
          alt='No hay favoritos'
        />
      </figure>
    </Container>
  )
}
