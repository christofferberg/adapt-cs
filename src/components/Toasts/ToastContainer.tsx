import React, { FC } from 'react'

// Components
import { Stack } from '@chakra-ui/core'
import { NoobToast } from 'components/Toasts/NoobToast'
import { ProToast } from 'components/Toasts/ProToast'

export const ToastContainer: FC = () => {
  return (
    <Stack spacing={3} zIndex={9999} pos="absolute" top="4" right="4">
      <NoobToast />
      <ProToast />
    </Stack>
  )
}
