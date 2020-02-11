import React, { FC } from 'react'

// Components
import { Box, Link, Text } from '@chakra-ui/core'
import { Inner } from 'components/Inner'

export const Footer: FC = () => {
  return (
    <Box as="footer" mt={10} py={10}>
      <Inner>
        <Text fontSize="sm">
          Proudly made by the CS bois at{' '}
          <Link color="teal.500" href="https://adaptagency.com/">
            Adapt agency
          </Link>
        </Text>
      </Inner>
    </Box>
  )
}
