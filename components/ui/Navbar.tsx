import Image from 'next/image'
import NextLink from 'next/link'
import { Link, Spacer, Text, useTheme } from '@nextui-org/react'

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0 20px 0 5px',
      backgroundColor: theme?.colors.gray900.value
    }}>
      <NextLink href='/' passHref>
        <Link style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            alt='Ícono de la app'
            width={70}
            height={70}
          />
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }}/>
      <NextLink href='/favorites' passHref>
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
