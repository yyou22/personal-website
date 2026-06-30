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
  Wrap,
  WrapItem,
  Tag,
  VStack,
  Text,
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
import { IoLogoTwitter, IoLogoLinkedin, IoMail } from 'react-icons/io5'
//import { ExternalLinkIcon } from '@chakra-ui/icons'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="container.sm" py={6}>
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
            Yuzhe You
          </Heading>
          <VStack align="start" spacing={2} mt={3} lineHeight="short">
            {/* Roles — one flowing line with teal middot accents */}
            <Text fontSize="sm" color={useColorModeValue('gray.700', 'whiteAlpha.900')} letterSpacing="wide">
              {['CS PhD Researcher', 'Artist + Designer', 'Student Pilot ✈️'].map(
                (role, i) => (
                  <Box as="span" key={role}>
                    {i > 0 && (
                      <Box
                        as="span"
                        px={2}
                        fontSize="lg"
                        fontWeight="bold"
                        color="gray.500"
                        _dark={{ color: 'gray.400' }}
                        aria-hidden="true"
                      >
                        ·
                      </Box>
                    )}
                    {role}
                  </Box>
                )
              )}
            </Text>

            {/* Affiliations — same flowing white text + teal dot style as line 1 */}
            <Text fontSize="sm" color={useColorModeValue('gray.700', 'whiteAlpha.900')} letterSpacing="wide" style={{ marginTop: '2px' }}>
              <Text
                as="span"
                fontSize="xs"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
                color={useColorModeValue('teal.600', 'teal.300')}
              >
                Research Intern
              </Text>{' '}@
              <HStack
                as="span"
                display="inline-flex"
                alignItems="center"
                spacing={1}
                ml={2}
                position="relative"
                top="2px"
                sx={{ '& img': { display: 'block' } }}
              >
                <Image src="/images/adobe.png" alt="Adobe" width={14} height={14} />
                <span>Adobe</span>
              </HStack>
              <Box
                as="span"
                px={2}
                fontSize="lg"
                fontWeight="bold"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
                aria-hidden="true"
              >
                ·
              </Box>
              <Text
                as="span"
                fontSize="xs"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
                color={useColorModeValue('gray.500', 'gray.400')}
              >
                Previously
              </Text>{' '}@
              <HStack
                as="span"
                display="inline-flex"
                alignItems="center"
                spacing={1}
                ml={2}
                position="relative"
                top="2px"
                sx={{ '& img': { display: 'block' } }}
              >
                <Image src="/images/microsoft.png" alt="Microsoft" width={14} height={14} />
                <span>Microsoft</span>
              </HStack>
            </Text>

            {/* Speaking credential — same style */}
            <Text fontSize="sm" color={useColorModeValue('gray.700', 'whiteAlpha.900')} letterSpacing="wide">
              <Text
                as="span"
                fontSize="xs"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
                color={useColorModeValue('teal.600', 'teal.300')}
              >
                Sneaks Speaker
              </Text>{' '}@ Adobe Summit 2026
              <HStack
                as="span"
                display="inline-flex"
                alignItems="center"
                ml={2}
                position="relative"
                top="2px"
                sx={{ '& img': { display: 'block' } }}
              >
                <Image
                  src="/images/adobe summit.png"
                  alt="Adobe Summit"
                  width={67}
                  height={14}
                  style={{ maxWidth: '100%' }}
                />
              </HStack>
            </Text>
          </VStack>
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
        <VStack align="stretch" spacing={5} mt={2}>
          <Box>
            <Paragraph>
              I&apos;m a fully funded CS PhD student at the University of Waterloo, researching in the{' '}
              <Link href="https://www.jeffjianzhao.com/" target="_blank" rel="noopener noreferrer">
                WVisdom Research Group
              </Link>
              . I was previously affiliated with{' '}
              <Link href="https://www.socr.umich.edu/" target="_blank" rel="noopener noreferrer">
                SOCR Big Data & Predictive Analytics
              </Link>
              {' '}(University of Michigan) and{' '}
              <Link href="https://www.civil.uwaterloo.ca/itss/index.htm" target="_blank" rel="noopener noreferrer">
                iTSS Lab
              </Link>
              {' '}(University of Waterloo).
            </Paragraph>
          </Box>
          <Box>
            <Text as="span" fontWeight="semibold" fontSize="sm" color={useColorModeValue('teal.600', 'teal.300')} textTransform="uppercase" letterSpacing="wider" mb={2} display="block">
              Research
            </Text>
            <Paragraph>
              My research spans XAI Visualization, Human-Computer Interaction, and Machine Learning — building tools to visualize and interpret ML models, designing agentic pipelines for interactive XAI experiences, and developing ML solutions for intelligent transportation. I also collaborate with{' '}
              <Link href="https://www.adobe.com/home" target="_blank" rel="noopener noreferrer">
                Adobe
              </Link>
              {' '}on agent-supported interaction and generative workflows for creative design and video generation.
            </Paragraph>
          </Box>
          <Box>
            <Text as="span" fontWeight="semibold" fontSize="sm" color={useColorModeValue('teal.600', 'teal.300')} textTransform="uppercase" letterSpacing="wider" mb={2} display="block">
              Experience & interests
            </Text>
            <Paragraph>
              I&apos;ve interned at{' '}
              <Link href="https://www.microsoft.com/en-gb/about/" target="_blank" rel="noopener noreferrer">
                Microsoft
              </Link>
              {' '}(Cambridge, UK) and{' '}
              <Link href="https://www.adobe.com/home" target="_blank" rel="noopener noreferrer">
                Adobe
              </Link>
              {' '}(San Jose, CA), and am returning to{' '}
              <Link href="https://www.adobe.com/home" target="_blank" rel="noopener noreferrer">
                Adobe
              </Link>
              {' '}as a research intern. Outside of research, I&apos;m a digital artist, graphic designer, and student pilot.
            </Paragraph>
          </Box>
        </VStack>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Wrap spacing={2}>
          {[
            'Visualization',
            'Explainable AI',
            'Human-Computer Interaction',
            'Machine Learning',
            'Agentic AI',
            'Computer Vision',
            'Traditional & Digital Art',
            'Graphic Design',
            'UI/UX Design',
            'Aviation',
            'Cockatoos'
          ].map(item => (
            <WrapItem key={item}>
              <Tag
                size="md"
                variant="subtle"
                colorScheme="teal"
                borderRadius="full"
                px={4}
                py={1}
              >
                {item}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
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

      <Section delay={0.45}>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              See My Full Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Recent News
        </Heading>
        <Box>
        <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Apr 2026</BioYear>
              </Box>
              <Box flex={1}>
                Presented 
                <Link href="https://www.youtube.com/watch?v=HPjwlZ6knHg" target="_blank" rel="noopener noreferrer">
                &nbsp;#ProjectTestKitchen&nbsp; 
                </Link>
                at 
                <Link href="https://business.adobe.com/summit/adobe-summit.html" target="_blank" rel="noopener noreferrer">
                &nbsp;Adobe Summit
                </Link>
              &nbsp;Sneaks&nbsp;
              <HStack as="span" display="inline-flex" alignItems="center" spacing={1} style={{ position: 'relative', top: '3px' }}>
              <Image 
                src="/images/adobe summit.png"
                alt="Adobe Summit Logo"
                width={76}
                height={16}
                style={{ marginTop: '2px' }}
              />
            </HStack>
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Apr 2026</BioYear>
              </Box>
              <Box flex={1}>
                Awarded WiCS Graduate Scholarship ($3,000 CAD)
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Feb 2026</BioYear>
              </Box>
              <Box flex={1}>
                Returning to 
                &nbsp;
                <HStack as="span" display="inline-flex" alignItems="center" spacing={1} style={{ position: 'relative', top: '3px' }}>
              <Image 
                src="/images/adobe2.png"
                alt="Adobe Logo"
                width={16}
                height={16}
                style={{ marginTop: '2px' }}
              />
            </HStack> 
                <Link href="https://www.adobe.com/home" target="_blank" rel="noopener noreferrer">
                &nbsp;Adobe&nbsp; 
                </Link>
                as a research intern
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Jan 2026</BioYear>
              </Box>
              <Box flex={1}>
                1 co-authored paper accepted to <i>Artificial Intelligence for Transportation</i> + 1 co-authored CHI&apos;26 paper accepted
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Aug 2025</BioYear>
              </Box>
              <Box flex={1}>
                Joined 
                &nbsp;
                <HStack as="span" display="inline-flex" alignItems="center" spacing={1} style={{ position: 'relative', top: '3px' }}>
              <Image 
                src="/images/adobe2.png"
                alt="Adobe Logo"
                width={16}
                height={16}
                style={{ marginTop: '2px' }}
              />
            </HStack> 
                <Link href="https://www.adobe.com/home" target="_blank" rel="noopener noreferrer">
                &nbsp;Adobe&nbsp; 
                </Link>
                as a research intern
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Jul 2025</BioYear>
              </Box>
              <Box flex={1}>
                1 co-authored UIST&apos;25 paper accepted
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Jul 2025</BioYear>
              </Box>
              <Box flex={1}>
              Earned ROC-A (Aeronautical Radio Operator Certificate) and Student Pilot Permits for both Aeroplane and Ultralight aircraft
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Jul 2025</BioYear>
              </Box>
              <Box flex={1} >
                Awarded <Link href="https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/cgrsd-besrd_eng.asp" target="_blank" rel="noopener noreferrer">
                &nbsp;NSERC CGS-D&nbsp; 
                </Link> ($120,000 CAD) + <Link href="https://osap.gov.on.ca/OSAPPortal/en/A-ZListofAid/PRDR019245.html" target="_blank" rel="noopener noreferrer">
                &nbsp;OGS&nbsp; 
                </Link> ($15,000 CAD) + <Link href="https://uwaterloo.ca/current-graduate-students/awards-and-funding/internal-awards/presidents-graduate-scholarship-pgs" target="_blank" rel="noopener noreferrer">
                &nbsp;President&apos;s Graduate Scholarship&nbsp; 
                </Link> ($10,000 CAD)
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Apr 2025</BioYear>
              </Box>
              <Box flex={1} >
                GI&apos;25 paper accepted + 🏆 <Link href="https://uwaterloo.ca/computer-science/news/yuzhe-you-wins-best-student-paper-award-gi-2025-novel" target="_blank" rel="noopener noreferrer">Best Paper Award
                </Link>
              </Box>
            </Box>
          </BioSection>
          <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Apr 2025</BioYear>
              </Box>
              <Box flex={1}>
                Joined 
                &nbsp;
            <HStack as="span" display="inline-flex" alignItems="center" spacing={1} style={{ position: 'relative', top: '3px' }}>
              <Image 
                src="/images/microsoft.png"
                alt="Microsoft Logo"
                width={16}
                height={16}
                style={{ marginTop: '2px' }}
              />
            </HStack>
                <Link href="https://www.microsoft.com/en-gb/about/" target="_blank" rel="noopener noreferrer">
                &nbsp;Microsoft UK&nbsp; 
                </Link>
                as a research intern
              </Box>
            </Box>
          </BioSection>
          {/* <BioSection>
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
          </BioSection> */}
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
        <HStack spacing={4} flexWrap="wrap">
          <Link href="mailto:y28you@uwaterloo.ca">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoMail />}
            >
              y28you@uwaterloo.ca
            </Button>
          </Link>
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

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
        Discover My Research in Action!
        </Heading>
        Watch my presentation from
        <Link href="https://business.adobe.com/summit/adobe-summit.html" target="_blank" rel="noopener noreferrer">
          &nbsp;Adobe Summit&nbsp;
        </Link>
        Sneaks 2026, where I showcased my research #ProjectTestKitchen in front of thousands of attendees and alongside American comedian and actor
        <Link href="https://en.wikipedia.org/wiki/Iliza_Shlesinger" target="_blank" rel="noopener noreferrer">
          &nbsp;Iliza Shlesinger
        </Link>
        .
        <br/>
        <br/>
        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/HPjwlZ6knHg?si=rLtcegIKdSDnPPVC"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: '600px', display: 'block', margin: '0 auto' }}
        ></iframe>
        <br/>
        Watch a pixel animation I made about my MMath research on using interactive visualizations to explain machine learning adversarial attacks.
        <br/>
        <br/>
        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ozoFFEIhW4U?si=RkzxvUhTS2XdgQ8O"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: '600px', display: 'block', margin: '0 auto' }}
        ></iframe>
      </Section>

    </Container>
  </Layout>
  
)

export default Home
export { getServerSideProps } from '../components/chakra'
