import { useEffect } from 'react'
import { Container, Badge, ListItem, UnorderedList, Box, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  const metaColor = useColorModeValue('green.800', undefined)

  useEffect(() => {
    // Load any necessary scripts for external components
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <Layout title="Point Cloud Visibility">
      <Container>
        <Title>
          Point Cloud Visibility <Badge>2024</Badge>
        </Title>
        <P>
          Our project &quot;Exploring Urban Landscapes: A Point Cloud-based Tourist Experience&quot; focuses on improving the tourist experience by providing a visibility assessment software for urban landscapes using point cloud data. 
          By employing ray-casting techniques, our point cloud application allows users to explore the visibility of Points of Interest (POIs) in a city. Our tool analyzes and visualizes where a specific POI is visible from across the city, 
          providing tourists, real estate professionals, and urban planners with insights into optimal viewpoints and visibility conditions.
        </P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition & Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Received Business Incubation Award (3rd Place) in a Hackathon hosted by Dynamic Map Platform Co. (50,000 JPY).</ListItem>
          </UnorderedList>
        </Box>
        <WorkImage src="/images/works/point cloud/pc1.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc6.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc7.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc5.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc8.JPG" alt="point cloud" />
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Provides visibility assessments of Points of Interest (POIs) in urban landscapes using point cloud data.</ListItem>
            <ListItem>Employs ray-casting techniques for accurate viewpoint analysis and visibility mapping.</ListItem>
            <ListItem>Offers valuable insights for tourism, real estate, and urban planning professionals.</ListItem>
          </UnorderedList>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Skills</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['Point Cloud Data', 'Ray-Casting', '3D Visualization', 'Urban Planning', '3D Rendering'].map(item => (
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
            {['Point Cloud', 'Urban Landscape', '3D Visualization', 'Visibility Assessment', 'Ray-Casting', 'Tourism Experience'].map(item => (
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
          <Text mt={2}>Ryoto Miyake, Yuzhe You, Ce Zhang</Text>
        </Box>

      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
