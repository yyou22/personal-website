import { Container, Badge, ListItem, UnorderedList, Box, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  const metaColor = useColorModeValue('green.800', undefined)

  return (
  <Layout title="naveaz">
    <Container>
      <Title>
        NavEaz <Badge>2024</Badge>
      </Title>
      <P>
        NavEaz is a smartwatch app our team developed to explore early signs of
        driver impairment. It uses heart rate and electrodermal activity
        (changes in the skin&apos;s electrical conductance) to track patterns
        associated with fatigue and drowsiness. Our machine learning model
        combines convolutional and recurrent networks to detect these patterns
        and estimate changes in attention over the next 5 to 15 minutes, with
        the goal of providing earlier support to drivers.
      </P>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Recognition & Outreach</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Selected for presentation at the Transport Canada/NRC Community of Practice workshop in October 2024.</ListItem>
          <ListItem>Received an Innovation Design Award from ICACHI (5,000 RMB).</ListItem>
        </UnorderedList>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Core Features</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Track physiological signals through smartwatch sensors.</ListItem>
          <ListItem>Use these signals to estimate current and upcoming changes in driver attention.</ListItem>
          <ListItem>Use generative AI to tailor responses, such as suggesting a rest break or playing music.</ListItem>
        </UnorderedList>
      </Box>
      <WorkImage src="/images/works/naveaz1.png" alt="naveaz" />
      <WorkImage src="/images/works/naveaz4.png" alt="naveaz" />
      <WorkImage src="/images/works/naveaz5.png" alt="naveaz" />
      <WorkImage src="/images/works/naveaz2.png" alt="naveaz" />
      <WorkImage src="/images/works/naveaz3.png" alt="naveaz" />
      <WorkImage src="/images/works/naveaz6.png" alt="naveaz" />
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['Python', 'Machine Learning', 'Real-Time Data Analysis', 'Generative AI', 'PPG & EDA Analysis', 'Electrodermal Activity Monitoring', 'Wearable Technology'].map(item => (
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
          {['HCI', 'Driver Safety', 'Predictive AI', 'Real-Time Monitoring', 'Wearable Tech', 'Generative AI'].map(item => (
            <WrapItem key={item}>
              <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Team Members</Meta>
        </Box>
        <Text mt={2}>Yuzhe You, Yubo Jiao, Ce Zhang, Michael Brazeau</Text>
      </Box>

    </Container>
  </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
