import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

//import thumbRNN from '../public/images/works/rnn_eyecatch.png'
//import thumbST from '../public/images/works/st_eyecatch.png'
import thumbSocr from '../public/images/works/socr3.jpg'
//import thumbEzbake from '../public/images/works/ezbake_eyecatch.png'
//import thumbPop from '../public/images/works/pop_eyecatch.png'
//import thumbInfoVis from '../public/images/works/infovis_eyecatch.png'
//import thumbRobust from '../public/images/works/robust_eyecatch.png'
import thumbFGSM from '../public/images/works/advex/advex2_thumbnail.gif'
import thumbFGSM2 from '../public/images/works/advex/advex1_thumbnail.png'
import thumbNavEaz from '../public/images/works/naveaz/naveaz1_thumbnail.png'
import thumbCoPrompt from '../public/images/works/coprompt3.png'
import thumbGradflix from '../public/images/works/gradflix/gradflix_thumbnail.gif'
import thumbGradflix2 from '../public/images/works/gradflix/gradflix_thumbnail.png'
import thumbVISxAI from '../public/images/works/visxai/visxai7_thumbnail.gif'
import thumbVISxAI2 from '../public/images/works/visxai/visxai1_thumbnail.png'
import thumbCloud from '../public/images/works/point\ cloud/pc3.png'
import thumbMusashi from '../public/images/works/musashi/musashi1.png'
import thumbGamification from '../public/images/works/gamification/gamification3_thumbnail_.gif'
import thumbGamification2 from '../public/images/works/gamification/gamification4_thumbnail.png'
import thumbVATRA from '../public/images/works/vatra/vatra1_thumbnail_.gif'
import thumbVATRA2 from '../public/images/works/vatra/vatra2_thumbnail.png'

const Works = () => (

  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem
            id="visxai"
            title="Panda or Gibbon?"
            thumbnail={thumbVISxAI}
            blurPlaceholder={thumbVISxAI2}
          >
            A Beginner&apos;s Introduction to Adversarial Attacks
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
            id="gamification"
            title="XAI Gamification"
            thumbnail={thumbGamification}
            blurPlaceholder={thumbGamification2}
          >
            LLM-Powered Narrative Gamification Framework for XAI Visualizations
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="vatra"
            title="VATRA"
            thumbnail={thumbVATRA}
            blurPlaceholder={thumbVATRA2}
          >
            Comparative Visual Analytics for AI Model Trade-off Analysis
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
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
            id="advex"
            title="AdvEx"
            thumbnail={thumbFGSM}
            blurPlaceholder={thumbFGSM2}
          >
            An Interactive Visualization for Explaining AI-targeted Adversarial Attacks
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="coprompt"
            title="CoPrompt"
            thumbnail={thumbCoPrompt}
          >
            A Collaborative Prompt Engineering Tool for LLM-driven Natural Language Programming
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="pointcloud"
            title="Point Cloud Visibility"
            thumbnail={thumbCloud}
          >
            A Point Cloud-based Application that Uses Ray-casting to Compute Visbility of POIs
          </WorkGridItem>
        </Section>
        </SimpleGrid>

        <Section delay={0.4}>
        <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Older Works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section delay={0.4}>
          <WorkGridItem
            id="musashi"
            title="Waterloo.AI Challenge"
            thumbnail={thumbMusashi}
          >
            Ensemble AI Solution for Human Detection in Top-down Fisheye Workplace Monitoring
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="socr"
            title="SOCR - Big Data"
            thumbnail={thumbSocr}
          >
            Design and Disseminate Advanced Methods/tools in Probability, Statistics,
            and Machine Learning
          </WorkGridItem>
        </Section>

        {/*
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
        */}

        {/*
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
        */}

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

        {/*
        <Section delay={0.4}>
          <WorkGridItem
            id="softtriple"
            title="BaselineST"
            thumbnail={thumbST}
          >
            A novel machine learning model that incorporates SoftTriple loss to elevate
            state-of-the-art performance in few-shot classifications
          </WorkGridItem>
        </Section>
        */}
        
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
