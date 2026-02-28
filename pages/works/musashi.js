import { useEffect } from 'react'
import { Container, Badge, List, Link, ListItem, UnorderedList, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
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
          Developed during the Fall 2022 Waterloo.AI Data Challenge sponsored by Musashi AI, this project focuses on detecting human presence in fisheye top-down surveillance footage for workplace monitoring. 
          The goal of the project is to accurately identify humans within predefined regions of interest (ROIs) using ensemble machine learning techniques tailored for complex environments captured through fisheye cameras. 
        </P>
        <P>
          Our solution uses a combination of pre-trained Convolutional Neural Networks (CNNs), specifically ResNet-101 for robust feature extraction, and unsupervised clustering methods like k-Means to segment and detect human figures. 
          This ensemble approach achieves efficient detection and monitoring in dynamic workplace environments, leading to both accuracy and computational efficiency.
        </P>
        <UnorderedList my={4}>
        <Meta>Recognition & Outreach</Meta>
        <ListItem>
          2nd Place Winner in Waterloo.AI Data Challenge (1,000 CAD Award)
        </ListItem>
        </UnorderedList>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Links</Meta>
          </Box>
          <VStack align="stretch" spacing={2} mt={2} pl={2} borderLeftWidth="2px" borderColor={borderColor}>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">UWaterloo SCS News: </Text>
              <Link href="https://cs.uwaterloo.ca/news/cheriton-students-among-winners-at-waterloo-ai-data-challenge" target="_blank" rel="noopener noreferrer" color={linkColor}>
                Cheriton students among winners at Waterloo.AI Data Challenge <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">Waterloo.AI News: </Text>
              <Link href="https://uwaterloo.ca/artificial-intelligence-institute/news/cheriton-school-computer-science-undergrads-and-grads-among" target="_blank" rel="noopener noreferrer" color={linkColor}>
                Cheriton undergrads and grads among winners <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
          </VStack>
        </Box>
        <WorkImage src="/images/works/musashi/musashi5.png" alt="musashi" />
        <WorkImage src="/images/works/musashi/musashi3.jpeg" alt="musashi" />
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Utilizes pre-trained ResNet-101 to extract features from image data.</ListItem>
            <ListItem>Applies k-Means clustering to group data points and identify human figures in the ROIs.</ListItem>
            <ListItem>Explores multiple approaches including CNN fine-tuning and linear classifiers to improve detection accuracy.</ListItem>
          </UnorderedList>
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
