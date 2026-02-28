import { useEffect } from 'react'
import { Container, Badge, ListItem, UnorderedList, Box, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  const metaColor = useColorModeValue('green.800', undefined)

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
          &quot;Exploring Comparative Visual Approaches for Understanding Model Trade-offs in Adversarial Machine Learning&quot;
          is a project that explores effective comparative visual techniques for model trade-off analysis in adversarial machine learning (AML). 
          This work focuses on the need for practitioners to concurrently evaluate the accuracy and robustness of AI models across both standard and adversarial conditions. 
          The project identifies and presents effective visualization techniques for understanding AML trade-offs at different levels of detail.
          Based on insights gathered from an iterative design process, we designed VATRA, a design probe that supports multi-level comparative visualizations and enables machine learning practitioners to analyze trade-offs in adversarial training (AT) methods, which often come at the cost of reduced model accuracy and fairness.
        </P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition & Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Accepted by Graphics Interface 2025 and received Best Paper Award.</ListItem>
          </UnorderedList>
        </Box>
        <WorkImage src="/images/works/vatra/vatra3.png" alt="VATRA" />
        <WorkImage src="/images/works/vatra/vatra4.png" alt="VATRA" />
        <WorkImage src="/images/works/vatra/vatra5.png" alt="VATRA" />
        <WorkImage src="/images/works/vatra/vatra7.gif" alt="VATRA" />
        <WorkImage src="/images/works/vatra/vatra1.gif" alt="VATRA" />
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Exploration of comparative visual designs for model trade-off analysis in standard and adversarial conditions.</ListItem>
            <ListItem>Multi-level comparative visual analytics: from instance-level, embedding-level, to model-level comparisons.</ListItem>
            <ListItem>Empirical insights into design considerations for using comparative visualizations in AML trade-off analysis.</ListItem>
          </UnorderedList>
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
