import React from 'react'

// Components
import { useToast, Button } from '@chakra-ui/core'

const noobs = [
  'Arnaa er en noob...',
  'Klaus er en noob...',
  'Kim er en KÆMPE noob...',
  'Homann er ramt af sort uheld...',
  'Homann har krampe i tændstiksfingeren...',
  'Jeff er en noob, men vild med Scout!',
  'Emil udtaler bananen på engelsk',
  'QA-sper har brug for en god forsikring!',
  'QA-sper er en lort!',
  'QA-sper har ny hårfarve hver kamp!',
  'QA-sper er den lavestlønnede Boi!',
  'Vinther er en bot',
  'Bot Klaus kan kun sættes til easy',
  'Coach Hasse',
  'Hasse har de vilde tacs',
  'Hasse? Hov jeg mente Zonic?',
]

const positions = ['top', 'top-left', 'bottom', 'bottom-left', 'bottom-right']
const statuses = ['success', 'error', 'warning', 'info']

const getRandom = (array: any) => array[Math.floor(Math.random() * array.length)]

export const NoobToast = () => {
  const toast = useToast()

  return (
    <Button
      zIndex={2}
      pos="absolute"
      top="4"
      right="4"
      onClick={() => {
        return toast({
          // @ts-ignore
          position: getRandom(positions),
          title: 'Hvem er noob?',
          description: getRandom(noobs),
          // @ts-ignore
          status: getRandom(statuses),
          duration: 2000,
          isClosable: false,
        })
      }}
    >
      Hvem er noob?
    </Button>
  )
}
