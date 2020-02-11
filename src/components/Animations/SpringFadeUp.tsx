import React, { FC } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'

// Components
import { Box } from '@chakra-ui/core'

/**
 * SpringFadeUp
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined} children
 * @param props
 * @returns {any}
 * @constructor
 */
export const SpringFadeUp: FC = ({ children, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const fade = useSpring({
    config: { ...config.default },
    from: {
      opacity: 0,
      transform: 'translate(0px, 24px)',
    },
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate(0px, 0px)' : 'translate(0px, 24px)',
  })

  return (
    <Box className="SpringFadeUp" ref={ref} {...props}>
      <animated.div style={fade}>{children}</animated.div>
    </Box>
  )
}
