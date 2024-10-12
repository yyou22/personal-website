import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbRNN from '../public/images/works/rnn_eyecatch.png'
import thumbST from '../public/images/works/st_eyecatch.png'
import thumbSocr from '../public/images/works/socr_eyecatch.png'
//import thumbEzbake from '../public/images/works/ezbake_eyecatch.png'
//import thumbPop from '../public/images/works/pop_eyecatch.png'
//import thumbInfoVis from '../public/images/works/infovis_eyecatch.png'
import thumbRobust from '../public/images/works/robust_eyecatch.png'
import thumbFGSM from '../public/images/works/advex1.png'
import thumbNavEaz from '../public/images/works/naveaz1.png'
import thumbCoPrompt from '../public/images/works/coprompt3.png'
import thumbGradflix from '../public/images/works/gradflix/gradflix.gif'
import thumbGradflix2 from '../public/images/works/gradflix/gradflix.png'

const Works = () => (

  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      <Section>
          <WorkGridItem
            id="advex"
            title="AdvEx"
            thumbnail={thumbFGSM}
          >
            An Interactive Visualization for Explaining AI-targeted Adversarial Attacks
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="naveaz"
            title="NavEaz"
            thumbnail={thumbNavEaz}
          >
            An AI-powered SmartWatch App for Driver Impairment Prediction
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="coprompt"
            title="CoPrompt"
            thumbnail={thumbCoPrompt}
          >
            A a collaborative prompt engineering tool for natural language programming
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="gradflix"
            title="GRADflix"
            thumbnail={thumbGradflix}
            blurPlaceholder={thumbGradflix2}
          >
            A 8-bit Pixel Video Game that Showcases my MMath Research
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="socr"
            title="SOCR - Big Data"
            thumbnail={thumbSocr}
          >
            Design and disseminate advanced methods/tools in probability, statistics,
            and machine learning; develop enhanced analysis and visualizations on &quot;Big Data&quot;
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="rnn"
            title="Melody AI"
            thumbnail={thumbRNN}
          >
            A RNN-based melody generator (vanilla RNN, LSTM & GRU networks)
            that generates music based on Touhou Project
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="robust"
            title="Adversarial ML"
            thumbnail={thumbRobust}
          >
            Robustness of machine learning with a special emphasis on adversarial
            machine learning
          </WorkGridItem>
        </Section>

        {/*
        <Section delay={0.2}>
          <WorkGridItem
            id="infovis"
            title="InfoVis xAI"
            thumbnail={thumbInfoVis}
          >
            Design, develop, and evaluate visualization methods for AI explainability
          </WorkGridItem>
        </Section>
        */}

        <Section delay={0.3}>
          <WorkGridItem
            id="softtriple"
            title="BaselineST"
            thumbnail={thumbST}
          >
            A novel machine learning model that incorporates SoftTriple loss to elevate
            state-of-the-art performance in few-shot classifications
          </WorkGridItem>
        </Section>
        
        {/*
        <Section delay={0.4}>
          <WorkGridItem
            id="ezbake"
            title="ezBake"
            thumbnail={thumbEzbake}
          >
            Implementation of a complex software that automates quality testing
            of camera lens by communicating with a thermal chamber via Modbus Protocol
          </WorkGridItem>
        </Section>
        */}

        {/*
        <Section delay={0.3}>
          <WorkGridItem
            id="ngram"
            title="Pop AI"
            thumbnail={thumbPop}
          >
            An N-gram-based AI application that produces new generated notes and combines them with drum beats
          </WorkGridItem>
        </Section>
        */}

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
