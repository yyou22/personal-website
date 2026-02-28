import { Container, Badge, ListItem, UnorderedList, Link, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  const linkColor = useColorModeValue('pink.600', 'teal.300')
  const borderColor = useColorModeValue('teal.500', 'teal.600')
  const metaColor = useColorModeValue('green.800', undefined)

  return (
  <Layout title="GRADflix">
    <Container>
      <Title>
        GRADflix <Badge>2023</Badge>
      </Title>
      <P>
        My GRADflix project is a playful 8-bit pixel-style video game, designed to present my research on visualizing adversarial machine learning (AML) in an accessible and creative way. 
        I developed the game using a game engine for the underlying logic and interactivity, and hand-drew all the artwork from scratch using Procreate on my iPad. 
        The game is set to autoplay, and I recorded a playthrough to demonstrate how I can combine my programming and design skills to make complex AI concepts more understandable to a wider audience. 
        The goal of this project is to highlight my MMath research and emphasize the value of visualizations in explaining AI safety and AML, as well as making technical topics more engaging and easier for non-technical audience to grasp.
      </P>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Links</Meta>
        </Box>
        <VStack align="stretch" spacing={2} mt={2} pl={2} borderLeftWidth="2px" borderColor={borderColor}>
          <Box>
            <Text as="span" fontWeight="medium" color="gray.500">News: </Text>
            <Link href="https://uwaterloo.ca/current-graduate-students/news/meet-gradflix-finalist-who-combined-art-and-programming" target="_blank" rel="noopener noreferrer" color={linkColor}>
              Meet the GRADflix finalist who combined art and programming <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </VStack>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Recognition & Outreach</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Selected as a finalist in the 2023 University of Waterloo GRADflix competition.</ListItem>
          <ListItem>UWaterloo covered the project (see Links above).</ListItem>
        </UnorderedList>
      </Box>
      <WorkImage src="/images/works/gradflix/gradflix3.png" alt="GRADflix" />
      <WorkImage src="/images/works/gradflix/gradflix.gif" alt="GRADflix" />
      <WorkImage src="/images/works/gradflix/gradflix2.gif" alt="GRADflix" />
      <WorkImage src="/images/works/gradflix/gradflix4.png" alt="GRADflix" />
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ozoFFEIhW4U?si=RkzxvUhTS2XdgQ8O"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: '600px' }}
      ></iframe>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Core Features</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>A 8-bit pixel animation combining art and programming.</ListItem>
          <ListItem>Custom game engine scripting and programming for seamless animations and interactions.</ListItem>
          <ListItem>Interactive video game elements used to explain adversarial machine learning and XAI visualization research.</ListItem>
          <ListItem>Created a fully functional game, set to autoplay and recorded as a screencast.</ListItem>
        </UnorderedList>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['Pixel Art', 'Game Development', 'AI Interpretability', 'Procreate', 'Game Engine Programming'].map(item => (
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
