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
//import { IoLogoTwitter} from 'react-icons/io5'
import { IoLogoTwitter, IoLogoLinkedin} from 'react-icons/io5'
//import { ExternalLinkIcon } from '@chakra-ui/icons'

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
          <p> CS Researcher / Developer / Artist + Designer / Student Pilot </p>
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
              src="/images/photo1.png"
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
          Hello, my name is Yuzhe and I am a fully-funded PhD student in Computer Science.
          I was a research member of
          the {' '}
          <Link href="https://www.socr.umich.edu/" target="_blank" rel="noopener noreferrer">
            SOCR Big Data & Predictive Analytics
          </Link>
          &nbsp;at University of Michigan-Ann Arbor, and now I am a member of {' '}
          <Link href="https://www.jeffjianzhao.com/" target="_blank" rel="noopener noreferrer">
            WVisdom Research Group
          </Link>
          &nbsp;(formerly WatVis) and {' '}
          <Link href="https://www.civil.uwaterloo.ca/itss/index.htm" target="_blank" rel="noopener noreferrer">
            iTSS Lab
          </Link>
          &nbsp;at the University of Waterloo.
        </Paragraph>
        <Paragraph>
          My primary research interest is InfoVis for Explainable AI, with a focus on visualizing AI models under adversarial attacks and making XAI visualizations more meaningful for non-experts. 
          I also conduct research on applying machine learning to develop intelligent transportation solutions.
        </Paragraph>
        <Paragraph>
          I was previously a research intern at<Link href="https://www.microsoft.com/en-gb/about/" target="_blank" rel="noopener noreferrer">
          &nbsp;Microsoft UK 
          </Link>. I am currently interning with<Link href="https://www.adobe.com/home" target="_blank" rel="noopener noreferrer">
          &nbsp;Adobe Research&nbsp; 
          </Link>in San Jose, California.
          During my spare time, I enjoy working on my personal projects. I am also a digital artist and graphic designer, and a student pilot.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Visualization, Explainable AI, Machine Learning, Computer Vision, Coding, Digital Art, Graphic Design, UI/UX Design, Aviation, Cockatoos
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Recent News
        </Heading>
        <Box>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Aug 2025</BioYear>
              </Box>
              <Box flex={1}>
                I am joining 
                <Link href="https://www.adobe.com/home" target="_blank" rel="noopener noreferrer">
                &nbsp;Adobe&nbsp; 
                </Link>
                as a research intern this fall!
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Jul 2025</BioYear>
              </Box>
              <Box flex={1}>
                1 co-authored UIST&apos;25 paper accepted!
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Jul 2025</BioYear>
              </Box>
              <Box flex={1}>
                Received my ROC-A (Aeronautical Radio Operator Certificate), Student Pilot Permit for Aeroplane, and Student Pilot Permit for Ultralight!
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Jul 2025</BioYear>
              </Box>
              <Box flex={1} >
                I have been awarded <Link href="https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/cgrsd-besrd_eng.asp" target="_blank" rel="noopener noreferrer">
                &nbsp;NSERC Canada Graduate Scholarship&nbsp; 
                </Link> ($120,000 CAD), <Link href="https://osap.gov.on.ca/OSAPPortal/en/A-ZListofAid/PRDR019245.html" target="_blank" rel="noopener noreferrer">
                &nbsp;Ontario Graduate Scholarship&nbsp; 
                </Link> ($15,000 CAD), and UWaterloo<Link href="https://uwaterloo.ca/current-graduate-students/awards-and-funding/internal-awards/presidents-graduate-scholarship-pgs" target="_blank" rel="noopener noreferrer">
                &nbsp;President&apos;s Graduate Scholarship&nbsp; 
                </Link> ($10,000 CAD)!
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Apr 2025</BioYear>
              </Box>
              <Box flex={1} >
                1 GI&apos;25 paper accepted + received <Link href="https://cs.uwaterloo.ca/news/yuzhe-you-wins-best-student-paper-award-gi-2025-novel" target="_blank" rel="noopener noreferrer">Best Paper Award
                </Link>!
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Apr 2025</BioYear>
              </Box>
              <Box flex={1}>
                I am joining 
                <Link href="https://www.microsoft.com/en-gb/about/" target="_blank" rel="noopener noreferrer">
                &nbsp;Microsoft UK&nbsp; 
                </Link>
                as a research intern this spring!
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Mar 2025</BioYear>
              </Box>
              <Box flex={1}>
                I have begun my flight training with<Link href="https://www.classic-wings.co.uk/" target="_blank" rel="noopener noreferrer">
                &nbsp;Classic Wings&nbsp; 
                </Link>at the
                <Link href="https://www.iwm.org.uk/visits/iwm-duxford" target="_blank" rel="noopener noreferrer">
                &nbsp;Imperial War Museum Duxford&nbsp; 
                </Link>
                in the UK!
              </Box>
            </Box>
          </BioSection>
        </Box>
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
