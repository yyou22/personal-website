import { useEffect } from 'react'
import { Container, Badge, List, ListItem, UnorderedList, Link, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  const linkColor = useColorModeValue('pink.600', 'teal.300')
  const borderColor = useColorModeValue('teal.500', 'teal.600')
  const metaColor = useColorModeValue('green.800', undefined)

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
          Think you can spot the difference? The AI can&apos;t.{' '}
          <Link href="https://visxai-aml.vercel.app/" target="_blank" rel="noopener noreferrer">
          Panda or Gibbon? A Beginner&apos;s Introduction to Adversarial Attacks <ExternalLinkIcon mx="2px" />
          </Link>{' '}
          is an interactive, beginner-friendly visualization that introduces how machine-learning models can be fooled by malicious adversarial attacks. 
          Built primarily with D3.js and Idyll, the guide focuses on the Fast Gradient Sign Method (FGSM) and shows how tiny, human-imperceptible tweaks to 
          an image can push a ResNet-34 model into making confident mistakes. Through dynamic visuals and animations, you can compare clean and subtly perturbed images, 
          explore how these attacks shift model behavior, and examine two versions of ResNet-34, one trained normally and one trained with adversarial methods, 
          to see how they respond differently.
        </P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Links</Meta>
          </Box>
          <VStack align="stretch" spacing={2} mt={2} pl={2} borderLeftWidth="2px" borderColor={borderColor}>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">Try it: </Text>
              <Link href="https://visxai-aml.vercel.app/" target="_blank" rel="noopener noreferrer" color={linkColor}>
                Interactive explainable (visxai-aml.vercel.app) <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Box>
              <Text as="span" fontWeight="medium" color="gray.500">Video demo: </Text>
              <Link href="https://youtu.be/ASEd4f5gMvA" target="_blank" rel="noopener noreferrer" color={linkColor}>
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
            <ListItem>Accepted and presented at the 7th VISxAI Workshop at IEEE VIS24: {' '}
            <Link href="https://visxai.io/" target="_blank" rel="noopener noreferrer">
              VISxAI Workshop Program Info <ExternalLinkIcon mx="2px" />
            </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <WorkImage src="/images/works/visxai/visxai2.gif" alt="visxai" />
        <WorkImage src="/images/works/visxai/visxai4.gif" alt="visxai" />
        <WorkImage
          src="/images/works/visxai/visxai7.PNG"
          alt="visxai"
          caption="Presentation at the VISxAI Workshop"
        />
        {/* <WorkImage src="/images/works/visxai/visxai6.jpg" alt="visxai" /> */}
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Explains adversarial attacks using beginner-friendly interactive visualizations.</ListItem>
            <ListItem>Explores the FGSM attack&apos;s impact on ResNet-34 models, with insights into both natural and adversarial images, as well as standard and adversarial trainings.</ListItem>
            <ListItem>Includes embedding-level and instance-level analysis to show how adversarial perturbations affect models.</ListItem>
          </UnorderedList>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Skills</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['Python', 'PyTorch', 't-SNE', 'Adversarial Machine Learning', 'XAI Visualization', 'D3.js', 'Idyll-lang'].map(item => (
              <WrapItem key={item}>
                <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>
                  {item}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Keywords</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['Adversarial Machine Learning', 'FGSM Attack', 'Adversarial Attack', 'Image Classification', 'Visualization', 'ResNet', 'Model Robustness'].map(item => (
              <WrapItem key={item}>
                <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>
                  {item}
                </Tag>
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
