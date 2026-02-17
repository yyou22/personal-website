import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
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

export const WorkImage = ({ src, alt, caption }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <Box mb={caption ? 2 : 4}>
        <Image 
          borderRadius="lg" 
          w="full" 
          h="auto" 
          maxW="600px" 
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
            color="gray.500"
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
