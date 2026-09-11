import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import {
  FaTrophy,
  FaGraduationCap,
  FaBriefcase,
  FaBookOpen,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaMicrophone,
  FaNewspaper
} from 'react-icons/fa'
import Layout from './layouts/article'
import { cv } from '../lib/cv'

const sections = [
  ['education', 'Education', FaGraduationCap],
  ['experience', 'Experience', FaBriefcase],
  ['publications', 'Publications', FaBookOpen],
  ['awards', 'Awards', FaTrophy],
  ['teaching', 'Teaching', FaChalkboardTeacher],
  ['service', 'Service', FaHandsHelping],
  ['talks', 'Talks', FaMicrophone],
  ['media', 'Media', FaNewspaper]
]
const logos = {
  'University of Waterloo': '/images/uwaterloo.png',
  'University of Michigan - Ann Arbor': '/images/umich.jpeg',
  'Rhode Island School of Design': '/images/risd.png',
  Adobe: '/images/adobe2.png',
  Microsoft: '/images/microsoft.png',
  Blackberry: '/images/blackberry.png'
}
const paperPreviews = [
  '/images/publications/community-library.png',
  '/images/publications/traffic-forecasting.png',
  '/images/publications/macedon.png',
  '/images/works/vatra/vatra2_thumbnail.png',
  '/images/works/advex/advex1_thumbnail.png',
  '/images/works/gamification/gamification4_thumbnail.png',
  '/images/works/visxai/visxai1_thumbnail.png',
  '/images/works/coprompt4.jpeg'
]
const paperVenues = [
  'CHI 2026',
  'AI for Transportation · 2026',
  'UIST 2025',
  'Graphics Interface 2025',
  'ACM TiiS 2025',
  'CHI EA 2025',
  'VISxAI 2024',
  'CHI 2024'
]
const grid = { base: 'minmax(0, 1fr)', md: 'repeat(2, minmax(0, 1fr))' }

const Panel = ({ children, ...props }) => (
  <Box
    minW={0}
    p={{ base: 4, md: 5 }}
    bg={useColorModeValue('whiteAlpha.700', '#29292c')}
    borderWidth="1px"
    borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')}
    borderRadius="lg"
    {...props}
  >
    {children}
  </Box>
)
const Details = ({ children, ...props }) => (
  <Text
    fontSize="15px"
    lineHeight={1.65}
    color={useColorModeValue('gray.600', 'gray.400')}
    {...props}
  >
    {children}
  </Text>
)
const Reveal = ({ label, children, ...props }) => {
  const accent = useColorModeValue('#426b89', '#9bbbd4')
  return (
    <Box as="details" mt={3} {...props}>
      <Box
        as="summary"
        cursor="pointer"
        color={accent}
        fontSize="sm"
        fontWeight="medium"
        py={2}
        _hover={{ textDecoration: 'underline' }}
        _focusVisible={{
          outline: '2px solid',
          outlineColor: accent,
          outlineOffset: '3px'
        }}
      >
        {label}
      </Box>
      <Box pt={2}>{children}</Box>
    </Box>
  )
}
const CVSection = ({ id, title, children, description }) => {
  const icon = sections.find(s => s[0] === id)[2]
  return (
    <Box
      as="section"
      id={id}
      aria-labelledby={`${id}-title`}
      mt={{ base: 9, md: 11 }}
      scrollMarginTop="88px"
    >
      <Box
        display="flex"
        alignItems="center"
        gap={2.5}
        mb={description ? 2 : 4}
      >
        <Icon
          as={icon}
          boxSize={4}
          color={useColorModeValue('#426b89', '#9bbbd4')}
          aria-hidden="true"
        />
        <Heading as="h3" id={`${id}-title`} fontSize="xl" letterSpacing="tight">
          {title}
        </Heading>
      </Box>
      {description && <Details mb={4}>{description}</Details>}
      {children}
    </Box>
  )
}
const Institution = ({ name }) => {
  const dark = useColorModeValue(false, true)
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={3}
      mb={{ base: 2, md: 0 }}
      alignSelf="start"
    >
      <Image
        src={logos[name]}
        alt=""
        boxSize="32px"
        objectFit="contain"
        flexShrink={0}
        clipPath={name === 'Adobe' ? 'inset(0 2% 0 0)' : undefined}
        filter={
          (name === 'Rhode Island School of Design' && dark) ||
          (name === 'Blackberry' && !dark)
            ? 'invert(1)'
            : undefined
        }
      />
      <Text fontSize="15px" fontWeight="semibold" lineHeight={1.4}>
        {name}
      </Text>
    </Box>
  )
}
const Recognition = ({ children }) => (
  <Box
    display="flex"
    alignItems="flex-start"
    gap={2}
    mt={3}
    color={useColorModeValue('orange.800', '#d9b77c')}
  >
    <Icon
      as={FaTrophy}
      boxSize={3}
      mt="4px"
      flexShrink={0}
      aria-hidden="true"
    />
    <Text fontSize="15px" fontWeight="bold" lineHeight={1.6}>
      {children}
    </Text>
  </Box>
)
const ItemTitle = ({ href, children }) => {
  const accent = useColorModeValue('#426b89', '#9bbbd4')
  return (
    <Heading as="h4" fontSize="md" fontWeight="semibold" lineHeight={1.5}>
      {href ? (
        <Link
          href={href}
          isExternal
          color={accent}
          _hover={{ textDecoration: 'underline' }}
          _focusVisible={{
            outline: '2px solid',
            outlineColor: accent,
            outlineOffset: '3px'
          }}
        >
          {children} <ExternalLinkIcon boxSize={3} aria-hidden="true" />
        </Link>
      ) : (
        children
      )}
    </Heading>
  )
}
const SmallEntry = ({ date, children }) => (
  <Box
    py={3}
    borderBottomWidth="1px"
    borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
    _first={{ pt: 0 }}
    _last={{ pb: 0, borderBottomWidth: 0 }}
  >
    <Details fontSize="sm" mb={1}>
      {date}
    </Details>
    {children}
  </Box>
)

