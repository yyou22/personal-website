import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Box,
  VStack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
  Tag,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => {
  const linkColor = useColorModeValue('pink.600', 'teal.300')
  const borderColor = useColorModeValue('teal.500', 'teal.600')
  const metaColor = useColorModeValue('green.800', undefined)

  return (
  <Layout title="Melody AI">
    <Container>
      <Title>
        Melody AI <Badge>2021</Badge>
      </Title>
      <P>
        Melody AI is a RNN-based Meldoy Generator that generates novel melodies
        of sequence size 100 based on music from the Japanese video game
        series Touhou Project.
      </P>
      <P>
        In this study, three RNN-based models are implemented each with a RNN
        variant (vanilla RNN, LSTM & GRU). A set of MIDI files are collected and
        partitioned via DAW into single-instrument melodies to be used as training data and
        starting sequences. Model performance is evaluated via note prediction accuracy
        and user survey on generated melodies.
      </P>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Core Features</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Takes MIDI files as network inputs.</ListItem>
          <ListItem>Includes 3 RNN variant models (vanilla RNN, LSTM & GRU).</ListItem>
          <ListItem>Generates novel melodies based on provided starting sequences.</ListItem>
        </UnorderedList>
      </Box>

      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Links</Meta>
        </Box>
        <VStack align="stretch" spacing={2} mt={2} pl={2} borderLeftWidth="2px" borderColor={borderColor}>
          <Box>
            <Text as="span" fontWeight="medium" color="gray.500">Playlist: </Text>
            <Link href="https://soundcloud.com/yyou22/sets/melody-ai" target="_blank" rel="noopener noreferrer" color={linkColor}>
              Listen on SoundCloud <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
          <Box>
            <Text as="span" fontWeight="medium" color="gray.500">Code: </Text>
            <Link href="https://github.com/yyou22/RNN-Melody-Generator" target="_blank" rel="noopener noreferrer" color={linkColor}>
              GitHub – RNN Melody Generator <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </VStack>
      </Box>

      <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1429623169&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['Python3', 'Keras Tensorflow', 'Machine Learning', 'Logic Pro'].map(item => (
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
          {['Recurrent Neural Network', 'Artificial Intelligence'].map(item => (
            <WrapItem key={item}>
              <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Container>
  </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
