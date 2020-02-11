// @ts-nocheck
import React, { FC } from 'react'
import { Link as ReactLink } from 'react-router-dom'

// Components
import { Box, Stack, Link } from '@chakra-ui/core'
import { Inner } from 'components/Inner'

export const Header: FC = () => {
  return (
    <Box as="header" py={6} mb={10}>
      <Inner>
        <h3>Adapt CS</h3>

        <Stack as="nav" isInline spacing={4} ml="auto">
          <Link as={ReactLink} to="/">
            Bøder
          </Link>

          <Link as={ReactLink} to="/rank">
            Rangliste
          </Link>
        </Stack>
      </Inner>
    </Box>
  )
}
