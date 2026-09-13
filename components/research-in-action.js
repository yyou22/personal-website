import {
  Box,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import YouTubePreview from './youtube-preview'

const ResearchVideo = ({ label, title, videoId, children }) => (
  <Box
    as="article"
    display="flex"
    flexDirection="column"
    minW={0}
    overflow="hidden"
    borderRadius="xl"
    borderWidth="1px"
    borderColor={useColorModeValue('day.border', 'whiteAlpha.300')}
    borderTopColor={useColorModeValue('day.strongBorder', 'gray.500')}
    bg={useColorModeValue('day.surface', 'whiteAlpha.50')}
    boxShadow={useColorModeValue('0 4px 18px rgba(36, 51, 68, 0.05)', undefined)}
  >
    <YouTubePreview videoId={videoId} title={title} openInNewTab flexShrink={0} />
    <Box p={5} flex={1}>
      <Text
        mb={2}
        fontSize="xs"
        fontWeight="semibold"
        letterSpacing="0.1em"
        textTransform="uppercase"
        color={useColorModeValue('day.link', 'teal.200')}
      >
        {label}
      </Text>
      <Heading as="h4" fontSize="xl" lineHeight={1.3}>
        <Link href={`https://www.youtube.com/watch?v=${videoId}`} isExternal color="inherit">
          {title}
        </Link>
      </Heading>
      <Text
        mt={3}
        fontSize="sm"
        lineHeight={1.65}
        color={useColorModeValue('day.ink', 'gray.300')}
      >
        {children}
      </Text>
    </Box>
  </Box>
)

const ResearchInAction = () => (
  <Box mt={8} mb={6}>
    <Heading as="h3" variant="section-title" mb={6}>
      Discover My Research in Action
    </Heading>
    <SimpleGrid columns={[1, 1, 2]} gap={3}>
      <ResearchVideo
        label="Adobe Summit Sneaks · 2026"
        title="#ProjectTestKitchen"
        videoId="HPjwlZ6knHg"
      >
        My research on stage at{' '}
        <Link
          href="https://business.adobe.com/summit/adobe-summit.html"
          isExternal
        >
          Adobe Summit
        </Link>
        , presented to thousands of attendees alongside comedian and actor{' '}
        <Link href="https://en.wikipedia.org/wiki/Iliza_Shlesinger" isExternal>
          Iliza Shlesinger
        </Link>
        .
      </ResearchVideo>
      <ResearchVideo
        label="Pixel animation"
        title="My MMath Research"
        videoId="ozoFFEIhW4U"
      >
        A pixel animation I created to share how interactive visualizations help
        explain adversarial attacks on machine learning models.
      </ResearchVideo>
    </SimpleGrid>
  </Box>
)

export default ResearchInAction
