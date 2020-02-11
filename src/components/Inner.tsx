import React, { FC } from 'react'

// Components
import { Flex } from '@chakra-ui/core'

type Props = {
  size?: 'sm' | 'md' | 'lg'
}

export const Inner: FC<Props> = ({ size = 'lg', children }) => {
  return (
    <Flex w="full" maxW={`containers.${size}`} mx="auto" wrap="wrap" px={[4, 5, null, 8]}>
      {children}
    </Flex>
  )
}
