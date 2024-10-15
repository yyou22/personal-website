import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  HStack,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import { WorkGridItem } from '../components/grid-item'
//import thumbSocr from '../public/images/works/socr_eyecatch.png'
import thumbFGSM from '../public/images/works/advex/advex1_thumbnail.gif'
import thumbFGSM2 from '../public/images/works/advex/advex1_thumbnail.png'
import thumbNavEaz from '../public/images/works/naveaz/naveaz1_thumbnail.png'
import { IoLogoTwitter, IoLogoLinkedin} from 'react-icons/io5'

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
          <p> Researcher / Developer / Artist / Designer</p>
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
          Hello, my name is Yuzhe and I am a PhD student in Computer Science.
          I was a research member of
          the {' '}
          <Link href="https://www.socr.umich.edu/" target="_blank" rel="noopener noreferrer">
            SOCR Big Data & Predictive Analytics
          </Link>
          &nbsp;at University of Michigan-Ann Arbor, and now I am a member of {' '}
          <Link href="https://www.jeffjianzhao.com/" target="_blank" rel="noopener noreferrer">
            WatVis Research Group
          </Link>
          &nbsp;and {' '}
          <Link href="https://www.civil.uwaterloo.ca/itss/index.htm" target="_blank" rel="noopener noreferrer">
            iTSS Lab
          </Link>
          &nbsp;at the University of Waterloo.
          My primary research interest is InfoVis for Explainable AI, with a focus on visualizing AI models under adversarial attacks. 
          I also conduct research on applying machine learning to develop intelligent transportation solutions.
          My other academic interests include Computer Vision,
          Machine Learning, Data Science, and more.
        </Paragraph>
        <Paragraph>
          During my spare time, I enjoy working on my personal projects. I am also a digital artist and graphic designer.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Visualization, Explainable AI, Machine Learning, Computer Vision, Coding, Digital Art, Graphic Design, UI/UX Design, Cockatoos
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Recent News
        </Heading>
        <BioSection>
          <BioYear>Oct 2024</BioYear>
          Interactive explainable {' '}
          <Link href="https://visxai-aml.vercel.app/" target="_blank" rel="noopener noreferrer">
          &quot;Panda or Gibbon?&quot;
          </Link> on adversarial attacks accepted at the 7th VISxAI workshop at IEEE VIS 2024.
        </BioSection>
        <BioSection>
          <BioYear>Oct 2024</BioYear>
          <Link href="works/advex">
          AdvEx
          </Link> received 3rd place best poster award (300 CAD) at UWaterloo&apos;s 2024 CPI Conference.
        </BioSection>
        <BioSection>
          <BioYear>Apr 2024</BioYear>
          Co-authored paper {' '}
          <Link href="https://dl.acm.org/doi/10.1145/3613904.3642212" target="_blank" rel="noopener noreferrer">
          &quot;CoPrompt&quot;
          </Link> on collaborative natural language programming
           accepted at CHI 2024.
        </BioSection>
        <BioSection>
          <BioYear>Mar 2024</BioYear>
          Received &quot;Business Incubation Award&quot; (3rd Place) in a Hackathon 
          hosted by Dynamic Map Platform Co. (50,000 JPY).
        </BioSection>
        <BioSection>
          <BioYear>Sep 2023</BioYear>
          Received &quot;Innovation Design Award&quot; in a Smart Mobility Innovation Contest
          hosted by ICACHI (5,000 RMB).
        </BioSection>
        {/*<BioSection>
          <BioYear>May 2023</BioYear>
          Recipient of GO-Bell Scholarship (24,000 CAD).
        </BioSection>*/}
      </Section>

      <Section delay={0.2}>
        <Box align="center" my={4}>
          <NextLink href="/cv" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              See My Full CV
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Connect with Me
        </Heading>
        <HStack spacing={4}>
          <Link href="https://www.linkedin.com/in/yuzheyou/" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoLinkedin />}
            >
              @yuzheyou
            </Button>
          </Link>
          <Link href="https://x.com/yuzhe_you" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoTwitter />}
            >
              @yuzhe_you
            </Button>
          </Link>
        </HStack>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Featured Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section delay={0.4}>
          <WorkGridItem
            id="advex"
            title="AdvEx"
            thumbnail={thumbFGSM}
            blurPlaceholder={thumbFGSM2}
          >
            An Interactive Visualization for Explaining AI-targeted Adversarial Attacks
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="naveaz"
            title="NavEaz"
            thumbnail={thumbNavEaz}
          >
            An AI-powered SmartWatch App for Driver Impairment Prediction
          </WorkGridItem>
        </Section>

        {/*
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
        */}

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

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
        Discover My Research in Action!
        </Heading>
        Watch a video about my MMath research on using interactive visualizations to explain adversarial attacks
         targeted at machine learning models.
        <br/>
        <br/>
        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ozoFFEIhW4U?si=RkzxvUhTS2XdgQ8O"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: '600px' }}
        ></iframe>
      </Section>

    </Container>
  </Layout>
  
)

export default Home
export { getServerSideProps } from '../components/chakra'
