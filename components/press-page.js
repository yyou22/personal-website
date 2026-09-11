import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon, LockIcon } from '@chakra-ui/icons'
import { IoNewspaperOutline } from 'react-icons/io5'
import Layout from './layouts/article'
import { pressArticles } from '../lib/press'

const sourceNames = {
  'Cheriton School of Computer Science, University of Waterloo': 'Waterloo Computer Science',
  'Faculty of Mathematics, University of Waterloo': 'Waterloo Mathematics',
  'Math e-Ties, University of Waterloo': 'Waterloo · Math e-Ties',
  'Cybersecurity and Privacy Institute, University of Waterloo': 'Waterloo · Cybersecurity & Privacy Institute',
  'Graduate Studies and Postdoctoral Affairs, University of Waterloo': 'Waterloo · Graduate Studies'
}

const selectedStories = [
  pressArticles.find(article => article.href?.endsWith('/adobe-research-intern-follows-her-mentors-footsteps/')),
  pressArticles.find(article => article.href?.includes('watch?v=WIrwwJNthxc')),
  pressArticles.find(article => article.href?.endsWith('/yuzhe-you-cooks-storm-adobe-summit-2026')),
  pressArticles.find(article => article.href?.endsWith('/yuzhe-you-wins-best-student-paper-award-gi-2025-novel'))
]

const PressImage = ({ article, selected = false }) => {
  const background = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const foreground = useColorModeValue('gray.500', 'gray.400')

  return (
    <AspectRatio ratio={4 / 3} w="full" bg={background} borderRadius="md" overflow="hidden">
      <Image
        src={article.image}
        alt=""
        loading={selected ? 'eager' : 'lazy'}
        objectFit="cover"
        objectPosition={article.title === 'Gamifying AI' ? 'center 70%' : 'center'}
        fallback={
          <Box display="flex" alignItems="center" justifyContent="center" bg={background} color={foreground}>
            <Icon as={IoNewspaperOutline} boxSize={6} aria-hidden="true" />
          </Box>
        }
      />
    </AspectRatio>
  )
}

const SourceLine = ({ article }) => {
  const muted = useColorModeValue('gray.600', 'gray.400')
  const foreground = useColorModeValue('gray.800', 'gray.100')
  const isWaterloo = article.publisher.includes('University of Waterloo')
  const isAdobe = article.publisher.includes('Adobe')
  const publication = isWaterloo ? 'University of Waterloo' : article.publisher
  const desk = isWaterloo ? sourceNames[article.publisher].replace(/^Waterloo(?: ·)? /, '') : null

  return (
    <Box display="flex" alignItems="center" gap={2.5}>
      {isWaterloo || isAdobe ? (
        <Image src={isWaterloo ? '/images/uwaterloo.png' : '/images/adobe2.png'} alt="" boxSize="22px" objectFit="contain" flexShrink={0} clipPath={isAdobe ? 'inset(0 2% 0 0)' : undefined} />
      ) : (
        <Icon as={IoNewspaperOutline} boxSize="22px" color={muted} flexShrink={0} aria-hidden="true" />
      )}
      <Box minW={0}>
        <Text fontSize="sm" fontWeight="semibold" color={foreground} title={article.publisher} lineHeight={1.4}>
          {publication}
        </Text>
        <Text fontSize="xs" color={muted} lineHeight={1.5}>
          {desk && <>{desk} · </>}{article.date}
        </Text>
      </Box>
    </Box>
  )
}

const CoverageCue = ({ article, color }) => {
  const defaultColor = useColorModeValue('#406b7c', '#86b8cc')
  return (
  <Text fontSize="xs" fontWeight="medium" mt={3} color={color || defaultColor}>
    {article.interviewStart ? `Watch interview · ${article.interviewStart}` : article.href.includes('youtube.com') ? 'Watch coverage' : 'Read coverage'}
    <ExternalLinkIcon ml={1.5} boxSize={3} aria-hidden="true" />
  </Text>
  )
}

