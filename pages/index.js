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
  // HStack, // Used by the archived Recent News entries below.
  // Wrap, WrapItem, // Used by the temporarily hidden interests section.
  // Tag, // Used by the temporarily hidden interests section.
  VStack,
  Text,
  Icon,
} from '@chakra-ui/react'
import { FaAward } from 'react-icons/fa'
import { RiBookOpenLine, RiFlightTakeoffLine, RiQuillPenLine } from 'react-icons/ri'
import ContactLinks from '../components/contact-links'
import WelcomeBanner from '../components/welcome-banner'
import ResearchInAction from '../components/research-in-action'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import ExperienceGrid from '../components/experience-grid'
// import { BioSection, BioYear } from '../components/bio' // Archived news below.
import { FeaturedCard } from '../components/press-page'
import { pressArticles } from '../lib/press'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import { WorkGridItem } from '../components/grid-item'
//import thumbSocr from '../public/images/works/socr_eyecatch.png'
import thumbFGSM from '../public/images/works/advex/advex1_thumbnail.gif'
import thumbFGSM2 from '../public/images/works/advex/advex1_thumbnail.png'
import thumbNavEaz from '../public/images/works/naveaz/naveaz1_thumbnail.png'
import thumbTestKitchen from '../public/images/works/test-kitchen/iliza-live-demo.jpg'
import thumbCommunityLibrary from '../public/images/publications/community-library.png'
import thumbVATRA from '../public/images/works/vatra/vatra1_thumbnail_.gif'
import thumbVATRA2 from '../public/images/works/vatra/vatra2_thumbnail.png'
import thumbGradflix from '../public/images/works/gradflix/gradflix_thumbnail.gif'
import thumbGradflix2 from '../public/images/works/gradflix/gradflix_thumbnail.png'
//import { IoLogoTwitter} from 'react-icons/io5'
//import { ExternalLinkIcon } from '@chakra-ui/icons'

const recentNews = pressArticles.filter(article =>
  article.href?.endsWith('/adobe-research-intern-follows-her-mentors-footsteps/') ||
  article.href?.includes('watch?v=WIrwwJNthxc') ||
  article.href?.endsWith('/yuzhe-you-wins-best-student-paper-award-gi-2025-novel')
)
const recentNewsSummaries = {
  'Adobe Research': 'My internship, mentorship, and journey to Adobe Summit Sneaks.',
  'Adobe for Business': 'A behind-the-scenes interview on Project Test Kitchen.'
}

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const SectionButton = ({ href, children }) => (
  <NextLink href={href} passHref scroll={false}>
    <Button
      as="a"
      variant="outline"
      size="sm"
      h={9}
      px={4}
      fontSize="sm"
      fontWeight="medium"
      color={useColorModeValue('teal.700', 'teal.200')}
      bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.50')}
      borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      borderRadius="md"
      rightIcon={<ChevronRightIcon boxSize={4} aria-hidden="true" />}
      _hover={{
        bg: useColorModeValue('teal.50', 'whiteAlpha.100'),
        borderColor: useColorModeValue('teal.300', 'teal.500')
      }}
      _focusVisible={{ outline: '2px solid', outlineColor: 'teal.400', outlineOffset: '3px' }}
    >
      {children}
    </Button>
  </NextLink>
)

const AwardAmount = ({ children }) => (
  <Text
    as="span"
    display="inline"
    fontSize="inherit"
    color={useColorModeValue('gray.600', 'gray.400')}
    whiteSpace="nowrap"
  >
    ·{' '}
    {children}
  </Text>
)

const Roles = ({ roles }) => {
  const accent = useColorModeValue('teal.600', 'teal.300')
  return (
    <Box
      as="p"
      display={{ base: 'grid', sm: 'flex' }}
      gridTemplateColumns="repeat(3, minmax(0, 1fr))"
      flexWrap="nowrap"
      alignItems={{ base: 'start', sm: 'center' }}
      columnGap={{ base: 2, sm: 4 }}
      mt={{ base: 3, sm: 2 }}
      fontSize={{ base: '10px', sm: '11px' }}
      fontWeight="semibold"
      letterSpacing={{ base: '0.1em', sm: '0.08em' }}
      textTransform="uppercase"
      lineHeight={{ base: 1.4, sm: 'tall' }}
      color={useColorModeValue('gray.700', 'gray.300')}
    >
      {roles.map(({ icon, label }) => (
        <Box
          as="span"
          key={label}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          alignItems="center"
          gap={{ base: 1, sm: 1.5 }}
          minW={0}
          textAlign="center"
          whiteSpace={{ base: 'normal', sm: 'nowrap' }}
        >
          <Icon as={icon} boxSize={{ base: '17px', sm: '15px' }} flexShrink={0} color={accent} aria-hidden="true" />
          {/* On mobile, break before the last word so every role reads as two lines */}
          <span>
            {label.slice(0, label.lastIndexOf(' '))}
            <Box as="br" display={{ sm: 'none' }} />{' '}
            {label.slice(label.lastIndexOf(' ') + 1)}
          </span>
        </Box>
      ))}
    </Box>
  )
}

