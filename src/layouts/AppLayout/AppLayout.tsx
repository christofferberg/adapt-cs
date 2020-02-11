import React, { FC } from 'react'

// Background
import background from 'assets/images/counter-kim.jpg'

// Components
import { Flex, Box } from '@chakra-ui/core'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { ToastContainer } from 'components/Toasts'

export const AppLayout: FC = ({ ...children }) => {
  return (
    <>
      <ToastContainer />

      <Flex
        minH="100vh"
        h={[null, null, '100vh']}
        wrap="wrap"
        direction={[null, null, 'row-reverse']}
        overflow="hidden"
      >
        <Box
          w={['100%', null, '40%', '50%']}
          h={['300px', '350px', '100%']}
          bgImage={`url(${background})`}
          bgPos="center center"
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <h2>Hello</h2>
        </Box>

        <Box h="100%" w={['100%', null, '60%', '50%']} bg="#f7f7f9" overflow="scroll">
          <Header />
          <Flex as="main" flex="1" {...children} />
          <Footer />
        </Box>
      </Flex>
    </>
  )
}
