import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="rnn">
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
        In this study, three RNN-based models are implemented with different kinds of RNN
        variants (vanilla RNN, LSTM & GRU). A set o MIDI files are collected and
        partitioned into single-instrument melodies to be used as training data and
        starting sequences.
      </P>
      <UnorderedList my={4}>
        <ListItem>Takes MIDI files as inputs</ListItem>
        <ListItem>Includes 3 RNN variant models (vanilla RNN, LSTM & GRU)</ListItem>
        <ListItem>Generates novel melodies based on provided starting sequences</ListItem>
      </UnorderedList>

      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1429623169&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Python3, Keras Tensorflow, Logic Pro</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/craftzdog/caffe-ios-sample">
            github.com/craftzdog/caffe-ios-sample <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
