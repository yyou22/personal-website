import { useEffect } from 'react'
import { Container, Badge, List, Link, ListItem, UnorderedList } from '@chakra-ui/react'
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
        <ListItem>
          UWaterloo SCS News: {' '}
          <Link href="https://cs.uwaterloo.ca/news/cheriton-students-among-winners-at-waterloo-ai-data-challenge">
          Cheriton School of Computer Science undergrads and grads among winners at Waterloo.AI’s Data Challenge <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          Waterloo.AI News: {' '}
          <Link href="https://uwaterloo.ca/artificial-intelligence-institute/news/cheriton-school-computer-science-undergrads-and-grads-among">
          Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        </UnorderedList>
        <WorkImage src="/images/works/musashi/musashi5.png" alt="musashi" />
        <WorkImage src="/images/works/musashi/musashi3.jpeg" alt="musashi" />
        <UnorderedList my={4}>
          <Meta>Core Features</Meta>
          <ListItem>Utilizes pre-trained ResNet-101 to extract features from image data.</ListItem>
          <ListItem>Applies k-Means clustering to group data points and identify human figures in the ROIs.</ListItem>
          <ListItem>Explores multiple approaches including CNN fine-tuning and linear classifiers to improve detection accuracy.</ListItem>
        </UnorderedList>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Skills</Meta>
            <span>ResNet-101, k-Means Clustering, CNN Fine-tuning, Image Processing, Model Training</span>
          </ListItem>
          <ListItem>
            <Meta>Team Members</Meta>
            Yuzhe You, Mohammad Zarei, Ce Zhang
          </ListItem>
          <ListItem>
            <Meta>Keywords</Meta>
            <span>Computer Vision, Human Detection, ResNet-101, Clustering, Image Processing, ROI Detection</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
