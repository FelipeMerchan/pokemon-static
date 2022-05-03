import React, { FC } from 'react'
import { Grid } from '@nextui-org/react'

interface Props {
  children: React.ReactNode;
}

export const FavoritePokemonList: FC<Props> = ({ children }) => {
  return (
    <Grid.Container
      gap={2}
      direction='row'
      justify='flex-start'
    >
      {children}
    </Grid.Container>
  )
}
