import React, { FC } from 'react'

// Layout
import { AppLayout } from 'layouts/AppLayout'
import { Inner } from 'components/Inner'

export const Rank: FC = () => {
  return (
    <AppLayout>
      <Inner>
        <h2>Hello from Rank</h2>
      </Inner>
    </AppLayout>
  )
}
