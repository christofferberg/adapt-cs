import React, { FC } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'

// Components
import { Box } from '@chakra-ui/core'

/**
 * SpringScaleIn
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined} children
 * @param props
 * @returns {any}
 * @constructor
 */
export const SpringScaleIn: FC = ({ children, ...props }) => {
  const [ref, inView] = useInView({
    threshold: 1,
  })

  const fadeScaleIn = useSpring({
    config: { ...config.stiff },
    from: {
      opacity: 0,
      transform: 'scale(0.95)',
    },
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.95)',
  })

  return (
    <Box className="SpringScaleIn" ref={ref} {...props}>
      <animated.div style={fadeScaleIn}>{children}</animated.div>
    </Box>
  )
}
