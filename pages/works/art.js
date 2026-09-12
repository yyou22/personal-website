import { useState } from 'react'
import {
  Container, ListItem, UnorderedList, Box, Heading, Image, useColorModeValue, Wrap, WrapItem, Tag,
  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Text, Link
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import PreviewImage from '../../components/preview-image'
import artPreviews from '../../lib/art-previews.json'

// Each row is laid out at equal height; widths follow each piece's aspect ratio,
// so nothing is cropped and every row ends flush on both sides.
const galleryRows = [
  [
    { title: 'Cool Scottish Pilot', year: 2025, image: 'cool-scottish-pilot-original.jpg', width: 4284, height: 5712 },
    { title: 'The Long Way Home', year: 2026, image: 'the-long-way-home-original.jpg', width: 2971, height: 3978 }
  ],
  [
    { title: 'Terrifier', year: 2026, image: 'terrifier-original.jpg', width: 3337, height: 2481 }
  ],
  [
    { title: 'Venice', year: 2013, image: 'art1.png', width: 1564, height: 1124 },
    { title: 'Splendid', year: 2015, image: 'art3.png', width: 1306, height: 1962 }
  ],
  [
    { title: 'Contemplation', year: 2015, image: 'art2.png', width: 746, height: 826 },
    { title: 'Memory of Rhode Island', year: 2015, image: 'art4.png', width: 852, height: 760 }
  ],
  [
    { title: 'Gangsters', year: 2015, image: 'art5.png', width: 1680, height: 1262 },
    { title: 'Blessing of the Mountain', year: 2014, image: 'blessing-of-the-mountain.jpg', width: 2112, height: 2789 }
  ]
]

const galleryGroups = [
  {
    title: 'Recent work',
    description:
      'After nearly a decade away, I’ve returned to painting and drawing—rediscovering familiar materials and learning about myself along the way.',
    rows: galleryRows.slice(0, 2)
  },
  {
    title: 'Earlier work',
    description: 'Paintings and drawings from 2013–2015.',
    rows: galleryRows.slice(2)
  }
]

const Work = () => {
  const metaColor = useColorModeValue('day.link', undefined)
  const yearColor = useColorModeValue('day.muted', 'gray.400')
  const imageShadow = useColorModeValue('0 0 0 4px #ffffff, 0 0 0 5px #d8e0e3, 0 8px 24px rgba(36, 51, 68, 0.10)', '0 6px 20px rgba(0, 0, 0, 0.35)')
  const [selected, setSelected] = useState(null)

  return (
    <Layout title="Art & Illustration">
      <Container>
        <Title>
        Art & Illustration
        </Title>
        <P>
        My art spans charcoal, acrylics, watercolor, and digital illustration.
        I attended the Rhode Island School of Design&apos;s pre-college program
        in 2015, where three of my pieces were selected for exhibition. I also
        work in graphic and interface design, bringing the same attention to
        composition, color, and visual storytelling to my research projects.
        </P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition & Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Three artworks exhibited at Rhode Island School of Design (RISD) Exhibition in 2015.</ListItem>
            <ListItem>Six artworks featured in University of Michigan&apos;s Blueprint Literary Magazine (2018&ndash;2019).</ListItem>
          </UnorderedList>
        </Box>
        {galleryGroups.map(group => (
          <Box as="section" key={group.title} aria-label={group.title} my={{ base: 8, sm: 10 }}>
            <Heading as="h4" fontSize="lg" mb={1}>{group.title}</Heading>
            <Text fontSize="sm" lineHeight={1.65} color={yearColor} mb={5}>{group.description}</Text>
            <Box display="flex" flexDirection="column" gap={{ base: 8, sm: 6 }}>
          {group.rows.map(row => (
            <Box
              key={row[0].title}
              display="flex"
              flexDirection={{ base: 'column', sm: 'row' }}
              justifyContent="center"
              gap={{ base: 8, sm: 4 }}
            >
              {row.map(artwork => (
                <Box
                  as="figure"
                  key={artwork.title}
                  m={0}
                  minW={0}
                  flex={{ sm: `${artwork.width / artwork.height} 1 0` }}
                >
                  <Box
                    as="button"
                    type="button"
                    display="block"
                    w="full"
                    p={0}
                    border={0}
                    bg="transparent"
                    borderRadius="md"
                    cursor="zoom-in"
                    aria-label={`View larger: ${artwork.title}`}
                    onClick={() => setSelected(artwork)}
                    _focusVisible={{ outline: '2px solid', outlineColor: 'teal.400', outlineOffset: '3px' }}
                  >
                    <PreviewImage
                      src={`/images/works/art/${artwork.image}`}
                      preview={artPreviews[artwork.image]}
                      alt={`${artwork.title}, ${artwork.year}`}
                      w="full"
                      h="auto"
                      objectFit="contain"
                      sizes={`(max-width: 480px) calc(100vw - 64px), ${row.length === 1 ? '688px' : '344px'}`}
                      display="block"
                      loading="lazy"
                      borderRadius="md"
                      overflow="hidden"
                      boxShadow={imageShadow}
                      // Prevent iPhone HDR gain maps from boosting artwork brightness.
                      sx={{ aspectRatio: `${artwork.width} / ${artwork.height}`, '& img': { dynamicRangeLimit: 'standard' } }}
                    />
                  </Box>
                  <Box as="figcaption" display="flex" justifyContent="space-between" alignItems="baseline" gap={3} mt={2.5}>
                    <Box as="span" fontSize="sm" fontWeight="medium" lineHeight={1.4}>{artwork.title}</Box>
                    <Box as="time" dateTime={String(artwork.year)} fontSize="xs" color={yearColor} flexShrink={0}>{artwork.year}</Box>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
            </Box>
          </Box>
        ))}
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Skills</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['Painting', 'Drawing', 'Art', 'Illustration', 'Watercolor', 'Charcoal'].map(item => (
              <WrapItem key={item}>
                <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        <Modal isOpen={Boolean(selected)} onClose={() => setSelected(null)} isCentered>
          <ModalOverlay bg="blackAlpha.800" />
          <ModalContent w="auto" maxW="92vw" m={4} bg="transparent" boxShadow="none">
            <ModalCloseButton position="fixed" top={4} right={4} color="white" bg="blackAlpha.500" _hover={{ bg: 'blackAlpha.700' }} />
            <ModalBody p={0}>
              {selected && (
                <>
                  <Image
                    src={artPreviews[selected.image].variants.slice(-1)[0].src}
                    alt={`${selected.title}, ${selected.year}`}
                    decoding="async"
                    ignoreFallback
                    maxH="85vh"
                    maxW="92vw"
                    w="auto"
                    h="auto"
                    mx="auto"
                    borderRadius="md"
                    sx={{ dynamicRangeLimit: 'standard' }}
                  />
                  <Text mt={3} textAlign="center" fontSize="sm" color="whiteAlpha.900">
                    {selected.title} · {selected.year}
                  </Text>
                  <Box textAlign="center" mt={1}>
                    <Link href={`/images/works/art/${selected.image}`} isExternal fontSize="xs" color="whiteAlpha.800" textDecoration="underline">
                      View full-resolution original
                    </Link>
                  </Box>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