const Home = () => (
  <Layout>
    <Container
      maxW="700px"
      px={{ base: 0, md: 2 }}
      pt={{ base: 0, md: 6 }}
      pb={6}
    >
      <WelcomeBanner />

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} minW={0}>
          <Heading as="h2" variant="page-title">
            Yuzhe You
          </Heading>
          <Roles
            roles={[
              { icon: RiBookOpenLine, label: 'CS PhD Researcher' },
              { icon: RiQuillPenLine, label: 'Artist + Designer' },
              { icon: RiFlightTakeoffLine, label: 'Student Pilot' }
            ]}
          />
          <Box display="grid" gridTemplateColumns="14px minmax(0, 1fr)" alignItems="start" columnGap={2} rowGap={{ base: 1.5, md: 0 }} mt={3} fontSize="13px" lineHeight={1.6} color={useColorModeValue('gray.700', 'gray.200')}>
            <Icon as={FaAward} boxSize="14px" mt="3px" flexShrink={0} color={useColorModeValue('orange.700', '#FFB347')} aria-hidden="true" />
              <Text whiteSpace="nowrap" title="Current holder of the NSERC Canada Graduate Scholarship – Doctoral">
                <Text as="span" fontWeight="medium">NSERC CGS-D Scholar</Text>{' '}
                <AwardAmount>$120k CAD</AwardAmount>
              </Text>
              <Icon as={FaAward} boxSize="14px" mt="3px" flexShrink={0} color={useColorModeValue('orange.700', '#FFB347')} aria-hidden="true" />
              <Text whiteSpace="nowrap" title="Current holder of the UWaterloo President’s Graduate Scholarship">
                <Text as="span" fontWeight="medium">
                  <Box as="span" display={{ base: 'inline', sm: 'none' }}>UWaterloo President&apos;s Scholar</Box>
                  <Box as="span" display={{ base: 'none', sm: 'inline' }}>UWaterloo President&apos;s Graduate Scholar</Box>
                </Text>{' '}
                <AwardAmount>$10k CAD</AwardAmount>
              </Text>
          </Box>
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
              My research spans XAI Visualization, Human-Computer Interaction, and Machine Learning — building tools to visualize and interpret ML models, designing agent-supported generative workflows for creative design and video generation, and developing ML solutions for intelligent transportation.
            </Paragraph>
          </Box>
          <Box>
            <Text as="span" fontWeight="semibold" fontSize="sm" color={useColorModeValue('teal.600', 'teal.300')} textTransform="uppercase" letterSpacing="wider" mb={2} display="block">
              Experience
            </Text>
            <ExperienceGrid />
            <Box textAlign="center" mt={4}>
              <SectionButton href="/cv">See My Full CV</SectionButton>
            </Box>
          </Box>
        </VStack>
      </Section>

      {/* Interests — temporarily hidden.
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Wrap spacing={2}>
          {[
            'XAI Visualization',
            'Human-Computer Interaction',
            'Machine Learning',
            'Agentic AI',
            'Traditional & Digital Art',
            'Piano',
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
      */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Featured Projects
        </Heading>
      </Section>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} columnGap={5} rowGap={4}>

        <Section delay={0.4}>
          <WorkGridItem
            id="test-kitchen"
            title="Project Test Kitchen"
            thumbnail={thumbTestKitchen}
            thumbnailBrand={{ logo: '/images/adobe2.png', name: 'Adobe Research', overlay: true }}
            thumbnailObjectFit="cover"
          >
            My Adobe internship project, presented at Summit Sneaks 2026
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="community-library"
            title="Community Library Creator"
            thumbnail={thumbCommunityLibrary}
            thumbnailBrand={{ logo: '/images/microsoft.png', name: 'Microsoft Research' }}
            thumbnailObjectFit="cover"
          >
            Research I contributed to during my Microsoft internship, published at CHI 2026
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="vatra"
            title="VATRA"
            thumbnail={thumbVATRA}
            blurPlaceholder={thumbVATRA2}
          >
            Exploring model trade-offs in adversarial machine learning
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="advex"
            title="AdvEx"
            thumbnail={thumbFGSM}
            blurPlaceholder={thumbFGSM2}
          >
            Understanding adversarial attacks through interactive visualization
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="naveaz"
            title="NavEaz"
            thumbnail={thumbNavEaz}
          >
            A smartwatch app for predicting driver impairment
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="gradflix"
            title="GRADflix"
            thumbnail={thumbGradflix}
            blurPlaceholder={thumbGradflix2}
          >
            My MMath research, told through an 8-bit pixel game
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
          <SectionButton href="/works">See My Full Portfolio</SectionButton>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Recent News
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns={{ base: 'minmax(0, 1fr)', md: 'repeat(3, minmax(0, 1fr))' }}
          gap={3}
          overflowWrap="anywhere"
        >
          {recentNews.map(article => (
            <FeaturedCard
              key={article.href}
              article={article}
              imageRatio={{ base: '16 / 9', md: '4 / 3' }}
              summary={recentNewsSummaries[article.publisher] ||
                'Recognized for my cybersecurity visualization research.'}
            />
          ))}
        </Box>
        <Box textAlign="center" mt={4}>
          <SectionButton href="/press">See Full Press Page</SectionButton>
        </Box>

        {/* Previous Recent News entries, preserved for future use.
        <Box>
        <BioSection>
            <Box display="flex" alignItems="flex-start">
              <Box width="90px" flexShrink={0}>
                <BioYear>Apr 2026</BioYear>
              </Box>
              <Box flex={1} minW={0} overflowWrap="anywhere">
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
        */}
      </Section>

      <Section delay={0.3}>
        <ResearchInAction />
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Connect with Me
        </Heading>
        <ContactLinks />
      </Section>

    </Container>
  </Layout>
  
)

export default Home
export { getServerSideProps } from '../components/chakra'
