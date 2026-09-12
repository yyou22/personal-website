import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaTrophy } from 'react-icons/fa'
import Layout from './layouts/article'
import { publications } from '../lib/publications'
import PreviewImage from './preview-image'

const years = [...new Set(publications.map(paper => paper.year))].sort((a, b) => b - a)
const publicationTypes = { J: 'Journal', C: 'Conference', W: 'Workshop' }

const eyebrow = {
  fontSize: '11px',
  fontWeight: 'semibold',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  lineHeight: 1.5
}

const Authors = ({ authors }) => {
  const foreground = useColorModeValue('day.ink', 'gray.100')
  return authors.replace(/\.$/, '').split(/(Yuzhe You)/).map((part, index) =>
    part === 'Yuzhe You' ? (
      <Text as="strong" key={index} fontWeight="semibold" color={foreground}>
        {part}
      </Text>
    ) : part
  )
}

const Publication = ({ paper }) => {
  const muted = useColorModeValue('day.muted', 'gray.400')
  const subtle = useColorModeValue('day.subtle', 'gray.500')
  const accent = useColorModeValue('day.link', '#86b8cc')
  const titleColor = useColorModeValue('day.title', '#9bbbd4')
  const border = useColorModeValue('day.border', 'whiteAlpha.200')
  const imageBackground = useColorModeValue('day.tint', 'whiteAlpha.100')
  const hoverBackground = useColorModeValue('day.surface', 'whiteAlpha.50')
  const awardColor = useColorModeValue('day.gold', 'orange.200')
  const awardBackground = useColorModeValue('day.goldBackground', 'whiteAlpha.100')

  return (
    <LinkBox
      as="article"
      role="group"
      display="grid"
      gridTemplateColumns={{ base: 'minmax(0, 1fr) 88px', sm: '168px minmax(0, 1fr)' }}
      columnGap={{ base: 3, sm: 5 }}
      py={4}
      px={{ base: 0, md: 4 }}
      mx={{ base: 0, md: -4 }}
      borderRadius="xl"
      transition="background 0.2s"
      _hover={{ bg: { md: hoverBackground } }}
    >
      <Box gridColumn={{ base: 2, sm: 1 }} gridRow={1} alignSelf="start" mt={1}>
        <AspectRatio
          ratio={8 / 5}
          bg={imageBackground}
          borderRadius="md"
          overflow="hidden"
          borderWidth="1px"
          borderColor={border}
        >
          <PreviewImage
            src={paper.image}
            alt=""
            loading="lazy"
            sizes="(max-width: 480px) 88px, 168px"
            objectFit="cover"
            objectPosition={paper.position}
            transition="transform 0.35s ease"
            _groupHover={{ transform: 'scale(1.04)' }}
          />
        </AspectRatio>
      </Box>

      <Box minW={0} gridColumn={{ base: 1, sm: 2 }} gridRow={1}>
        <Text {...eyebrow} color={accent}>
          <Text
            as="span"
            fontFamily="mono"
            color={subtle}
            title={`${publicationTypes[paper.citationId[0]]} ${paper.citationId.slice(1)}`}
          >
            {paper.citationId}
          </Text>
          <Text as="span" color={subtle} mx={2} aria-hidden="true">/</Text>
          {paper.label}
        </Text>

        <Heading as="h4" fontSize="md" fontWeight="semibold" lineHeight={1.45} mt={1.5}>
          <LinkOverlay
            href={paper.href}
            isExternal
            color={titleColor}
            _groupHover={{ textDecoration: 'underline' }}
            _focusVisible={{ outline: '2px solid', outlineColor: accent, outlineOffset: '4px' }}
          >
            {/* Keep the icon attached to the last word so it never wraps alone */}
            {paper.title.replace(/\.$/, '').replace(/\S+$/, '')}
            <Text as="span" whiteSpace="nowrap">
              {paper.title.replace(/\.$/, '').match(/\S+$/)[0]}
              <ExternalLinkIcon ml={1.5} boxSize={3} mb="2px" aria-hidden="true" />
            </Text>
          </LinkOverlay>
        </Heading>

        <Text fontSize="sm" lineHeight={1.6} color={muted} mt={2}>
          <Authors authors={paper.authors} />
        </Text>
        <Text fontSize="xs" fontStyle="italic" lineHeight={1.55} color={subtle} mt={1}>
          {paper.venue.replace(/\.$/, '')}
        </Text>

        {paper.award && (
          <Text
            display="inline-flex"
            alignItems="center"
            gap={1.5}
            mt={3}
            px={2}
            py={0.5}
            borderRadius="sm"
            bg={awardBackground}
            color={awardColor}
            fontSize="xs"
            fontWeight="semibold"
          >
            <Icon as={FaTrophy} boxSize={3} aria-hidden="true" />
            {paper.award}
          </Text>
        )}
      </Box>
    </LinkBox>
  )
}

const PublicationsPage = () => {
  const muted = useColorModeValue('day.muted', 'gray.400')
  const accent = useColorModeValue('day.link', '#86b8cc')
  const border = useColorModeValue('day.border', 'whiteAlpha.200')
  const yearBorder = useColorModeValue('day.strongBorder', 'whiteAlpha.300')

  return (
    <Layout title="Publications">
      <Container
        maxW="container.md"
        px={{ base: 0, md: 2 }}
        pt={{ base: 7, md: 10 }}
        pb={8}
        overflowWrap="anywhere"
      >
        <Box mb={2} pb={5} borderBottomWidth="1px" borderColor={border}>
          <Heading as="h2" fontSize="2xl" letterSpacing="tight" mb={2}>Publications</Heading>
          <Text fontSize="md" lineHeight={1.6} color={muted}>
            Research in human–AI interaction, creative tools, explainable AI, and intelligent transportation.
          </Text>
        </Box>

        {years.map((year, index) => (
          <Box
            as="section"
            aria-labelledby={`publications-${year}`}
            key={year}
            display="grid"
            gridTemplateColumns={{ base: 'minmax(0, 1fr)', md: '72px minmax(0, 1fr)' }}
            gap={{ base: 1, md: 6 }}
            mt={6}
            pt={index > 0 ? 6 : 0}
            borderTopWidth={index > 0 ? '1px' : 0}
            borderColor={yearBorder}
          >
            <Heading
              as="h3"
              id={`publications-${year}`}
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
              letterSpacing="tight"
              lineHeight={1}
              color={accent}
              pt={{ base: 2, md: 5 }}
              position={{ md: 'sticky' }}
              top={{ md: 20 }}
              alignSelf="start"
            >
              {year}
            </Heading>
            <Box minW={0}>
              {publications.filter(paper => paper.year === year).map(paper => (
                <Publication paper={paper} key={paper.href} />
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Layout>
  )
}

export default PublicationsPage
