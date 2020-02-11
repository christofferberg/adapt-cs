import React from 'react'
import { useColorMode } from '@chakra-ui/core'

// Components
import { Button } from '@chakra-ui/core'

export const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    </header>
  )
}
