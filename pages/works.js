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
import thumbVISxAI from '../public/images/works/visxai/visxai7_thumbnail_.gif'
import thumbVISxAI2 from '../public/images/works/visxai/visxai1_thumbnail.png'
import thumbCloud from '../public/images/works/point\ cloud/pc3.png'
import thumbMusashi from '../public/images/works/musashi/musashi1.png'
import thumbGamification from '../public/images/works/gamification/gamification3_thumbnail_.gif'
import thumbGamification2 from '../public/images/works/gamification/gamification4_thumbnail.png'
import thumbVATRA from '../public/images/works/vatra/vatra1_thumbnail_.gif'
import thumbVATRA2 from '../public/images/works/vatra/vatra2_thumbnail.png'
import thumbArt from '../public/images/works/art/art_thumbnail.png'
import thumbTestKitchen from '../public/images/works/test-kitchen/iliza-live-demo.jpg'
import thumbCommunityLibrary from '../public/images/publications/community-library.png'
import thumbTrafficFlow from '../public/images/works/traffic-flow/thumbnail-generated.png'
import thumbMacedon from '../public/images/works/macedon/thumbnail-generated.png'

const Works = () => (

  <Layout title="Works">
    <Container maxW="container.md" px={{ base: 0, md: 2 }}>
      <Section>
        <Heading as="h3" fontSize={20} mb={4}>
          Industry
        </Heading>
      </Section>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} columnGap={5} rowGap={4}>
        <Section>
          <WorkGridItem
            id="test-kitchen"
            title="Project Test Kitchen"
            thumbnail={thumbTestKitchen}
            thumbnailBrand={{ logo: '/images/adobe2.png', name: 'Adobe Research', overlay: true }}
            thumbnailObjectFit="cover"
          >
            My Adobe internship project, presented at Adobe Summit Sneaks 2026
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="community-library"
            title="Community Library Creator"
            thumbnail={thumbCommunityLibrary}
            thumbnailBrand={{ logo: '/images/microsoft.png', name: 'Microsoft Research' }}
            thumbnailObjectFit="cover"
          >
            Research I contributed to during my Microsoft internship, published at CHI 2026
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        Academic
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} columnGap={5} rowGap={4}>
        <Section>
          <WorkGridItem id="traffic-flow" title="Traffic Forecasting" thumbnail={thumbTrafficFlow}>
            Forecasting intersection turning movements with limited training data
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="macedon" title="MACEDON" thumbnail={thumbMacedon}>
            Interactive code evaluation and optimization with LLM assistance
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="vatra"
            title="VATRA"
            thumbnail={thumbVATRA}
            blurPlaceholder={thumbVATRA2}
          >
            Comparative visual analytics for AI model trade-off analysis
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="visxai"
            title="Panda or Gibbon?"
            thumbnail={thumbVISxAI}
            blurPlaceholder={thumbVISxAI2}
          >
            A beginner&apos;s introduction to adversarial attacks
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="naveaz"
            title="NavEaz"
            thumbnail={thumbNavEaz}
          >
            An AI-powered smartwatch app for driver impairment prediction
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="gamification"
            title="XAI Gamification"
            thumbnail={thumbGamification}
            blurPlaceholder={thumbGamification2}
          >
            An LLM-powered narrative gamification framework for XAI visualizations
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="advex"
            title="AdvEx"
            thumbnail={thumbFGSM}
            blurPlaceholder={thumbFGSM2}
          >
            An interactive visualization for explaining AI-targeted adversarial attacks
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="coprompt"
            title="CoPrompt"
            thumbnail={thumbCoPrompt}
          >
            A collaborative prompt engineering tool for LLM-driven natural language programming
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="pointcloud"
            title="Point Cloud Visibility"
            thumbnail={thumbCloud}
          >
            A point cloud application that uses ray-casting to compute the visibility of POIs
          </WorkGridItem>
        </Section>

      </SimpleGrid>

        <Section delay={0.4}>
        <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Older Works
          </Heading>
        </Section>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} columnGap={5} rowGap={4}>

        <Section delay={0.4}>
          <WorkGridItem
            id="gradflix"
            title="GRADflix"
            thumbnail={thumbGradflix}
            blurPlaceholder={thumbGradflix2}
          >
            An 8-bit pixel video game that showcases my MMath research
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="musashi"
            title="Waterloo.AI Challenge"
            thumbnail={thumbMusashi}
          >
            An ensemble AI solution for human detection in top-down fisheye workplace monitoring
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="socr"
            title="SOCR - Big Data"
            thumbnail={thumbSocr}
          >
            Designing and disseminating advanced tools in probability, statistics,
            and machine learning
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

      <Section delay={0.5}>
        <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Other Skills
          </Heading>
      </Section>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} columnGap={5} rowGap={4}>

        <Section delay={0.5}>
          <WorkGridItem
            id="art"
            title="Art & Illustration"
            thumbnail={thumbArt}
          >
            Explore my paintings, drawings, and illustrations
          </WorkGridItem>
        </Section>
      
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
