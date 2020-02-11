import React, { FC } from 'react'

// Components
import { Box, Heading, Text } from '@chakra-ui/core'

type FineProps = {
  title?: string
  icon: any
  desc: string
  price: string
}

export const FineItem: FC<FineProps> = ({ title = 'Missing title', icon, desc, price }) => {
  return (
    <Box bg="white" p={5} shadow="md" borderRadius="sm">
      <Heading mb={1} fontSize={['xl', null, null, '2xl']} display="flex" alignItems="center">
        {title}
        {icon && <Box as={icon} ml={2} display="inline-block" />}
      </Heading>

      <Text>{desc}</Text>
      <Text fontWeight="medium" color="teal.500" mt={4}>
        {price}
      </Text>
    </Box>
  )
}
