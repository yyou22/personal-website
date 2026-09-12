import { useEffect } from 'react'
import { Container, Badge, ListItem, UnorderedList, Box, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  const metaColor = useColorModeValue('day.link', undefined)

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
          Point Cloud Visibility helps users find where a landmark can be seen
          from across a city. Our tool uses ray casting on point cloud data to
          assess sightlines and show which viewpoints offer a clear view of a
          chosen point of interest. We developed it to explore how visibility
          mapping could support sightseeing, real estate, and urban planning.
        </P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition & Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Received third place and a Business Incubation Award at the Dynamic Map Platform hackathon (50,000 JPY).</ListItem>
          </UnorderedList>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Select a point of interest and explore where it is visible.</ListItem>
            <ListItem>Use ray casting to assess sightlines through an urban point cloud.</ListItem>
            <ListItem>Visualize potential viewpoints for sightseeing and planning.</ListItem>
          </UnorderedList>
        </Box>
        <WorkImage src="/images/works/point cloud/pc1.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc6.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc7.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc5.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc8.JPG" alt="point cloud" />
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
