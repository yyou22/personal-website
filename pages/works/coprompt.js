import { Container, Badge, List, Link, ListItem, UnorderedList, } from '@chakra-ui/react'
import { Title, WorkImage,Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="CoPrompt">
    <Container>
      <Title>
        CoPrompt <Badge>2024</Badge>
      </Title>
      <P>
      CoPrompt is a collaborative prompt engineering tool designed to assist programmers in LLM-driven natural language programming by facilitating seamless collaboration on prompt creation and refinement. 
      It offers four key mechanisms: sharing, referring, linking, and requesting. These features allow programmers to share information effortlessly, modify prompts by referring to others&apos; work, 
      link prompts for automatic updates, and request assistance without interrupting collaborators&apos; workflow. By providing multi-level hierarchical views and contextual prompt information, 
      CoPrompt helps reduce communication barriers and repetitive updates, making collaborative prompt engineering more efficient.
      </P>
      <UnorderedList my={4}>
        <Meta>Recognition & Outreach</Meta>
        <ListItem>
          Accepted and presented at CHI 2024: {' '}
          <Link href="https://dl.acm.org/doi/10.1145/3613904.3642212">
          CoPrompt: Supporting Prompt Sharing and Referring in Collaborative Natural Language Programming <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      {/*<P>
      In a user study with 12 experienced programmers, 
      CoPrompt improved both real-time and asynchronous collaboration by helping users easily understand, build upon, and modify collaborators&apos; prompts. 
      It addressed common challenges like maintaining context, tracking revisions, and managing dependencies, making it an effective tool for streamlining collaborative NL programming workflows.
      </P>*/}
      <WorkImage src="/images/works/coprompt4.jpeg" alt="coprompt" />
      <WorkImage src="/images/works/coprompt1.png" alt="coprompt" />
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/JGnXe_geyY0?si=GSnYmJMhmGsYzT95"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: '600px' }}
      ></iframe>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/BiToRaCrnHg?si=QH4xBRllEmPblA-0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: '600px' }}
      ></iframe>
      <UnorderedList my={4}>
        <Meta>Core Features</Meta>
        <ListItem>Seamless collaboration through sharing, referring, linking, and requesting prompts</ListItem>
        <ListItem>Multi-level hierarchical views for prompt comprehension and modification</ListItem>
        <ListItem>Automated updates of linked prompts, reducing repetitive changes</ListItem>
        <ListItem>Facilitates both real-time and asynchronous collaboration</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Python, PyTorch, scikit-learn, Machine Learning, Evasion Attacks, D3.js, JavaScript, OpenAI API</span>
        </ListItem>
        <ListItem>
          <Meta>Authors</Meta>
          Li Feng, Ryan Yen, Yuzhe You, Mingming Fan, Jian Zhao, Zhicong Lu
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>HCI, Collaborative Programming, Natural Language Programming, Prompt Engineering, Large Language Models (LLMs)</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
