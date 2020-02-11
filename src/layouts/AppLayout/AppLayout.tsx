import React, { FC } from 'react'

// Background
import background from 'assets/images/counter-kim.jpg'

// Components
import { Flex, Box, Stack } from '@chakra-ui/core'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { ProToast, NoobToast } from 'components/Toasts'

export const AppLayout: FC = ({ ...children }) => {
  return (
    <Flex h="100vh" wrap="wrap" overflow="hidden">
      <Stack spacing={3} zIndex={2} pos="absolute" top="4" right="4">
        <NoobToast />
        <ProToast />
      </Stack>

      <Box h="100%" w={['100%', null, '60%', '50%']} bg="#f7f7f9" overflow="scroll">
        <Header />
        <Flex as="main" flex="1" {...children} />
        <Footer />
      </Box>

      <Box
        w={['100%', null, '40%', '50%']}
        h="100vh"
        bgImage={`url(${background})`}
        bgPos="center center"
        backgroundRepeat="no-repeat"
        bgSize="cover"
      >
        <h2>Hello</h2>
      </Box>
    </Flex>
  )
}
