import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

import thumbRNN from '../public/images/works/rnn_eyecatch.png'
import thumbST from '../public/images/works/st_eyecatch.jpg'
import thumbSocr from '../public/images/works/socr_eyecatch.png'
import thumbEzbake from '../public/images/works/ezbake_eyecatch.png'

const Works = () => (

  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem
            id="rnn"
            title="AI Melody"
            thumbnail={thumbRNN}
          >
            A RNN-based melody generator (vanilla RNN, LSTM & GRU networks)
            that generates music based on Touhou Project
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="softtriple"
            title="BaselineST"
            thumbnail={thumbST}
          >
            A novel machine learning model that incorporates SoftTriple loss to elevate
            state-of-the-art performance in few-shot classifications
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="socr"
            title="SOCR"
            thumbnail={thumbSocr}
          >
            Design and disseminate advanced methods/tools in probability, staticstics,
            and machine learning; develop enhanced analysis and visualizations on "Big Data"
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="ezbake"
            title="ezBake"
            thumbnail={thumbEzbake}
          >
            Implementation of a complex software that automates quality testing
            of camera lens by communicating with a thermal chamber via Modbus Protocol
          </WorkGridItem>
        </Section>

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
