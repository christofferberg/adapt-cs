import React, { FC } from 'react'

// Data
import { fines } from 'fines'

// Components
import { Flex, Box, Stack, Heading, Text } from '@chakra-ui/core'
import { SpringFadeUp } from 'components/Animations'
import { Fine } from 'components/Fine'
import { NoobToast } from 'components/NoobToast'

const App: FC = () => (
  <Flex bg="gray.50">
    <Box maxW="containers.lg" w="full" mx="auto" my={[16, null, 12]} p={6}>
      <NoobToast />

      <Box mb={8}>
        <Heading fontSize="2xl">Alle bøder skal indbetales til MobilePay “box20218”</Heading>
        <Text>Og betales senest 24 timer efter bøden er uddelt.</Text>
      </Box>

      <Stack spacing={6}>
        {fines.map(({ desc, price }, index) => (
          <SpringFadeUp key={index}>
            <Fine desc={desc} price={price} />
          </SpringFadeUp>
        ))}
      </Stack>
    </Box>
  </Flex>
)

export default App