export const SelectedStory = ({ article, compact = false, summary = article.snippet }) => {
  const muted = useColorModeValue('gray.600', 'gray.300')
  const accent = useColorModeValue('#406b7c', '#709faf')
  const titleColor = useColorModeValue('#426b89', '#9bbbd4')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const topBorder = useColorModeValue('gray.400', 'gray.500')
  const background = useColorModeValue(
    'linear-gradient(145deg, #ffffff, #f7f7f7)',
    'linear-gradient(145deg, #333333, #292929)'
  )
  const shadow = useColorModeValue('0 8px 24px rgba(0, 0, 0, 0.06)', '0 8px 24px rgba(0, 0, 0, 0.2)')

  return (
    <LinkBox
      as="article"
      minW={0}
      role="group"
      display={{ base: 'flex', md: 'grid' }}
      flexDirection="column"
      gridTemplateRows={{ md: 'subgrid' }}
      gridRow={{ md: 'span 4' }}
      rowGap={0}
      borderWidth="1px"
      borderColor={border}
      borderTopWidth={compact ? '1px' : '3px'}
      borderTopColor={topBorder}
      borderRadius="lg"
      bgImage={background}
      boxShadow={compact ? 'sm' : shadow}
      p={compact ? 4 : { base: 4, md: 5 }}
      transition="border-color 0.2s, box-shadow 0.2s"
      _hover={{ borderColor: accent, boxShadow: '0 10px 28px rgba(0, 0, 0, 0.18)' }}
      _focusWithin={{ borderColor: accent }}
    >
      <Box pb={compact ? 2 : 3} borderBottomWidth="1px" borderColor={border}>
        <SourceLine article={article} />
      </Box>
        <Heading as="h4" fontSize={compact ? 'md' : 'lg'} lineHeight={1.45} mt={compact ? 3 : 4}>
          <LinkOverlay
            href={article.href}
            aria-label={article.title}
            isExternal
            color={titleColor}
            _groupHover={{ textDecoration: 'underline' }}
            _focusVisible={{ outline: '2px solid', outlineColor: accent, outlineOffset: '4px' }}
            transition="color 0.2s"
          >
            {article.title}
          </LinkOverlay>
        </Heading>
      <Box display={compact ? 'flex' : 'flow-root'} gap={compact ? 3 : undefined} alignItems="start" mt={3}>
        <Box
          float={compact ? undefined : 'right'}
          w={compact ? '112px' : { base: '104px', md: '120px' }}
          flexShrink={0}
          ml={compact ? 0 : 3}
          mb={compact ? 0 : 2}
        >
          <PressImage article={article} selected />
        </Box>
        <Text fontSize="sm" lineHeight={compact ? 1.5 : 1.65} color={muted}>{summary}</Text>
      </Box>
      <Box mt="auto" pt={compact ? 0 : 4}>
        <Box borderTopWidth={compact ? 0 : '1px'} borderColor={border}><CoverageCue article={article} color={accent} /></Box>
      </Box>
    </LinkBox>
  )
}

const PressStory = ({ article }) => {
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const accent = useColorModeValue('#406b7c', '#86b8cc')

  return (
    <LinkBox
      as="article"
      display="grid"
      gridTemplateColumns={{ base: 'minmax(0, 1fr) 88px', sm: 'minmax(0, 1fr) 128px' }}
      columnGap={{ base: 3, sm: 5 }}
      rowGap={2}
      py={5}
      borderBottomWidth="1px"
      borderColor={border}
      role="group"
      _first={{ pt: 0 }}
      _last={{ borderBottomWidth: 0, pb: 0 }}
    >
      <Box minW={0}>
        <SourceLine article={article} />
      </Box>
      <Box minW={0} gridColumn={{ base: '1 / -1', sm: '1' }}>
        <Heading as="h4" fontSize="md" lineHeight={1.5} fontWeight="semibold">
          {article.href ? (
            <LinkOverlay
              href={article.href}
              isExternal
              color={accent}
              _groupHover={{ textDecoration: 'underline' }}
              _focusVisible={{ outline: '2px solid', outlineColor: accent, outlineOffset: '4px' }}
              transition="color 0.2s"
            >
              {article.title} <ExternalLinkIcon boxSize={3} aria-hidden="true" />
            </LinkOverlay>
          ) : article.title}
        </Heading>
        {!article.href && (
          <Text fontSize="xs" color={muted} mt={2}>
            <LockIcon boxSize={2.5} mr={1} aria-hidden="true" /> Adobe internal feature
          </Text>
        )}
      </Box>
      <Box alignSelf="start" mt={1} gridRow={{ base: '1', sm: '1 / 4' }} gridColumn={2}>
        <PressImage article={article} />
      </Box>
      <Box gridColumn={{ base: '1 / -1', sm: '1' }}>
        <Text fontSize="sm" lineHeight={1.65} color={muted}>{article.snippet}</Text>
        {article.href && <CoverageCue article={article} />}
      </Box>
    </LinkBox>
  )
}

