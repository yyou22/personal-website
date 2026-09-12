import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Text, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Portfolio</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt, caption, sidePadding = 0, verticalPadding = 0 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const captionColor = useColorModeValue('day.subtle', 'gray.500')
  
  return (
    <>
      <Box mb={caption ? 2 : 4}>
        <Image 
          borderRadius="lg" 
          w="full" 
          h="auto" 
          maxW="600px" 
          px={sidePadding}
          py={verticalPadding}
          bg={sidePadding || verticalPadding ? 'white' : undefined}
          src={src} 
          alt={alt} 
          cursor="pointer" 
          objectFit="contain" 
          onClick={onOpen} 
        />
        {caption && (
          <Text
            mt={2}
            fontSize="sm"
            color={captionColor}
            textAlign="center"
          >
            {caption}
          </Text>
        )}
      </Box>
      
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="80vw" p={0}> {/* Remove padding */}
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" p={0}> {/* Remove padding */}
            <Image 
              borderRadius="lg" 
              w="full" 
              h="auto" 
              px={sidePadding}
              py={verticalPadding}
              bg={sidePadding || verticalPadding ? 'white' : undefined}
              src={src} 
              alt={alt} 
              objectFit="contain" 
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
