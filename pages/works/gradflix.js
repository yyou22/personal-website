import { Container, Badge, List, ListItem, UnorderedList, Link } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="GRADflix">
    <Container>
      <Title>
        GRADflix <Badge>2023</Badge>
      </Title>
      <P>
        My GRADflix project is a playful 8-bit pixel-style video game, designed to present my research on visualizing adversarial machine learning (AML) in an accessible and creative way. 
        I developed the game using a game engine for the underlying logic and interactivity, and hand-drew all the artwork from scratch using Procreate on my iPad. 
        The game is set to autoplay, and I recorded a playthrough to demonstrate how I combine my programming and design skills to make complex AI concepts more understandable to a wider audience. 
        The goal of this project is to highlight my MMath research and emphasize the value of visualizations in explaining AI safety and AML, making technical topics more engaging and easier to grasp.
      </P>
      <UnorderedList my={4}>
        <Meta>Recognition & Outreach</Meta>
        <ListItem>Selected as a finalist in the 2023 University of Waterloo GRADflix competition.</ListItem>
        <ListItem>
          UWaterloo News: {' '}
          <Link href="https://uwaterloo.ca/current-graduate-students/news/meet-gradflix-finalist-who-combined-art-and-programming" target="_blank" rel="noopener noreferrer">
          Meet the GRADflix finalist who combined art and programming to share her research <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/works/gradflix/gradflix3.png" alt="GRADflix" />
      <WorkImage src="/images/works/gradflix/gradflix.gif" alt="GRADflix" />
      <WorkImage src="/images/works/gradflix/gradflix2.gif" alt="GRADflix" />
      <WorkImage src="/images/works/gradflix/gradflix4.png" alt="GRADflix" />
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ozoFFEIhW4U?si=RkzxvUhTS2XdgQ8O"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: '600px' }}
      ></iframe>
      <UnorderedList my={4}>
        <Meta>Core Features</Meta>
        <ListItem>A 8-bit pixel animation combining art and programming</ListItem>
        <ListItem>Custom game engine scripting and programming for seamless animations and interactions</ListItem>
        <ListItem>Interactive video game elements used to explain adversarial machine learning and XAI visualization research</ListItem>
        <ListItem>Created a fully functional game, set to autoplay and recorded as a screencast</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Pixel Art, Game Development, AI Interpretability, Procreate, Game Engine Programming</span>
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>Adversarial Machine Learning, Visualization, Pixel Art, Game Development, AI Interpretability</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
