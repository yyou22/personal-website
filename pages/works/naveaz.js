import { Container, Badge, List, ListItem, UnorderedList, } from '@chakra-ui/react'
import { Title, WorkImage,Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="naveaz">
    <Container>
      <Title>
        NavEaz <Badge>2024</Badge>
      </Title>
      <P>
      NavEaz is an AI-powered smartwatch app designed to enhance driver safety by monitoring and predicting driver impairment in real time. 
      Using advanced machine learning algorithms developed and tested by our team, 
      NavEaz analyzes physiological signals like heart rate and electrodermal activity to detect fatigue, drowsiness, 
      and other impairments with high accuracy. 
      Our smart AI allows NavEaz to predict when a driver is about to lose focus, 
      ensuring that they correct their attention before danger arises.
      </P>
      <br />
      <WorkImage src="/images/works/naveaz1.png" alt="naveaz" />
      <WorkImage src="/images/works/naveaz4.png" alt="naveaz" />
      <WorkImage src="/images/works/naveaz5.png" alt="naveaz" />
      <WorkImage src="/images/works/naveaz2.png" alt="naveaz" />
      <WorkImage src="/images/works/naveaz3.png" alt="naveaz" />
      <WorkImage src="/images/works/naveaz6.png" alt="naveaz" />
      <UnorderedList my={4}>
      <Meta>Core Features</Meta>
      <ListItem>Real-time monitoring and prediction of driver impairment using AI based on physiological signals</ListItem>
      <ListItem>Integration with non-invasive smartwatch sensors for non-intrusive driver assistance</ListItem>
      <ListItem>Generative AI dynamically tailors responses, such as suggesting rest breaks or playing music</ListItem>
    </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Python, Machine Learning, Real-Time Data Analysis, Generative AI, HRV Analysis, Electrodermal Activity Monitoring, Wearable Technology</span>
        </ListItem>
        <ListItem>
          <Meta>Team Members</Meta>
          Yuzhe You, Yubo Jiao, Ce Zhang, Yutong Hu
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>HCI, Driver Safety, Predictive AI, Real-Time Monitoring, Wearable Tech, Generative AI</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
