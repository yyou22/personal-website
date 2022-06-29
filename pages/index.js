import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

import { WorkGridItem } from '../components/grid-item'
import thumbRNN from '../public/images/works/rnn_eyecatch.png'
import thumbSocr from '../public/images/works/socr_eyecatch.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I am Yuzhe! Welcome to my personal website.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yuzhe Y.
          </Heading>
          <p> Developer / Artist / Designer / Writer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/pfp.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Hello, my name is Yuzhe and I am a Master's of Mathematics (Computer Science) thesis student.
          I was an undergraduate research member at
          {' '}
          <Link href="https://www.socr.umich.edu/" scroll={false}>
            <Link> Statistics Online Computational Resource</Link>
          </Link>
          &nbsp;(SOCR) and I am currently working as part of iTTS Lab and WatVis Research Group.
          My primary research interest is InfoVis for AI Explainability.
          My other academic interests include Software Development, Data Analytics,
          Machine Learning, Creative AI & more.
        </Paragraph>
        <Paragraph>
          During my spare time, I enjoy working on my personal projects. I am also a digital artist & graphic design
          hobbyist.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Information Visualization, Software Development, {' '}
          <NextLink href="/works/socr" scroll={false}>
            <Link>Data Analytics</Link>
          </NextLink>
          ,&nbsp;
          <NextLink href="/works/rnn" scroll={false}>
            <Link>Creative AI</Link>
          </NextLink>
          ,&nbsp;
          <NextLink href="/works/softtriple" scroll={false}>
            <Link>Machine Learning</Link>
          </NextLink>
          , Drawing,
          Graphic Design, Music Composing, Writing, UI/UX Design
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Featured Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section delay={0.4}>
          <WorkGridItem
            id="rnn"
            title="Melody AI"
            thumbnail={thumbRNN}
          >
            A RNN-based melody generator (vanilla RNN, LSTM & GRU networks)
            that generates music based on Touhou Project
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="socr"
            title="SOCR - Big Data"
            thumbnail={thumbSocr}
          >
            Design and disseminate advanced methods/tools in probability, statistics,
            and machine learning; develop enhanced analysis and visualizations on &quot;Big Data&quot;
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.4}>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              See My Full Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
