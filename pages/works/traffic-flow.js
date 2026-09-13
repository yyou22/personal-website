import {
  Container,
  Badge,
  ListItem,
  UnorderedList,
  Link,
  Box,
  VStack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
  Tag
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const project = {
  slug: 'traffic-flow',
  title: 'Real-Time Traffic Turning Flow',
  year: '2026',
  intro:
    'This research investigates forecasting traffic turning movements when little or no local training data is available. It evaluates TimesFM, a decoder-only time-series model, and combines it with Empirical Mode Decomposition and Random Forest to incorporate temporal patterns and external factors.',
  recognition:
    'Published in Artificial Intelligence for Transportation, Volume 5, 2026, article 100046.',
  features: [
    'Forecasting in few-shot and zero-shot settings with limited historical data.',
    'Comparison with Temporal Fusion Transformer, DeepAR, and LSTM.',
    'Evaluation across weather conditions and forecast horizons, including temporal alignment of predictions.'
  ],
  images: [
    {
      src: '/images/works/traffic-flow/study-intersections.png',
      alt: 'Maps of instrumented intersections in the Region of Waterloo on the left and the City of Milton on the right.',
      caption:
        '76 Waterloo intersections for training and testing with limited local data; 36 Milton intersections for testing without local training data.'
    },
    {
      src: '/images/works/traffic-flow/forecasting-architectures.png',
      alt: 'An encoder–decoder forecasting model above a decoder-only model that generates predictions one step at a time.',
      caption:
        'Two forecasting approaches: a separate encoder and decoder (top), and a decoder-only model that predicts each next step directly (bottom).'
    },
    {
      src: '/images/publications/traffic-forecasting.png',
      alt: 'Workflow from traffic data and feature extraction to model training and evaluation.',
      caption:
        'Traffic forecasting workflow, from data preparation to model evaluation.'
    },
    {
      src: '/images/works/traffic-flow/example.png',
      alt: 'Three TimesFM variants: baseline, decomposition, and decomposition with Random Forest covariates.',
      caption:
        'Three TimesFM forecasting variants: baseline, decomposition, and decomposition with Random Forest covariates.'
    }
  ],
  links: [
    { label: 'Paper Link', href: 'https://doi.org/10.1016/j.ait.2026.100046' }
  ],
  keywords: [
    'Intelligent Transportation',
    'Time-Series Forecasting',
    'TimesFM',
    'Few-Shot Learning',
    'Zero-Shot Learning'
  ],
  authors: 'Ce Zhang, Yuzhe You, Guangyuan Pan, Matthew I. Muresan, Liping Fu'
}

const Work = () => {
  const linkColor = useColorModeValue('day.link', 'teal.300')
  const borderColor = useColorModeValue('day.strongBorder', 'teal.600')
  const panelBackground = useColorModeValue('day.surface', undefined)
  const metaColor = useColorModeValue('day.link', undefined)
  return (
    <Layout title={project.title}>
      <Container>
        <Title>
          {project.title} <Badge>{project.year}</Badge>
        </Title>
        <P>{project.intro}</P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition &amp; Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>{project.recognition}</ListItem>
          </UnorderedList>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            {project.features.map(feature => (
              <ListItem key={feature}>{feature}</ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Box display="grid" gap={4}>
          {project.images.map(image => (
            <WorkImage
              key={image.src}
              {...image}
              sidePadding={{ base: 3, md: 5 }}
              verticalPadding={{ base: 3, md: 5 }}
            />
          ))}
        </Box>
        <Box
          my={4}
          p={3}
          borderWidth="1px"
          borderColor={borderColor} bg={panelBackground}
          borderRadius="md"
        >
          <Meta>Links</Meta>
          <VStack align="stretch" spacing={3} mt={2}>
            {project.links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                isExternal
                color={linkColor}
                fontWeight="semibold"
              >
                {link.label} <ExternalLinkIcon mx="1px" />
              </Link>
            ))}
          </VStack>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Keywords</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {project.keywords.map(keyword => (
              <WrapItem key={keyword}>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme="teal"
                  borderRadius="full"
                  px={4}
                  py={1}
                >
                  {keyword}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Authors</Meta>
          </Box>
          <Text mt={2}>{project.authors}</Text>
        </Box>
      </Container>
    </Layout>
  )
}
export default Work
