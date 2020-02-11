import React from 'react'

// Components
import { useToast, Button } from '@chakra-ui/core'

const noobs = [
  'Arnaa er en noob...',
  'Klaus er en noob...',
  'Kim er en KÆMPE noob...',
  'Homann er en noob...',
  'Jeff er en noob, men vild med Scout!',
]

const positions = ['top', 'top-left', 'bottom', 'bottom-left', 'bottom-right']

const getRandomNoob = () => noobs[Math.floor(Math.random() * noobs.length)]
const getRandomPosition = () => positions[Math.floor(Math.random() * positions.length)]

export const NoobToast = () => {
  const toast = useToast()
  return (
    <Button
      zIndex={2}
      pos="absolute"
      top="4"
      right="4"
      onClick={() =>
        toast({
          // @ts-ignore
          position: getRandomPosition(),
          title: 'Hvem er noob?',
          description: getRandomNoob(),
          status: 'error',
          duration: 2000,
          isClosable: false,
        })
      }
    >
      Hvem er noob?
    </Button>
  )
}
