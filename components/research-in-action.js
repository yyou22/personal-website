import {
  AspectRatio,
  Box,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const ResearchVideo = ({ label, title, videoId, children }) => (
  <Box
    as="article"
    display="flex"
    flexDirection="column"
    minW={0}
    overflow="hidden"
    borderRadius="xl"
    borderWidth="1px"
    borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.50')}
  >
    <AspectRatio ratio={16 / 9} flexShrink={0}>
      <Box
        as="iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        border={0}
        bg="blackAlpha.500"
      />
    </AspectRatio>
    <Box p={5} flex={1}>
      <Text
        mb={2}
        fontSize="xs"
        fontWeight="semibold"
        letterSpacing="0.1em"
        textTransform="uppercase"
        color={useColorModeValue('teal.700', 'teal.200')}
      >
        {label}
      </Text>
      <Heading as="h4" fontSize="xl" lineHeight={1.3}>
        {title}
      </Heading>
      <Text
        mt={3}
        fontSize="sm"
        lineHeight={1.65}
        color={useColorModeValue('gray.700', 'gray.300')}
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