const AwardCard = ({ item }) => {
  const accent = useColorModeValue('#426b89', '#9bbbd4')
  const amount = item.title.match(/\((\$?[\d,]+ (?:CAD|JPY|RMB))\)/)
  const title = item.title
    .replace(/\s*\(\$?[\d,]+ (?:CAD|JPY|RMB)\)/, '')
    .replace(' [had to decline due to already holding NSERC CGS-D]', '')
  return (
    <Panel p={3}>
      <Details fontSize="sm" mb={1}>
        {item.date}
      </Details>
      <Text fontSize="15px" lineHeight={1.5} fontWeight="medium">
        {title}
      </Text>
      {amount && (
        <Text fontSize="15px" fontWeight="semibold" color={accent} mt={1}>
          {amount[1]}
        </Text>
      )}
      {item.title.includes('had to decline') && (
        <Details fontSize="sm" mt={1}>
          Declined while holding the NSERC doctoral scholarship.
        </Details>
      )}
    </Panel>
  )
}

const additionalAwards = cv.awards
  .flatMap(({ items }) => items)
  .filter(
    item =>
      !/NSERC Canada Graduate Scholarship|President's Graduate Scholarship|Best Student Paper in HCI/.test(
        item.title
      )
  )

const CV = () => {
  const accent = useColorModeValue('#426b89', '#9bbbd4')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const foreground = useColorModeValue('gray.800', 'gray.200')
  const navHover = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const highlights = [
    {
      title: 'NSERC Canada Graduate Scholarship — Doctoral',
      amount: '$120,000 CAD',
      date: 'Apr 2025'
    },
    {
      title: 'University of Waterloo President’s Graduate Scholarship',
      amount: '$10,000 CAD',
      date: 'Apr 2025'
    },
    {
      title: 'Best Student Paper in HCI',
      detail: 'Michael A. J. Sweeney Award',
      date: 'May 2025'
    }
  ]
  return (
    <Layout title="CV">
      <Container
        maxW="container.md"
        px={{ base: 0, md: 2 }}
        pt={{ base: 7, md: 10 }}
        pb={10}
        overflowWrap="anywhere"
        isolation="isolate"
      >
        <Box as="header">
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '28px' }}
            letterSpacing="tight"
          >
            Research & experience
          </Heading>
          <Details mt={3} maxW="560px">
            Research, industry collaborations, and a background in computer
            science and design.
          </Details>
          <Box
            as="nav"
            aria-label="CV sections"
            display="flex"
            flexWrap="wrap"
            gap={1}
            mt={5}
            py={2}
            borderY="1px solid"
            borderColor={border}
          >
            {sections.map(([id, label]) => (
              <Link
                key={id}
                href={`#${id}`}
                fontSize="sm"
                fontWeight="medium"
                color={muted}
                px={2.5}
                py={2.5}
                borderRadius="md"
                _hover={{ color: accent, bg: navHover, textDecoration: 'none' }}
                _focusVisible={{ outline: '2px solid', outlineColor: accent }}
              >
                {label}
              </Link>
            ))}
          </Box>
        </Box>

        <CVSection id="education" title="Education">
          <Box display="grid" gap={3}>
            {cv.education.flatMap(({ institution, details }) => {
              const degrees =
                institution === 'University of Waterloo'
                  ? [details.slice(0, 4), details.slice(4)]
                  : [details]
              return degrees.map(([degree, when, ...notes]) => {
                const [location, dates] = when.split(' | ')
                return (
                  <Panel
                    key={degree}
                    py={3}
                    px={{ base: 4, md: 5 }}
                    display="grid"
                    gridTemplateColumns={{
                      base: 'minmax(0, 1fr)',
                      md: '190px minmax(0, 1fr)'
                    }}
                    gap={{ base: 0, md: 5 }}
                  >
                    <Institution name={institution} />
                    <Box minW={0}>
                      <Heading as="h4" fontSize="md" lineHeight={1.5}>
                        {degree}
                      </Heading>
                      <Details fontSize="sm" mt={1}>
                        {dates} · {location}
                      </Details>
                      {notes.length > 0 && (
                        <Details fontSize="sm" mt={1}>
                          {notes.join(' · ')}
                        </Details>
                      )}
                    </Box>
                  </Panel>
                )
              })
            })}
          </Box>
        </CVSection>

        <CVSection id="experience" title="Industry experience">
          <Box display="grid" gap={3}>
            {cv.experience.map(
              ({ institution, details: [role, when], highlight }) => {
                const [location, dates] = when.split(' | ')
                return (
                  <Panel
                    key={`${institution}-${dates}`}
                    py={3}
                    px={{ base: 4, md: 5 }}
                    display="grid"
                    gridTemplateColumns={{
                      base: 'minmax(0, 1fr)',
                      md: '190px minmax(0, 1fr)'
                    }}
                    gap={{ base: 0, md: 5 }}
                  >
                    <Institution name={institution} />
                    <Box minW={0}>
                      <Heading as="h4" fontSize="md">
                        {role}
                      </Heading>
                      <Details fontSize="sm" mt={1}>
                        {dates} · {location}
                      </Details>
                      {highlight && <Recognition>{highlight}</Recognition>}
                    </Box>
                  </Panel>
                )
              }
            )}
          </Box>
        </CVSection>

        <CVSection
          id="publications"
          title="Publications"
          description="Research in explainable AI, interactive systems, and intelligent transportation."
        >
          <Box display="grid" gap={3}>
            {cv.publications.map((paper, index) => (
              <Panel as="article" key={paper.href}>
                <Box
                  display="grid"
                  gridTemplateColumns={{
                    base: 'minmax(0, 1fr)',
                    sm: '144px minmax(0, 1fr)'
                  }}
                  gap={4}
                  alignItems="start"
                >
                  <Box w="144px" h="108px" borderRadius="md" overflow="hidden">
                    <Image
                      src={paperPreviews[index]}
                      alt=""
                      loading="lazy"
                      w="full"
                      h="full"
                      objectFit="cover"
                    />
                  </Box>
                  <Box minW={0}>
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      color={muted}
                      mb={2}
                    >
                      {paperVenues[index]}
                    </Text>
                    <ItemTitle href={paper.href}>{paper.title}</ItemTitle>
                    {paper.award && (
                      <Recognition>
                        <strong>{paper.award}</strong>
                      </Recognition>
                    )}
                    <Box mt={3}>
                      <Details fontSize="sm">
                        {paper.authors.split(/(Yuzhe You)/).map((part, j) =>
                          part === 'Yuzhe You' ? (
                            <Text as="strong" color={foreground} key={j}>
                              {part}
                            </Text>
                          ) : (
                            part
                          )
                        )}
                      </Details>
                      <Details fontSize="sm" mt={2}>
                        {paper.venue}
                      </Details>
                    </Box>
                  </Box>
                </Box>
              </Panel>
            ))}
          </Box>
        </CVSection>

        <CVSection id="awards" title="Honors & awards">
          <Box
            display="grid"
            gridTemplateColumns={{
              base: 'minmax(0, 1fr)',
              md: 'repeat(3, minmax(0, 1fr))'
            }}
            gap={3}
          >
            {highlights.map(item => (
              <Panel key={item.title}>
                <Recognition>{item.date}</Recognition>
                <Heading as="h4" fontSize="md" lineHeight={1.5} mt={3}>
                  {item.title}
                </Heading>
                <Text
                  fontSize="15px"
                  fontWeight={item.amount ? 'bold' : 'normal'}
                  color={item.amount ? accent : muted}
                  mt={2}
                >
                  {item.amount || item.detail}
                </Text>
              </Panel>
            ))}
          </Box>
          <Box display="grid" gridTemplateColumns={grid} gap={3} mt={4}>
            {additionalAwards.slice(0, 5).map(item => (
              <AwardCard key={item.title} item={item} />
            ))}
          </Box>
          <Reveal
            label={`View ${additionalAwards.length - 5} more honors & awards`}
            mt={4}
          >
            <Box display="grid" gridTemplateColumns={grid} gap={3}>
              {additionalAwards.slice(5).map(item => (
                <AwardCard key={item.title} item={item} />
              ))}
            </Box>
          </Reveal>
        </CVSection>

        <Box display="grid" gridTemplateColumns={grid} columnGap={5}>
          <CVSection id="teaching" title="Teaching">
            <Panel>
              {cv.teaching.map(({ details }) => (
                <SmallEntry
                  date={details[details.length - 1]}
                  key={details.join()}
                >
                  <Text fontSize="15px" fontWeight="medium" lineHeight={1.6}>
                    {details[details.length - 2]}
                  </Text>
                  {details.length === 3 && (
                    <Details fontSize="sm" mt={1}>
                      {details[0]}
                    </Details>
                  )}
                </SmallEntry>
              ))}
            </Panel>
          </CVSection>
          <CVSection id="service" title="Service & volunteering">
            <Panel>
              {cv.service.map(({ details, award }) => (
                <SmallEntry
                  date={details[details.length - 1]}
                  key={details.join()}
                >
                  <Text fontSize="15px" fontWeight="medium" lineHeight={1.6}>
                    {details[details.length - 2]}
                  </Text>
                  {details.length === 3 && (
                    <Details fontSize="sm" mt={1}>
                      {details[0]}
                    </Details>
                  )}
                  {award && <Recognition>{award}</Recognition>}
                </SmallEntry>
              ))}
            </Panel>
          </CVSection>
        </Box>

        <CVSection id="talks" title="Presentations & talks">
          <Box display="grid" gridTemplateColumns={grid} gap={4}>
            {cv.talks.slice(0, 2).map((talk, index) => (
              <Panel key={talk.title} p={0} overflow="hidden">
                <Image
                  src={`https://i.ytimg.com/vi/${
                    index === 0 ? 'HPjwlZ6knHg' : 'llRI-0r4VFc'
                  }/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  w="full"
                  h="140px"
                  objectFit="cover"
                />
                <Box p={4}>
                  <ItemTitle href={talk.href}>{talk.title}</ItemTitle>
                  <Details fontSize="sm" mt={2}>
                    {talk.details}
                  </Details>
                </Box>
              </Panel>
            ))}
          </Box>
          <Reveal label="More presentations & invited talks" mt={4}>
            <Panel>
              {cv.talks.slice(2).map((talk, index) => (
                <Box key={talk.title} mt={index ? 5 : 0}>
                  <ItemTitle href={talk.href}>{talk.title}</ItemTitle>
                  <Details fontSize="sm" mt={2}>
                    {talk.details}
                  </Details>
                </Box>
              ))}
            </Panel>
          </Reveal>
        </CVSection>

        <CVSection id="media" title="In the news">
          <Panel>
            {cv.press.slice(0, 2).map((story, index) => (
              <Box key={story.href} mt={index ? 5 : 0}>
                <ItemTitle href={story.href}>
                  {story.title.replace(/^"|"$/g, '')}
                </ItemTitle>
                <Details fontSize="sm" mt={2}>
                  {story.details}
                </Details>
              </Box>
            ))}
            <Reveal label="More selected media coverage" mt={4}>
              {cv.press.slice(2).map((story, index) => (
                <Box key={story.href} mt={index ? 5 : 0}>
                  <ItemTitle href={story.href}>
                    {story.title.replace(/^"|"$/g, '')}
                  </ItemTitle>
                  <Details fontSize="sm" mt={2}>
                    {story.details}
                  </Details>
                </Box>
              ))}
            </Reveal>
          </Panel>
          <NextLink href="/press" passHref>
            <Link
              display="inline-flex"
              alignItems="center"
              gap={2}
              color={accent}
              fontSize="15px"
              fontWeight="medium"
              mt={4}
              py={2}
            >
              Explore the press page <ArrowForwardIcon aria-hidden="true" />
            </Link>
          </NextLink>
        </CVSection>
      </Container>
    </Layout>
  )
}
export default CV
