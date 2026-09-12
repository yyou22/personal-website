import { Box, Icon, useColorModeValue } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { MdWavingHand } from 'react-icons/md'

const shimmer = keyframes`
  from { transform: translateX(-110%); }
  to { transform: translateX(110%); }
`

// Classic emoji wave: quick swings from the wrist that settle
const wave = keyframes`
  0%, 100% { transform: rotate(0deg); }
  15%, 45% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  60% { transform: rotate(-4deg); }
  80% { transform: rotate(10deg); }
`

const WelcomeBanner = () => (
  <Box
    borderRadius="lg"
    mb={6}
    p={3}
    textAlign="center"
    position="relative"
    overflow="hidden"
    bg={useColorModeValue('day.surface', 'whiteAlpha.200')}
    color={useColorModeValue('day.link', undefined)}
    boxShadow={useColorModeValue('inset 0 0 0 1px #d8e0e3, 0 3px 12px rgba(36, 51, 68, 0.04)', undefined)}
    sx={{
      backdropFilter: 'blur(10px)',
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background:
          'linear-gradient(110deg, transparent 25%, rgba(255, 211, 143, 0.16) 50%, transparent 75%)',
        transform: 'translateX(-110%)'
      },
      '& .welcome-wave': {
        display: 'inline-block',
        transformOrigin: '25% 80%',
        animation: `${wave} 2s ease-in-out 0.5s both`
      },
      '@media (hover: hover)': {
        '&:hover::after': { animation: `${shimmer} 1.4s ease-in-out` }
      },
      '@media (prefers-reduced-motion: reduce)': {
        '& .welcome-wave, &:hover::after': {
          animation: 'none'
        }
      }
    }}
  >
    <Box as="span" position="relative" zIndex={1}>
      <Icon
        as={MdWavingHand}
        className="welcome-wave"
        aria-hidden="true"
        boxSize="18px"
        verticalAlign="-3px"
        color={useColorModeValue('day.link', 'teal.300')}
        mr={1.5}
      />
      Hello, I am Yuzhe! Welcome to my website.
    </Box>
  </Box>
)

export default WelcomeBanner
