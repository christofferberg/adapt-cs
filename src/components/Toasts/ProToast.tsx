import React from 'react'

// Utils
import { getRandomArrayItem } from 'utils/getRandomArrayItem'

// Constants
import { toastPositions } from 'constants/index'

// Components
import { useToast, Button } from '@chakra-ui/core'

const descriptions = [
  'QA-sper har ny hårfarve hver kamp!',
  'Jeff kan satanedeme skyde Scout',
  'Hasse, og hans tacs...',
  'Aage fik ikke sollys fra 2001-2015',
  'Ralle DT kan andet end WoW',
  'Kim kan alle hverdage, også weekender',
  'Kim 3 man spray down 20/09/2019',
  'Homann er pro, han er bare BRAND uheldig',
]

export const ProToast = ({ ...props }) => {
  const toast = useToast()

  return (
    <Button
      {...props}
      variantColor="green"
      onClick={() => {
        return toast({
          position: getRandomArrayItem(toastPositions),
          title: 'Hvem er pro?',
          description: getRandomArrayItem(descriptions),
          status: 'success',
          duration: 4000,
          isClosable: false,
        })
      }}
    >
      Hvem er pro?
    </Button>
  )
}
