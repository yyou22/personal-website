import { useEffect } from 'react'
import { Container, ListItem, UnorderedList, Box, Image, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

// Each row is laid out at equal height; widths follow each piece's aspect ratio,
// so nothing is cropped and every row ends flush on both sides.
const galleryRows = [
  [
    { title: 'Venice', year: 2013, image: 'art1.png', width: 1564, height: 1124 },
    { title: 'Splendid', year: 2015, image: 'art3.png', width: 1306, height: 1962 }
  ],
  [
    { title: 'Contemplation', year: 2015, image: 'art2.png', width: 746, height: 826 },
    { title: 'Memory of Rhode Island', year: 2015, image: 'art4.png', width: 852, height: 760 }
  ],
  [
    { title: 'Gangsters', year: 2015, image: 'art5.png', width: 1680, height: 1262 }
  ]
]

const Work = () => {
  const metaColor = useColorModeValue('green.800', undefined)
  const yearColor = useColorModeValue('gray.600', 'gray.400')
  const imageShadow = useColorModeValue('0 6px 20px rgba(0, 0, 0, 0.10)', '0 6px 20px rgba(0, 0, 0, 0.35)')

  useEffect(() => {
    // Load any necessary scripts for external components
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

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
        <Box display="flex" flexDirection="column" gap={{ base: 8, sm: 6 }} my={{ base: 8, sm: 10 }}>
          {galleryRows.map(row => (
            <Box
              key={row[0].title}
              display="flex"
              flexDirection={{ base: 'column', sm: 'row' }}
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
                  <Image
                    src={`/images/works/art/${artwork.image}`}
                    alt={`${artwork.title}, ${artwork.year}`}
                    htmlWidth={artwork.width}
                    htmlHeight={artwork.height}
                    w="full"
                    h="auto"
                    display="block"
                    loading="lazy"
                    borderRadius="md"
                    boxShadow={imageShadow}
                  />
                  <Box as="figcaption" display="flex" justifyContent="space-between" alignItems="baseline" gap={3} mt={2.5}>
                    <Box as="span" fontSize="sm" fontWeight="medium" lineHeight={1.4}>{artwork.title}</Box>
                    <Box as="time" dateTime={String(artwork.year)} fontSize="xs" color={yearColor} flexShrink={0}>{artwork.year}</Box>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
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
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
