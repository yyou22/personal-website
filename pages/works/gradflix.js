import YouTubePreview from '../../components/youtube-preview'
import { Container, Badge, ListItem, UnorderedList, Link, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  const linkColor = useColorModeValue('day.link', 'teal.300')
  const borderColor = useColorModeValue('day.strongBorder', 'teal.600')
  const panelBackground = useColorModeValue('day.surface', undefined)
  const metaColor = useColorModeValue('day.link', undefined)
  const captionColor = useColorModeValue('day.subtle', 'gray.500')

  return (
  <Layout title="GRADflix">
    <Container>
      <Title>
        GRADflix <Badge>2023</Badge>
      </Title>
      <P>
        For GRADflix, I turned my MMath research on adversarial machine learning
        into an 8-bit pixel game. I programmed the game logic and interactions,
        drew the artwork in Procreate on my iPad, and recorded an automated
        playthrough for the competition. The project brings together my
        research, programming, and illustration to introduce AI concepts to
        people outside the field.
      </P>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Recognition & Outreach</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Selected as a finalist in the 2023 University of Waterloo GRADflix competition.</ListItem>
          <ListItem>
            Featured by the University of Waterloo.{' '}
            <Link href="https://uwaterloo.ca/current-graduate-students/news/meet-gradflix-finalist-who-combined-art-and-programming" target="_blank" rel="noopener noreferrer">
              Meet the GRADflix finalist who combined art and programming <ExternalLinkIcon mx="2px" />
            </Link>
            .
          </ListItem>
        </UnorderedList>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Core Features</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Original pixel artwork drawn in Procreate.</ListItem>
          <ListItem>Scripted game logic, animation, and interactions.</ListItem>
          <ListItem>Game elements that introduce adversarial attacks and AI visualization research.</ListItem>
          <ListItem>An automated playthrough recorded as a short research video.</ListItem>
        </UnorderedList>
      </Box>
      <WorkImage src="/images/works/gradflix/gradflix3.png" alt="GRADflix" />
      <WorkImage src="/images/works/gradflix/gradflix.gif" alt="GRADflix" />
      <WorkImage src="/images/works/gradflix/gradflix2.gif" alt="GRADflix" />
      <WorkImage src="/images/works/gradflix/gradflix4.png" alt="GRADflix" />
      <YouTubePreview videoId="ozoFFEIhW4U" title="My MMath Research" maxW="600px" />
      <Box my={4} p={3} borderWidth="1px" borderColor={borderColor} bg={panelBackground} borderRadius="md">
        <Meta>Links</Meta>
        <VStack align="stretch" spacing={2} mt={2}>
          <Box>
            <Link
              href="https://uwaterloo.ca/current-graduate-students/news/meet-gradflix-finalist-who-combined-art-and-programming"
              target="_blank"
              rel="noopener noreferrer"
              color={linkColor}
              fontWeight="semibold"
            >
              School News <ExternalLinkIcon mx="1px" />
            </Link>
            <Text fontSize="xs" color={captionColor} lineHeight="1.2">
              Meet the GRADflix finalist who combined art and programming.
            </Text>
          </Box>
        </VStack>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['Pixel Art', 'Game Development', 'Game Design', 'AI Interpretability', 'Procreate', 'Game Engine Programming'].map(item => (
            <WrapItem key={item}>
              <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Keywords</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['Adversarial Machine Learning', 'Visualization', 'Pixel Art', 'Game Development', 'AI Interpretability'].map(item => (
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
