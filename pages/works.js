import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbRNN from '../public/images/works/rnn_eyecatch.png'
import thumbST from '../public/images/works/st_eyecatch.png'
import thumbSocr from '../public/images/works/socr_eyecatch.png'
import thumbEzbake from '../public/images/works/ezbake_eyecatch.png'
import thumbPop from '../public/images/works/pop_eyecatch.png'
import thumbInfoVis from '../public/images/works/infovis_eyecatch.png'

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
            title="Melody AI"
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
            title="SOCR - Big Data"
            thumbnail={thumbSocr}
          >
            Design and disseminate advanced methods/tools in probability, statistics,
            and machine learning; develop enhanced analysis and visualizations on &quot;Big Data&quot;
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

        <Section delay={0.1}>
          <WorkGridItem
            id="infovis"
            title="InfoVis xAI"
            thumbnail={thumbInfoVis}
          >
            Design, develop, and evaluate visualization methods for AI explainability
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="ngram"
            title="Pop AI"
            thumbnail={thumbPop}
          >
            An N-gram-based AI application that produces new generated notes and combines them with drum beats
          </WorkGridItem>
        </Section>

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
