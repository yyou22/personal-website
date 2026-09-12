import YouTubePreview from '../../components/youtube-preview'
import { useEffect } from 'react'
import { Container, Badge, ListItem, UnorderedList, Link, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  const linkColor = useColorModeValue('day.link', 'teal.300')
  const borderColor = useColorModeValue('day.strongBorder', 'teal.600')
  const panelBackground = useColorModeValue('day.surface', undefined)
  const metaColor = useColorModeValue('day.link', undefined)
  const captionColor = useColorModeValue('day.subtle', 'gray.500')

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
          is an interactive guide to how small changes in an image can mislead
          a machine learning model. I built it with D3.js and Idyll to introduce
          adversarial attacks through examples you can explore yourself. The
          guide focuses on the Fast Gradient Sign Method (FGSM), letting you
          compare original and altered images and see how two versions of
          ResNet-34 respond: one with standard training and one trained to
          resist attacks.
        </P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition & Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Accepted to and presented at the 7th VISxAI Workshop at IEEE VIS 2024.{' '}
            <Link href="https://visxai.io/" target="_blank" rel="noopener noreferrer">
              Explore the workshop program <ExternalLinkIcon mx="2px" />
            </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Compare original images with versions altered by an FGSM attack.</ListItem>
            <ListItem>See how standard and adversarially trained models respond differently.</ListItem>
            <ListItem>Explore individual predictions and the patterns shown in embedding views.</ListItem>
          </UnorderedList>
        </Box>
        <WorkImage src="/images/works/visxai/visxai2.gif" alt="visxai" />
        <WorkImage src="/images/works/visxai/visxai4.gif" alt="visxai" />
        <WorkImage
          src="/images/works/visxai/visxai7.PNG"
          alt="visxai"
          caption="Presentation at the VISxAI Workshop"
        />
        <YouTubePreview videoId="UUkftG2KH5o" title="VISxAI workshop presentation" start={5444} maxW="600px" />
        <Text mt={2} fontSize="sm" color={captionColor} textAlign="center">
          Video of my presentation at the 7th VISxAI workshop (starts from 1:30:44)
        </Text>
        {/* <WorkImage src="/images/works/visxai/visxai6.jpg" alt="visxai" /> */}
        <Box
  my={4}
  p={3}
  borderWidth="1px"
  borderColor={borderColor} bg={panelBackground}
  borderRadius="md"
>
<Meta>Links</Meta>
<VStack align="stretch" spacing={2} mt={2}>
    <Box>
      <Link
        href="https://visxai-aml.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        color={linkColor}
        fontWeight="semibold"
      >
        Interactive explainable <ExternalLinkIcon mx="1px" />
      </Link>
      <Text fontSize="xs" color={captionColor} lineHeight="1.2">
        Explore the live VISxAI demo.
      </Text>
    </Box>

    <Box>
      <Link
        href="https://youtu.be/ASEd4f5gMvA"
        target="_blank"
        rel="noopener noreferrer"
        color={linkColor}
        fontWeight="semibold"
      >
        Video demo <ExternalLinkIcon mx="1px" />
      </Link>
      <Text fontSize="xs" color={captionColor} lineHeight="1.2">
        Watch the walkthrough on YouTube.
      </Text>
    </Box>
  </VStack>
</Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Skills</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['Python', 'PyTorch', 't-SNE', 'Machine Learning', 'Computer Vision', 'Adversarial Machine Learning', 'XAI Visualization', 'D3.js', 'Idyll-lang'].map(item => (
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
