import { Container, Badge, List, ListItem, UnorderedList, Link,  } from '@chakra-ui/react'
import { Title, WorkImage,Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
      <UnorderedList my={4}>
          <Meta>Links: {' '}</Meta>
          <ListItem>
            Paper Link: {' '}
            <Link href="https://dl.acm.org/doi/10.1145/3725739" target="_blank" rel="noopener noreferrer">
            dl.acm.org/doi/10.1145/3725739 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Video Figure: {' '}
            <Link href="https://youtu.be/h5JMTz7PoKQ?si=Lw7Ab2-ADXOBKhhU" target="_blank" rel="noopener noreferrer">
            Youtube Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            Video Demo: {' '}
            <Link href="https://youtu.be/q9xcfDoCNhs" target="_blank" rel="noopener noreferrer">
            Youtube Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            CPI Winner Announcement: {' '}
            <Link href="https://uwaterloo.ca/cybersecurity-privacy-institute/news/cpi-congratulates-our-top-3-winners-cpi-annual-conference" target="_blank" rel="noopener noreferrer">
            CPI Congratulates our Top 3 Winners in the CPI Annual Conference Poster Competition <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
      </UnorderedList>
      <UnorderedList my={4}>
        <Meta>Recognition & Outreach</Meta>
        <ListItem>
        Accepted by ACM Transactions on Interactive Intelligent System journal!
        </ListItem>
        <ListItem>Received 3rd place best poster award (300 CAD) at the 2024 Cybersecurity and Privacy Institute Annual Conference, University of Waterloo.</ListItem>
        <ListItem>
        Delivered an oral and poster presentation at the 2023 Math and Computing Research Discovery Days, University of Waterloo.
        </ListItem>
      </UnorderedList>
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
      <UnorderedList my={4}>
        <Meta>Core Features</Meta>
        <ListItem>Interactive Visualization of Adversarial Evasion Attacks (e.g., FGSM, PGD, ZOO attacks)</ListItem>
        <ListItem>Real-time data analytics and model performance evaluation</ListItem>
        <ListItem>Illustrates the logic and impact of adversarial attacks through dynamic and interactive visualizations</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Python, PyTorch, scikit-learn, Machine Learning, Evasion Attacks, D3.js, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Team Members</Meta>
          Yuzhe You, Jarvis Tse, Jian Zhao
        </ListItem>
        <ListItem>
          <Meta>Paper Link</Meta>
          <Link href="https://dl.acm.org/doi/10.1145/3725739" target="_blank" rel="noopener noreferrer">
          Panda or not Panda? Understanding Adversarial Attacks with Interactive Visualization <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>HCI, Information Visualization, Adversarial Machine Learning, FGSM, PGD, Model Robustness</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
