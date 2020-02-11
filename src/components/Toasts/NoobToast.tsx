import React from 'react'

// Utils
import { getRandomArrayItem } from 'utils/getRandomArrayItem'

// Constants
import { toastPositions } from 'constants/index'

// Components
import { useToast, Button } from '@chakra-ui/core'

const descriptions = [
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

export const NoobToast = ({ ...props }) => {
  const toast = useToast()

  return (
    <Button
      {...props}
      variantColor="red"
      onClick={() => {
        return toast({
          position: getRandomArrayItem(toastPositions),
          title: 'Hvem er noob?',
          description: getRandomArrayItem(descriptions),
          status: 'error',
          duration: 4000,
          isClosable: false,
        })
      }}
    >
      Hvem er noob?
    </Button>
  )
}
