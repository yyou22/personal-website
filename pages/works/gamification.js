import { useEffect } from 'react'
import { Container, Badge, ListItem, UnorderedList, Link, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
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
    <Layout title="Gamifying XAI">
      <Container>
        <Title>
          XAI Gamification <Badge>2024</Badge>
        </Title>
        <P>
        <Link href="https://dl.acm.org/doi/10.1145/3706599.3719795" target="_blank" rel="noopener noreferrer">
          &quot;Enhancing AI Explainability for Non-technical Users with LLM-Driven Narrative Gamification&quot; <ExternalLinkIcon mx="2px" />
        </Link> is a  
          project that explores how gamification and narrative-driven interactions, powered by Large Language Models (LLMs), can enhance AI explainability for non-technical users. 
          The study focuses on integrating LLMs into Explainable AI (XAI) visualization technique with the goal to improve XAI visualizations&apos; meaningfulness and relatedness for non-technical users. 
          Our prototype introduces LLM-driven conversational NPCs that guide users through complex AI concepts and XAI visual encodings, helping them understand things like model prediction process and decision boundaries in a more intuitive way.
        </P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Links</Meta>
          </Box>
          <VStack align="stretch" spacing={2} mt={2} pl={2} borderLeftWidth="2px" borderColor={borderColor}>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">Paper: </Text>
              <Link href="https://dl.acm.org/doi/10.1145/3706599.3719795" target="_blank" rel="noopener noreferrer" color={linkColor}>
                Enhancing AI Explainability for Non-technical Users with LLM-Driven Narrative Gamification (ACM Digital Library) <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">Video figure: </Text>
              <Link href="https://youtu.be/yDacHXX2EZw?si=c3jDQXC-u17YAjWz" target="_blank" rel="noopener noreferrer" color={linkColor}>
                Watch on YouTube <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">Video demo: </Text>
              <Link href="https://youtu.be/P4zJqP6N1Fw" target="_blank" rel="noopener noreferrer" color={linkColor}>
                Watch on YouTube <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
          </VStack>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition & Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Accepted by CHI&apos;25 as a LBW paper!</ListItem>
          </UnorderedList>
        </Box>
        <WorkImage src="/images/works/gamification/gamification1.gif" alt="gamification" />
        {/*<WorkImage src="/images/works/gamification/gamification6.gif" alt="gamification" />*/}
        <WorkImage src="/images/works/gamification/gamification5.gif" alt="gamification" />
        <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/yDacHXX2EZw?si=OsEBJtQn2HiHWoG0"
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
            <ListItem>Introduces gamification elements into XAI visualizations, specifically focusing on improving non-technical user understanding.</ListItem>
            <ListItem>Integrates Large Language Models (LLMs) to create narrative-driven NPCs that explain AI models and visualizations.</ListItem>
            <ListItem>Explores interactive t-SNE projections to allow users to explore model embeddings and understand AI decision-making processes.</ListItem>
            <ListItem>Produces design implications of LLM-driven gamification in improving explainability and reducing cognitive load for non-technical AI users.</ListItem>
          </UnorderedList>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Skills</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['Python', 't-SNE', 'XAI Visualization', 'Large Language Models (LLMs)', 'Gamification', 'AI Explainability', 'OpenAI API', 'Javascript', 'D3.js'].map(item => (
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
            {['Human-Computer Interaction', 'Information Visualization', 'Explainable AI', 'Gamification', 't-SNE', 'Large Language Models', 'XAI Visualization'].map(item => (
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
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Paper Link</Meta>
          </Box>
          <Text mt={2}>
            <Link href="https://dl.acm.org/doi/10.1145/3706599.3719795" target="_blank" rel="noopener noreferrer" color={linkColor}>
              Enhancing AI Explainability for Non-technical Users with LLM-Driven Narrative Gamification <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
