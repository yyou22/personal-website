import NextLink from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Heading, Box, Image, Badge, Link, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Text, useColorModeValue } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => {
  const { query } = useRouter()
  // Keep the entry context while this page animates out after the URL changes.
  const [fromHome] = useState(() => query.from === 'home')
  const linkColor = useColorModeValue('pink.600', '#ff63c3')
  const linkStyle = { display: 'inline-flex', alignItems: 'center', lineHeight: 1, py: 2, color: linkColor }
  return (
  <Box>
    <Box
      as="nav"
      aria-label="Breadcrumb"
      display="flex"
      alignItems="center"
      gap={1.5}
      whiteSpace="nowrap"
      fontSize="sm"
      mb={2}
      color={linkColor}
    >
      {fromHome && (
        <>
          <NextLink href="/" passHref scroll={false}>
            <Link {...linkStyle}>Home</Link>
          </NextLink>
          <ChevronRightIcon boxSize={4} flexShrink={0} aria-hidden="true" />
        </>
      )}
      <NextLink href="/works" passHref scroll={false}>
        <Link {...linkStyle}>
          {!fromHome && <ChevronLeftIcon boxSize={4} mr={1} aria-hidden="true" />}
          Portfolio
        </Link>
      </NextLink>
    </Box>
    <Heading as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
  )
}

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
