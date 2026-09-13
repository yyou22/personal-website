import { Box, Container, Heading, SimpleGrid, Divider, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import ArtThumbnail from '../components/art-thumbnail'

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
import thumbTestKitchen from '../public/images/works/test-kitchen/iliza-live-demo.jpg'
import thumbCommunityLibrary from '../public/images/publications/community-library.png'
const thumbTrafficFlow = '/images/works/traffic-flow/thumbnail-intersection-hd.webp'
import thumbMacedon from '../public/images/works/macedon/thumbnail-generated.png'

const Works = () => (

  <Layout title="Portfolio">
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
            priority
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
            priority
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
            thumbnailContent={<ArtThumbnail />}
            thumbnailDynamicRange="standard"
          >
            Explore my paintings, drawings, and illustrations
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <Box as="article" w="full" textAlign="left">
            <Box
              as="svg"
              viewBox="0 0 480 270"
              display="block"
              w="full"
              borderRadius="12px"
              overflow="hidden"
              boxShadow="0 0 0 1px rgba(128, 128, 128, 0.22)"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id="creative-paper" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e8e8e8" />
                  <stop offset="100%" stopColor="#c4c4c4" />
                </linearGradient>
              </defs>
              <rect width="480" height="270" fill="#303030" />
              <circle cx="414" cy="36" r="142" fill="none" stroke="#a0a0a0" strokeOpacity="0.16" />
              <circle cx="414" cy="36" r="112" fill="none" stroke="#a0a0a0" strokeOpacity="0.16" />
              <rect x="128" y="50" width="182" height="184" rx="5" fill="#a8a8a8" transform="rotate(-16 219 142)" />
              <rect x="180" y="36" width="172" height="184" rx="5" fill="#858585" transform="rotate(13 266 128)" />
              <rect x="158" y="39" width="172" height="192" rx="5" fill="url(#creative-paper)" />
              <path d="M190 195V127a54 54 0 0 1 108 0v68Z" fill="#494949" />
              <circle cx="244" cy="116" r="28" fill="#b8b8b8" />
              <path d="M190 181c31-51 63-51 108 0v14H190Z" fill="#979797" />
              <path d="M190 210h60m12 0h36" stroke="#494949" strokeOpacity="0.45" strokeWidth="2" />
            </Box>
            <Text mt={3} fontSize={18} fontWeight="medium" lineHeight={1.35}>
              Stealth Studio
            </Text>
            <Text mt={1} fontSize={14} lineHeight={1.55} opacity={0.75}>
              Founded an independent venture in creative direction and digital experiences, with 1.9M+ views.
            </Text>
            <Text mt={3} fontSize={14} lineHeight={1.55} fontStyle="italic" opacity={0.75}>
              Happy to share more about building it in an interview.
            </Text>
          </Box>
        </Section>
      
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
