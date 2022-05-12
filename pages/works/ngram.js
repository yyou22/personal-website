import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Pop AI">
    <Container>
      <Title>
        Pop AI <Badge>2017</Badge>
      </Title>
      <P>
        Pop AI is a music-generating application implemented with three N-gram
        variants (Unigram, Bigram & Trigram) that reads from an inventory of
        pre-loaded songs and generates novel note sequences by detecting language
        patterns found in those music. It utilizes natural language processing techniques and a
        Python program named PySynth to generate short clips of music and then combines
        the output with a selection from a pre-defined set of drum beats and bass loops.
      </P>
      <P>
        A separate Reddit Bot is implemented that replies to any comment exactly once on
        a Reddit Threadt if it contains the words &quot;music&quot; or &quot;lyric,&quot; regardless of
        the letter case. If the comment contains &quot;lyrics,&quot; the bot will reply with
        artificially generated lyrics. If the comment contains &quot;music,&quot; the bot will generate
        music, access its own google drive, and upload its music and reply with a link to the
        song on Google Drive.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Python 2.7, PySynth</span>
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>Creative AI, N-gram Model, Natural Language Processing (NLP),
          Probabilistic Language Model</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
