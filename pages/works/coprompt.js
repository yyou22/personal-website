import YouTubePreview from '../../components/youtube-preview'
import { Container, Badge, Link, ListItem, UnorderedList, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
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
  <Layout title="CoPrompt">
    <Container>
      <Title>
        CoPrompt <Badge>2024</Badge>
      </Title>
      <P>
        Writing prompts with a team can mean a lot of copying, checking, and
        asking what changed. We built CoPrompt to make that back-and-forth
        easier when coding with AI. You can see what your teammates are working
        on, build on their prompts, and link them to your own so you don&apos;t
        have to copy every update by hand. And when you get stuck, you can
        leave a request for help right alongside the prompt.
      </P>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Recognition & Outreach</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>
            Accepted to and presented at CHI 2024.{' '}
            <Link href="https://dl.acm.org/doi/10.1145/3613904.3642212" target="_blank" rel="noopener noreferrer">
              Read the paper <ExternalLinkIcon mx="2px" />
            </Link>
            .
          </ListItem>
        </UnorderedList>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Core Features</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Share a prompt or build on one a teammate has already written.</ListItem>
          <ListItem>See how prompts fit together, then open one for a closer look.</ListItem>
          <ListItem>Link prompts so changes stay in sync.</ListItem>
          <ListItem>Ask for help where you need it, whether your teammate is working alongside you or checking in later.</ListItem>
        </UnorderedList>
      </Box>
      {/*<P>
      In a user study with 12 experienced programmers, 
      CoPrompt improved both real-time and asynchronous collaboration by helping users easily understand, build upon, and modify collaborators&apos; prompts. 
      It addressed common challenges like maintaining context, tracking revisions, and managing dependencies, making it an effective tool for streamlining collaborative NL programming workflows.
      </P>*/}
      <WorkImage src="/images/works/coprompt4.jpeg" alt="coprompt" />
      <WorkImage src="/images/works/coprompt1.png" alt="coprompt" />
      <YouTubePreview videoId="JGnXe_geyY0" title="CoPrompt demonstration" maxW="600px" />
      <YouTubePreview videoId="BiToRaCrnHg" title="CoPrompt presentation" maxW="600px" />
      <Box my={4} p={3} borderWidth="1px" borderColor={borderColor} bg={panelBackground} borderRadius="md">
        <Meta>Links</Meta>
        <VStack align="stretch" spacing={2} mt={2}>
          <Box>
            <Link
              href="https://dl.acm.org/doi/10.1145/3613904.3642212"
              target="_blank"
              rel="noopener noreferrer"
              color={linkColor}
              fontWeight="semibold"
            >
              Read the CoPrompt paper <ExternalLinkIcon mx="1px" />
            </Link>
            <Text fontSize="xs" color={captionColor} lineHeight="1.2">
              View on ACM Digital Library.
            </Text>
          </Box>
        </VStack>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['Python', 'PyTorch', 'scikit-learn', 'Machine Learning', 'Evasion Attacks', 'D3.js', 'JavaScript', 'OpenAI API'].map(item => (
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
          {['HCI', 'Collaborative Programming', 'Natural Language Programming', 'Prompt Engineering', 'Large Language Models (LLMs)'].map(item => (
            <WrapItem key={item}>
              <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Authors</Meta>
        </Box>
        <Text mt={2}>Li Feng, Ryan Yen, Yuzhe You, Mingming Fan, Jian Zhao, Zhicong Lu</Text>
      </Box>

    </Container>
  </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
