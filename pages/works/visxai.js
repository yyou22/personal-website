import { useEffect } from 'react'
import { Container, Badge, List, ListItem, UnorderedList, Link, } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  useEffect(() => {
    // Load the Twitter script to display the tweet with the video
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <Layout title="Panda or Gibbon?">
      <Container>
        <Title>
          Panda or Gibbon? <Badge>2024</Badge>
        </Title>
        <P>
          <Link href="https://visxai-aml.vercel.app/" target="_blank" rel="noopener noreferrer">
          &quot;Panda or Gibbon? A Beginner&apos;s Introduction to Adversarial Attacks&quot; <ExternalLinkIcon mx="2px" />
          </Link> is an interactive beginner-friendly visualization guide designed to introduce users to adversarial attacks in machine learning, 
          specifically focusing on the Fast Gradient Sign Method (FGSM) attack. Our interactive explainable uses engaging visualizations to show how subtle, 
          human-imperceptible perturbations can fool image classification models like ResNet-34 into making incorrect predictions. 
          The guide allows users to explore the impact of these adversarial attacks on model behavior by comparing clean and perturbed data points, and ResNet-34 models trained with standard and adversarial methods.
        </P>
        <UnorderedList my={4}>
          <Meta>Link to Explainable: {' '}</Meta>
          <ListItem>
            <Link href="https://visxai-aml.vercel.app/" target="_blank" rel="noopener noreferrer">
              Panda or Gibbon? A Beginner&apos;s Introduction to Adversarial Attacks <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
        <UnorderedList my={4}>
          <Meta>Recognition & Outreach</Meta>
          <ListItem>Accepted at the 7th VISxAI Workshop at IEEE VIS24: {' '}
          <Link href="https://visxai.io/">
            VISxAI Workshop Program Info <ExternalLinkIcon mx="2px" />
          </Link>
          </ListItem>
        </UnorderedList>
        <WorkImage src="/images/works/visxai/visxai2.gif" alt="visxai" />
        <WorkImage src="/images/works/visxai/visxai3.gif" alt="visxai" />
        <WorkImage src="/images/works/visxai/visxai4.gif" alt="visxai" />
        <UnorderedList my={4}>
          <Meta>Core Features</Meta>
          <ListItem>Explains adversarial attacks using beginner-friendly interactive visualizations.</ListItem>
          <ListItem>Explores the FGSM attack&apos;s impact on ResNet-34 models, with insights into both natural and adversarial images, as well as standard and adversarial trainings.</ListItem>
          <ListItem>Includes embedding-level and instance-level analysis to show how adversarial perturbations affect models.</ListItem>
        </UnorderedList>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Skills</Meta>
            <span>Python, PyTorch, t-SNE, Adversarial Machine Learning, XAI Visualization, D3.js, Idyll-lang</span>
          </ListItem>
          <ListItem>
            <Meta>Authors</Meta>
            Yuzhe You, Jian Zhao
          </ListItem>
          <ListItem>
            <Meta>Keywords</Meta>
            <span>Adversarial Machine Learning, FGSM Attack, Adversarial Attack, Image Classification, Visualization, ResNet-34, Model Robustness</span>
          </ListItem>
        </List>

      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
