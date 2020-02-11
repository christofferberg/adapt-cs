import React, { FC } from 'react'
import { Box, Heading, Text } from '@chakra-ui/core'

type FineProps = {
  title?: string
  desc: string
  price: string
}

export const FineItem: FC<FineProps> = ({ title = 'Missing title', desc, price }) => {
  return (
    <Box bg="white" p={5} shadow="md" borderRadius="sm">
      <Heading mb={1} fontSize={['xl', null, null, '2xl']}>
        {title}
      </Heading>

      <Text>{desc}</Text>
      <Text fontWeight="medium" color="teal.500" mt={4}>
        {price}
      </Text>
    </Box>
  )
}
