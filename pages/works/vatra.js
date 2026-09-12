import { useEffect } from 'react'
import { Container, Badge, ListItem, UnorderedList, Box, Text, useColorModeValue, Wrap, WrapItem, Tag, Link, VStack } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  const metaColor = useColorModeValue('day.link', undefined)
  const captionColor = useColorModeValue('day.subtle', 'gray.500')
  const linkColor = useColorModeValue('day.link', 'teal.300')
  const borderColor = useColorModeValue('day.strongBorder', 'teal.600')
  const panelBackground = useColorModeValue('day.surface', undefined)

  useEffect(() => {
    // Load any necessary scripts for external components
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <Layout title="VATRA">
      <Container>
        <Title>
          VATRA <Badge>2025</Badge>
        </Title>
        <P>
          <Link href="https://dl.acm.org/doi/10.1145/3769872.3769899" target="_blank" rel="noopener noreferrer">
            VATRA <ExternalLinkIcon mx="2px" />
          </Link>
          {' '}helps machine learning practitioners compare how models perform on
          ordinary images and images altered by adversarial attacks. Training a
          model to resist attacks can affect its accuracy and how evenly it
          performs across different classes. We developed VATRA through an
          iterative design process to make these trade-offs easier to explore,
          from overall model performance down to individual examples.
        </P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition & Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>
              Accepted to Graphics Interface 2025 and received a Best Paper Award.{' '}
              <Link href="https://uwaterloo.ca/computer-science/news/yuzhe-you-wins-best-student-paper-award-gi-2025-novel" target="_blank" rel="noopener noreferrer">
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
            <ListItem>Compare model performance on ordinary and adversarial images.</ListItem>
            <ListItem>Move between model summaries, embedding views, and individual examples.</ListItem>
            <ListItem>Explore how adversarial training affects accuracy, robustness, and performance across classes.</ListItem>
          </UnorderedList>
        </Box>
        <WorkImage src="/images/works/vatra/vatra3.png" alt="VATRA" />
        <WorkImage src="/images/works/vatra/vatra4.png" alt="VATRA" />
        <WorkImage src="/images/works/vatra/vatra5.png" alt="VATRA" />
        <WorkImage src="/images/works/vatra/vatra7.gif" alt="VATRA" />
        <WorkImage src="/images/works/vatra/vatra1.gif" alt="VATRA" />
        <Box my={4} p={3} borderWidth="1px" borderColor={borderColor} bg={panelBackground} borderRadius="md">
          <Meta>Links</Meta>
          <VStack align="stretch" spacing={2} mt={2}>
            <Box>
              <Link
                href="https://dl.acm.org/doi/10.1145/3769872.3769899"
                target="_blank"
                rel="noopener noreferrer"
                color={linkColor}
                fontWeight="semibold"
              >
                Paper Link <ExternalLinkIcon mx="1px" />
              </Link>
              <Text fontSize="xs" color={captionColor} lineHeight="1.2">
                View on ACM Digital Library.
              </Text>
            </Box>
            <Box>
              <Link
                href="https://uwaterloo.ca/computer-science/news/yuzhe-you-wins-best-student-paper-award-gi-2025-novel"
                target="_blank"
                rel="noopener noreferrer"
                color={linkColor}
                fontWeight="semibold"
              >
                Award News <ExternalLinkIcon mx="1px" />
              </Link>
              <Text fontSize="xs" color={captionColor} lineHeight="1.2">
                Read the Cheriton School of Computer Science news post.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Skills</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['Python', 'PyTorch', 'Grad-CAM', 'Visualization Design', 'Machine Learning', 'Evasion Attacks', 'D3.js', 'JavaScript'].map(item => (
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
            {['Adversarial Machine Learning', 'Adversarial Training', 'Visualization', 'Model Robustness', 'Accuracy-Robustness Trade-offs'].map(item => (
              <WrapItem key={item}>
                <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Authors</Meta>
          </Box>
          <Text mt={2}>Yuzhe You, Jian Zhao</Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
