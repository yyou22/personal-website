import { Container, Badge, List, ListItem, UnorderedList, Link, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, WorkImage,Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  const linkColor = useColorModeValue('pink.600', 'teal.300')
  const borderColor = useColorModeValue('teal.500', 'teal.600')
  const metaColor = useColorModeValue('green.800', undefined)

  return (
  <Layout title="AdvEx">
    <Container>
      <Title>
        AdvEx <Badge>2024</Badge>
      </Title>
      <P>
        AdvEx is an interactive multi-level visualization system designed to help novice machine learning learners understand adversarial evasion attacks in image classification models. 
        The system visualizes subtle, human-imperceptible perturbations used in attacks and allows users to explore their impact across different classifiers, 
        attack methods, and individual images. 
        By supporting multi-level visual exploration — both instance-level and dataset-level — AdvEx highlights how adversarial attacks affect models differently depending on the data, 
        model architecture, and training methods.
      </P>
      <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Links</Meta>
          </Box>
          <VStack align="stretch" spacing={2} mt={2} pl={2} borderLeftWidth="2px" borderColor={borderColor}>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">Paper: </Text>
              <Link href="https://dl.acm.org/doi/10.1145/3725739" target="_blank" rel="noopener noreferrer" color={linkColor}>
                ACM Digital Library <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">Video figure: </Text>
              <Link href="https://youtu.be/h5JMTz7PoKQ?si=Lw7Ab2-ADXOBKhhU" target="_blank" rel="noopener noreferrer" color={linkColor}>
                Watch on YouTube <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">Video demo: </Text>
              <Link href="https://youtu.be/q9xcfDoCNhs" target="_blank" rel="noopener noreferrer" color={linkColor}>
                Watch on YouTube <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">CPI winner announcement: </Text>
              <Link href="https://uwaterloo.ca/cybersecurity-privacy-institute/news/cpi-congratulates-our-top-3-winners-cpi-annual-conference" target="_blank" rel="noopener noreferrer" color={linkColor}>
                CPI Top 3 Winners <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
          </VStack>
        </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Recognition & Outreach</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Accepted by ACM Transactions on Interactive Intelligent System journal!</ListItem>
          <ListItem>Received 3rd place best poster award (300 CAD) at the 2024 Cybersecurity and Privacy Institute Annual Conference, University of Waterloo.</ListItem>
          <ListItem>Delivered an oral and poster presentation at the 2023 Math and Computing Research Discovery Days, University of Waterloo.</ListItem>
        </UnorderedList>
      </Box>
      <WorkImage src="/images/works/advex/advex1.gif" alt="fgsm" />
      <WorkImage src="/images/works/advex/advex2.gif" alt="fgsm" />
      <WorkImage src="/images/works/advex/advex3.gif" alt="fgsm" />
      <WorkImage src="/images/works/advex/advex5.png" alt="fgsm" />
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/h5JMTz7PoKQ?si=AefDTdUdqGgzbzj1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: '600px' }}
      ></iframe>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Core Features</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Interactive Visualization of Adversarial Evasion Attacks (e.g., FGSM, PGD, ZOO attacks).</ListItem>
          <ListItem>Real-time data analytics and model performance evaluation.</ListItem>
          <ListItem>Illustrates the logic and impact of adversarial attacks through dynamic and interactive visualizations.</ListItem>
        </UnorderedList>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['Python', 'PyTorch', 'scikit-learn', 'Machine Learning', 'Evasion Attacks', 'D3.js', 'JavaScript'].map(item => (
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
          {['HCI', 'Information Visualization', 'Adversarial Machine Learning', 'FGSM', 'PGD', 'Model Robustness'].map(item => (
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
        <Text mt={2}>Yuzhe You, Jarvis Tse, Jian Zhao</Text>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Paper Link</Meta>
        </Box>
        <Text mt={2}>
          <Link href="https://dl.acm.org/doi/10.1145/3725739" target="_blank" rel="noopener noreferrer" color={linkColor}>
            Panda or not Panda? Understanding Adversarial Attacks with Interactive Visualization <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </Box>

    </Container>
  </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
