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
      NavEaz is our AI-powered smartwatch app built to help drivers stay focused behind the wheel. 
      It tracks physiological signals like heart rate and electrodermal activity in real time and uses a machine-learning model 
      that combines CNNs and LSTMs, developed and tested by our team, to detect signs of fatigue, drowsiness, and other forms of impairment. 
      Instead of only reacting once attention drops, NavEaz looks for patterns that suggest a driver’s focus may slip in the next 5 to 15 minutes, 
      giving them an early nudge to refocus before the situation becomes risky.
      </P>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Recognition & Outreach</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Selected to be presented at Transport Canada/NRC Community of Practice (CoP) workshop, Oct 2024.</ListItem>
          <ListItem>Received an Innovation Design Award from ICACHI (5,000 RMB).</ListItem>
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
          <Meta>Core Features</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Real-time monitoring and prediction of driver impairment using AI based on physiological signals.</ListItem>
          <ListItem>Integration with non-invasive smartwatch sensors for non-intrusive driver assistance.</ListItem>
          <ListItem>Generative AI dynamically tailors responses, such as suggesting rest breaks or playing music.</ListItem>
        </UnorderedList>
      </Box>
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
