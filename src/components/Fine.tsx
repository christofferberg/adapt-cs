import React, { FC } from 'react'
import { Box, Heading, Text } from '@chakra-ui/core'

type FineProps = {
  desc: string
  price: string
}

export const Fine: FC<FineProps> = ({ desc, price }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">{desc}</Heading>
      <Text mt={4}>{price}</Text>
    </Box>
  )
}
