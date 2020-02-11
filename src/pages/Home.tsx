import React, { FC } from 'react'

// Layout
import { AppLayout } from 'layouts/AppLayout'

// Components
import { Box, Heading, Text } from '@chakra-ui/core'
import { Inner } from 'components/Inner'
import { FineList } from 'components/Fines'
import { SpringFadeUp } from 'components/Animations'

export const Home: FC = () => {
  return (
    <AppLayout>
      <Inner>
        <SpringFadeUp>
          <Box mb={8}>
            <Heading fontSize="2xl">Alle bøder skal indbetales til MobilePay “box20218”</Heading>
            <Text>Og betales senest 24 timer efter bøden er uddelt.</Text>
          </Box>
        </SpringFadeUp>

        <FineList />
      </Inner>
    </AppLayout>
  )
}
