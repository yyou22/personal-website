import { useEffect } from 'react'
import { Container, Badge, Link, ListItem, UnorderedList, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  const linkColor = useColorModeValue('pink.600', 'teal.300')
  const borderColor = useColorModeValue('teal.500', 'teal.600')
  const metaColor = useColorModeValue('green.800', undefined)

  useEffect(() => {
    // Load any necessary scripts for external components
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <Layout title="Waterloo.AI Challenge">
      <Container>
        <Title>
        Waterloo.AI Challenge <Badge>2022</Badge>
        </Title>
        <P>
          Our team developed this project for the Fall 2022 Waterloo.AI Data
          Challenge, sponsored by Musashi AI. The task was to detect people in
          selected areas of overhead fisheye camera footage. We explored how
          machine learning could handle the distorted views these cameras
          produce in workplace settings.
        </P>
        <P>
          Our approach combines a pretrained ResNet-101 model for extracting
          image features with k-means clustering to help identify people. We
          also explored fine-tuning and linear classifiers as alternative ways
          to approach the detection task.
        </P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition & Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>
              Received second place in the Waterloo.AI Data Challenge (1,000 CAD).{' '}
              <Link href="https://cs.uwaterloo.ca/news/cheriton-students-among-winners-at-waterloo-ai-data-challenge" target="_blank" rel="noopener noreferrer">
                Read the University of Waterloo feature <ExternalLinkIcon mx="2px" />
              </Link>
              .
            </ListItem>
          </UnorderedList>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Extract image features with a pretrained ResNet-101 model.</ListItem>
            <ListItem>Use k-means clustering to help identify people within selected regions.</ListItem>
            <ListItem>Compare approaches including CNN fine-tuning and linear classifiers.</ListItem>
          </UnorderedList>
        </Box>
        <WorkImage src="/images/works/musashi/musashi5.png" alt="musashi" />
        <WorkImage src="/images/works/musashi/musashi3.jpeg" alt="musashi" />
        <Box my={4} p={3} borderWidth="1px" borderColor={borderColor} borderRadius="md">
          <Meta>Links</Meta>
          <VStack align="stretch" spacing={2} mt={2}>
            <Box>
              <Link
                href="https://cs.uwaterloo.ca/news/cheriton-students-among-winners-at-waterloo-ai-data-challenge"
                target="_blank"
                rel="noopener noreferrer"
                color={linkColor}
                fontWeight="semibold"
              >
                UWaterloo SCS News <ExternalLinkIcon mx="1px" />
              </Link>
              <Text fontSize="xs" color="gray.500" lineHeight="1.2">
                Cheriton students among winners at Waterloo.AI Data Challenge.
              </Text>
            </Box>
            <Box>
              <Link
                href="https://uwaterloo.ca/artificial-intelligence-institute/news/cheriton-school-computer-science-undergrads-and-grads-among"
                target="_blank"
                rel="noopener noreferrer"
                color={linkColor}
                fontWeight="semibold"
              >
                Waterloo.AI News <ExternalLinkIcon mx="1px" />
              </Link>
              <Text fontSize="xs" color="gray.500" lineHeight="1.2">
                Cheriton undergrads and grads among winners.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Skills</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['ResNet-101', 'k-Means Clustering', 'CNN Fine-tuning', 'Image Processing', 'Model Training'].map(item => (
              <WrapItem key={item}>
                <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Keywords</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['Computer Vision', 'Human Detection', 'ResNet-101', 'Clustering', 'Image Processing', 'ROI Detection'].map(item => (
              <WrapItem key={item}>
                <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Team Members</Meta>
          </Box>
          <Text mt={2}>Yuzhe You, Mohammad Zarei, Ce Zhang</Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
