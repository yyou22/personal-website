import { Container, Badge, List, ListItem, UnorderedList, } from '@chakra-ui/react'
import { Title, WorkImage,Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
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
      <br />
      <WorkImage src="/images/works/advex4.png" alt="fgsm" />
      <WorkImage src="/images/works/advex2.png" alt="fgsm" />
      <WorkImage src="/images/works/advex3.png" alt="fgsm" />
      <UnorderedList my={4}>
        <Meta>Core Features</Meta>
        <ListItem>Interactive Visualization of Adversarial Evasion Attacks (e.g., FGSM, PGD, ZOO attacks)</ListItem>
        <ListItem>Real-time data analytics and model performance evaluation</ListItem>
        <ListItem>Illustrates the logic and impact of adversarial attacks through dynamic and interactive visualizations</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Python, PyTorch, scikit-learn, Machine Learning, Evasion Attacks, D3.js, JavaScript, HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Team Members</Meta>
          Yuzhe You, Jarvis Tse, Jian Zhao
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>HCI, Information Visualization, Adversarial Machine Learning, FGSM, PGD, Model Robustness, HTML, CSS</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
