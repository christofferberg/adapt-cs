import React, { FC } from 'react'

// Data
import { finesData } from 'finesData'

// Components
import { Stack } from '@chakra-ui/core'
import { SpringFadeUp } from 'components/Animations'
import { FineItem } from 'components/Fines/FineItem'

export const FineList: FC = () => {
  return (
    <Stack w="full" spacing={6}>
      {finesData.map(({ title, desc, price }, index) => (
        <SpringFadeUp key={index}>
          <FineItem title={title} desc={desc} price={price} />
        </SpringFadeUp>
      ))}
    </Stack>
  )
}
