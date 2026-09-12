import { forwardRef } from 'react'
import { useRouter } from 'next/router'
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const DogContainer = forwardRef(({ children }, ref) => {
  const { pathname } = useRouter()

  return (
    <Box
      ref={ref}
      className="voxel-dog"
      m="auto"
      mt={{ base: 0, md: '-120px' }}
      mb={{
        base: pathname === '/' ? 'calc(20px - 16vw)' : 'calc(32px - 16vw)',
        md: '-200px'
      }}
      w={{ base: '100vw', md: 640 }}
      h={{ base: '78vw', md: 640 }}
      mx={{ base: 'calc(50% - 50vw)', md: 'auto' }}
      position="relative"
    >
      {children}
    </Box>
  )
})

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
