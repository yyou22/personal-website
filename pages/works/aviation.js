import { useState } from 'react'
import {
  Box, Container, Image, Link, ListItem, UnorderedList, Text, SimpleGrid,
  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton,
  useColorModeValue
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const photos = [
  { id: 'cambridge', caption: 'Cambridge, United Kingdom', alt: 'An aerial view of Cambridge, with King’s College Chapel and the River Cam.', landscape: true },
  { id: 'golden-gate', caption: 'Golden Gate Bridge, San Francisco Bay', alt: 'The Golden Gate Bridge and San Francisco Bay beneath the aircraft wing.' },
  { id: 'golden-gate-fog', caption: 'Golden Gate Bridge in the clouds', alt: 'A tower of the Golden Gate Bridge emerging from the clouds.' },
  { id: 'alcatraz', caption: 'Alcatraz Island, San Francisco Bay', alt: 'Alcatraz Island seen from above, framed by the aircraft’s wing strut.' },
  { id: 'ontario-winter', caption: 'Winter near Waterloo, Ontario', alt: 'Snow-covered fields and a winding river near Waterloo beneath the aircraft wing.', landscape: true }
]

const Aviation = () => {
  const [selected, setSelected] = useState(null)
  const metaColor = useColorModeValue('day.link', undefined)
  const captionColor = useColorModeValue('day.muted', 'gray.400')
  const shadow = useColorModeValue('0 0 0 1px #d8e0e3', '0 0 0 1px rgba(255, 255, 255, 0.15)')

  return (
    <Layout title="Aviation">
      <Container>
        <Title>Aviation</Title>
        <Paragraph>
          I&apos;m a post-solo student pilot currently training at{' '}
          <Link href="https://www.flybfc.com/" isExternal>Brantford Flight Centre</Link>.
          I previously trained with{' '}
          <Link href="https://wvfc.org/" isExternal>West Valley Flying Club</Link>{' '}
          in Palo Alto, California, and{' '}
          <Link href="https://www.classic-wings.co.uk/" isExternal>Classic Wings</Link>{' '}
          at the Imperial War Museum Duxford in the United Kingdom.
        </Paragraph>
        <Box my={4}>
          <Box as="span" color={metaColor}><Meta>Permits &amp; Certifications</Meta></Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Canadian Student Pilot Permits for both aeroplanes and ultra-light aeroplanes.</ListItem>
            <ListItem>Restricted Operator Certificate – Aeronautical (ROC-A).</ListItem>
          </UnorderedList>
        </Box>
        <Box my={6}>
          <Box as="span" color={metaColor}><Meta>Views from the Cockpit</Meta></Box>
          <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} mt={4}>
            {photos.map((photo, index) => (
              <Box as="figure" key={photo.id} m={0} minW={0} gridColumn={photo.landscape ? '1 / -1' : undefined}>
                <Box
                  as="button" type="button" display="block" w="full" p={0}
                  border={0} bg="transparent" borderRadius="lg" overflow="hidden"
                  cursor="zoom-in" boxShadow={shadow}
                  aria-label={`View larger: ${photo.caption}`}
                  onClick={() => setSelected(photo)}
                  _focusVisible={{ outline: '2px solid', outlineColor: 'teal.400', outlineOffset: '4px' }}
                >
                  <Image
                    src={`/images/works/aviation/${photo.id}-1600.jpg`}
                    srcSet={`/images/works/aviation/${photo.id}-640.jpg 640w, /images/works/aviation/${photo.id}-1600.jpg 1600w`}
                    sizes={photo.landscape ? '(max-width: 480px) calc(100vw - 64px), 688px' : '(max-width: 480px) calc(100vw - 64px), 220px'}
                    alt={photo.alt} w="full" h="auto" display="block"
                    loading={index === 0 ? 'eager' : 'lazy'} decoding="async" ignoreFallback
                    sx={{ aspectRatio: photo.landscape ? '4 / 3' : '3 / 4', dynamicRangeLimit: 'standard' }}
                  />
                </Box>
                <Text as="figcaption" mt={2} fontSize="sm" lineHeight={1.5} color={captionColor}>
                  {photo.caption}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Modal isOpen={Boolean(selected)} onClose={() => setSelected(null)} isCentered>
          <ModalOverlay bg="blackAlpha.800" />
          <ModalContent w="auto" maxW="92vw" m={4} bg="transparent" boxShadow="none">
            <ModalCloseButton position="fixed" top={4} right={4} color="white" bg="blackAlpha.500" _hover={{ bg: 'blackAlpha.700' }} />
            <ModalBody p={0}>
              {selected && (
                <>
                  <Image src={`/images/works/aviation/${selected.id}-1600.jpg`} alt={selected.alt} ignoreFallback maxH="82vh" maxW="92vw" w="auto" h="auto" mx="auto" borderRadius="md" sx={{ dynamicRangeLimit: 'standard' }} />
                  <Text mt={3} textAlign="center" fontSize="sm" color="whiteAlpha.900">{selected.caption}</Text>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Layout>
  )
}

export default Aviation
