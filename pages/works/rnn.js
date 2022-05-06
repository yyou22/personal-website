import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
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
      <UnorderedList my={4}>
        <Meta>Core Features</Meta>
        <ListItem>Takes MIDI files as network inputs</ListItem>
        <ListItem>Includes 3 RNN variant models (vanilla RNN, LSTM & GRU)</ListItem>
        <ListItem>Generates novel melodies based on provided starting sequences</ListItem>
      </UnorderedList>

      <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1429623169&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Python3, Keras Tensorflow, Machine Learning, Logic Pro</span>
        </ListItem>
        <ListItem>
          <Meta>Playlist</Meta>
          <Link href="https://soundcloud.com/yyou22/sets/melody-ai">
            soundcloud.com/yyou22/sets/melody-ai <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/yyou22/RNN-Melody-Generator">
            github.com/yyou22/RNN-Melody-Generator <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>Recurrent Neural Network, Artificial Intelligence</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
