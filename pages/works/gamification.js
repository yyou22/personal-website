import { useEffect } from 'react'
import { Container, Badge, List, ListItem, UnorderedList, Link } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
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
        <Link href="https://arxiv.org/abs/2410.04035" target="_blank" rel="noopener noreferrer">
          &quot;Gamifying XAI: Enhancing AI Explainability for Non-technical Users through LLM-Powered Narrative Gamifications&quot; <ExternalLinkIcon mx="2px" />
        </Link> is a  
          project that explores how gamification and narrative-driven interactions, powered by Large Language Models (LLMs), can enhance AI explainability for non-technical users. 
          The study focuses on integrating LLMs into Explainable AI (XAI) visualization technique, aiming to improve XAI visualizations&apos; meaningfulness and relatedness for non-technical users. 
          Our prototype introduces LLM-driven conversational NPCs that guide users through complex AI concepts and XAI visual encodings, helping them understand things like model prediction process and decision boundaries in a more intuitive way.
        </P>
        <UnorderedList my={4}>
          <Meta>Links: {' '}</Meta>
          <ListItem>
            Video Figure: {' '}
            <Link href="https://youtu.be/yDacHXX2EZw?si=c3jDQXC-u17YAjWz" target="_blank" rel="noopener noreferrer">
            Youtube Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Video Demo: {' '}
            <Link href="https://youtu.be/P4zJqP6N1Fw" target="_blank" rel="noopener noreferrer">
            Youtube Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
        <UnorderedList my={4}>
        <Meta>Recognition & Outreach</Meta>
        <ListItem>
        Accepted by CHI&apos;25 as a LBW paper!
        </ListItem>
      </UnorderedList>
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
        <UnorderedList my={4}>
          <Meta>Core Features</Meta>
          <ListItem>Introduces gamification elements into XAI visualizations, specifically focusing on improving non-technical user understanding.</ListItem>
          <ListItem>Integrates Large Language Models (LLMs) to create narrative-driven NPCs that explain AI models and visualizations.</ListItem>
          <ListItem>Explores interactive t-SNE projections to allow users to explore model embeddings and understand AI decision-making processes.</ListItem>
          <ListItem>Produces design implications of LLM-driven gamification in improving explainability and reducing cognitive load for non-technical AI users.</ListItem>
        </UnorderedList>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Skills</Meta>
            <span>Python, t-SNE, XAI Visualization, Large Language Models (LLMs), Gamification, AI Explainability, OpenAI API, Javascript, D3.js</span>
          </ListItem>
          <ListItem>
            <Meta>Authors</Meta>
            Yuzhe You, Jian Zhao
          </ListItem>
          <ListItem>
          <Meta>Paper Link</Meta>
          <Link href="https://arxiv.org/abs/2410.04035" target="_blank" rel="noopener noreferrer">
          Gamifying XAI: Enhancing AI Explainability for Non-technical Users through LLM-Powered Narrative Gamifications <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
          <ListItem>
            <Meta>Keywords</Meta>
            <span>Human-Computer Interaction, Information Visualization, Explainable AI, Gamification, t-SNE, Large Language Models, XAI Visualization</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
