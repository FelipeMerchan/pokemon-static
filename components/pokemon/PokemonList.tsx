import { Grid } from '@nextui-org/react'
import { FC } from 'react'

interface Props {
  children: React.ReactNode;
}

export const PokemonList: FC<Props> = ({ children }) => {
  return (
    <Grid.Container gap={2} justify='flex-start'>
      {children}
    </Grid.Container>
  )
}