const CoverageGroup = ({ title, description, articles, id }) => {
  const accent = useColorModeValue('#406b7c', '#86b8cc')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const yearBorder = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
  const years = [...new Set(articles.map(article => article.date.slice(-4)))]
    .sort((a, b) => Number(b) - Number(a))

  return (
    <Box as="section" aria-labelledby={id} mt={{ base: 9, md: 10 }}>
      <Box pb={4} borderBottomWidth="1px" borderColor={border}>
        <Heading as="h3" id={id} fontSize="lg" fontWeight="semibold">{title}</Heading>
        {description && <Text fontSize="sm" color={muted} lineHeight={1.65} mt={2}>{description}</Text>}
      </Box>
      {years.map((year, index) => (
        <Box
          key={year}
          display="grid"
          gridTemplateColumns={{ base: 'minmax(0, 1fr)', md: '48px minmax(0, 1fr)' }}
          gap={{ base: 4, md: 6 }}
          mt={6}
          pt={index > 0 ? 6 : 0}
          borderTopWidth={index > 0 ? '1px' : 0}
          borderColor={yearBorder}
        >
          <Heading as="h4" fontSize="sm" lineHeight={1.5} fontWeight="medium" color={accent}>{year}</Heading>
          <Box minW={0}>
            {articles.filter(article => article.date.endsWith(year)).map(article => (
              <PressStory article={article} key={article.title} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

const PressPage = () => {
  const muted = useColorModeValue('gray.600', 'gray.400')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Layout title="Press">
      <Container maxW="container.md" px={{ base: 0, md: 2 }} pt={{ base: 7, md: 10 }} pb={8} overflowWrap="anywhere" isolation="isolate">
        <Box mb={6} pb={5} borderBottomWidth="1px" borderColor={border}>
          <Heading as="h2" fontSize="2xl" letterSpacing="tight" mb={2}>Press</Heading>
          <Text fontSize="md" lineHeight={1.6} color={muted}>
            Media coverage and university news featuring my research and collaborations.
          </Text>
        </Box>
        <Box as="section" aria-labelledby="featured-coverage">
          <Heading as="h3" id="featured-coverage" fontSize="sm" fontWeight="semibold" mb={4}>Featured coverage</Heading>
          <Box display="grid" gridTemplateColumns={{ base: 'minmax(0, 1fr)', md: 'repeat(2, minmax(0, 1fr))' }} gap={{ base: 4, md: 5 }}>
            {selectedStories.map(article => <SelectedStory article={article} key={article.title} />)}
          </Box>
        </Box>
        <CoverageGroup
          id="profiles-and-recognition"
          title="Profiles & recognition"
          articles={pressArticles.filter(article => article.category === 'profile' && !selectedStories.includes(article))}
        />
        <CoverageGroup
          id="project-coverage"
          title="Project coverage"
          description={<>Coverage of <Link href="https://www.youtube.com/watch?v=HPjwlZ6knHg" isExternal>Project Test Kitchen</Link> at Adobe Summit Sneaks 2026.</>}
          articles={pressArticles.filter(article => article.category === 'project')}
        />
      </Container>
    </Layout>
  )
}

export default PressPage
