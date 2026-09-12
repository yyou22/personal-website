import { Box, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={useColorModeValue(1, 0.4)} color={useColorModeValue('day.subtle', undefined)} fontSize="sm">
      &copy; {new Date().getFullYear()} Yuzhe You All Rights Reserved.
    </Box>
  )
}

export default Footer
