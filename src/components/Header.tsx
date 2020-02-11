// @ts-nocheck
import React, { FC } from 'react'
import { Link as ReactLink } from 'react-router-dom'

// Components
import { Badge, Box, Link, Stack } from '@chakra-ui/core'
import { Inner } from 'components/Inner'

export const Header: FC = () => {
  return (
    <Box as="header" py={6} mb={10}>
      <Inner isCentered>
        <Link as={ReactLink} to="/">
          <Badge fontSize="xl" variantColor="teal" variant="solid">
            Adapt CS
          </Badge>
        </Link>

        <Stack as="nav" isInline spacing={4} ml="auto">
          <Link as={ReactLink} to="/" fontWeight="500">
            Bøderregler
          </Link>

          <Link as={ReactLink} to="/rank" fontWeight="500">
            Rangliste
          </Link>
        </Stack>
      </Inner>
    </Box>
  )
}
