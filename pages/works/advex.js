import YouTubePreview from '../../components/youtube-preview'
import { Container, Badge, ListItem, UnorderedList, Link, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, WorkImage,Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  const linkColor = useColorModeValue('day.link', 'teal.300')
  const borderColor = useColorModeValue('day.strongBorder', 'teal.600')
  const panelBackground = useColorModeValue('day.surface', undefined)
  const metaColor = useColorModeValue('day.link', undefined)
  const captionColor = useColorModeValue('day.subtle', 'gray.500')

  return (
  <Layout title="AdvEx">
    <Container>
      <Title>
        AdvEx <Badge>2024</Badge>
      </Title>
      <P>
        AdvEx helps people new to machine learning explore adversarial attacks
        on image classifiers. These attacks make small changes to an image that
        can alter a model&apos;s prediction while remaining difficult for a person
        to notice. The tool lets you compare models and attack methods, inspect
        individual images, and explore patterns across a dataset to see where
        and how predictions change.
      </P>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Recognition & Outreach</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>
            Published in ACM Transactions on Interactive Intelligent Systems.{' '}
            <Link href="https://dl.acm.org/doi/10.1145/3725739" target="_blank" rel="noopener noreferrer">
              Read the paper <ExternalLinkIcon mx="2px" />
            </Link>
            .
          </ListItem>
          <ListItem>
            Received third place in the poster competition at the University of Waterloo&apos;s 2024 Cybersecurity and Privacy Institute Annual Conference (300 CAD).{' '}
            <Link href="https://uwaterloo.ca/cybersecurity-privacy-institute/news/cpi-congratulates-our-top-3-winners-cpi-annual-conference" target="_blank" rel="noopener noreferrer">
              Read the award announcement <ExternalLinkIcon mx="2px" />
            </Link>
            .
          </ListItem>
          <ListItem>Presented as a talk and poster at the University of Waterloo&apos;s 2023 Math and Computing Research Discovery Days.</ListItem>
        </UnorderedList>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Core Features</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Explore attacks such as FGSM, PGD, and ZOO through interactive views.</ListItem>
          <ListItem>Compare how different classifiers respond to the same attack.</ListItem>
          <ListItem>Inspect changes to individual images alongside patterns in model performance.</ListItem>
        </UnorderedList>
      </Box>
      <WorkImage src="/images/works/advex/advex1.gif" alt="fgsm" />
      <WorkImage src="/images/works/advex/advex2.gif" alt="fgsm" />
      <WorkImage src="/images/works/advex/advex3.gif" alt="fgsm" />
      <WorkImage src="/images/works/advex/advex5.png" alt="fgsm" />
      <YouTubePreview videoId="h5JMTz7PoKQ" title="Adversarial attack visualization demo" maxW="600px" />
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
              href="https://dl.acm.org/doi/10.1145/3725739"
              target="_blank"
              rel="noopener noreferrer"
              color={linkColor}
              fontWeight="semibold"
            >
              Paper Link <ExternalLinkIcon mx="1px" />
            </Link>
            <Text fontSize="xs" color={captionColor} lineHeight="1.2">
              View on ACM Digital Library.
            </Text>
          </Box>

          <Box>
            <Link
              href="https://youtu.be/h5JMTz7PoKQ?si=Lw7Ab2-ADXOBKhhU"
              target="_blank"
              rel="noopener noreferrer"
              color={linkColor}
              fontWeight="semibold"
            >
              Video figure <ExternalLinkIcon mx="1px" />
            </Link>
            <Text fontSize="xs" color={captionColor} lineHeight="1.2">
              Short visual overview of the system.
            </Text>
          </Box>

          <Box>
            <Link
              href="https://youtu.be/q9xcfDoCNhs"
              target="_blank"
              rel="noopener noreferrer"
              color={linkColor}
              fontWeight="semibold"
            >
              Video demo <ExternalLinkIcon mx="1px" />
            </Link>
            <Text fontSize="xs" color={captionColor} lineHeight="1.2">
              Full walkthrough of the interaction design.
            </Text>
          </Box>

          <Box>
            <Link
              href="https://uwaterloo.ca/cybersecurity-privacy-institute/news/cpi-congratulates-our-top-3-winners-cpi-annual-conference"
              target="_blank"
              rel="noopener noreferrer"
              color={linkColor}
              fontWeight="semibold"
            >
              CPI winner announcement <ExternalLinkIcon mx="1px" />
            </Link>
            <Text fontSize="xs" color={captionColor} lineHeight="1.2">
              Recognized as a top 3 project at the CPI annual conference.
            </Text>
          </Box>
        </VStack>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['Python', 'PyTorch', 'scikit-learn', 'Machine Learning', 'Evasion Attacks', 'D3.js', 'JavaScript'].map(item => (
            <WrapItem key={item}>
              <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Keywords</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['HCI', 'Information Visualization', 'Adversarial Machine Learning', 'FGSM', 'PGD', 'Model Robustness'].map(item => (
            <WrapItem key={item}>
              <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Team Members</Meta>
        </Box>
        <Text mt={2}>Yuzhe You, Jarvis Tse, Jian Zhao</Text>
      </Box>

    </Container>
  </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
