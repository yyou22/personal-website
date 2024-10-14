import { useEffect } from 'react'
import { Container, Badge, List, ListItem, UnorderedList,} from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
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
        <UnorderedList my={4}>
          <Meta>Recognition & Outreach</Meta>
          <ListItem>
          Received Business Incubation Award (3rd Place) in a Hackathon hosted by Dynamic Map Platform Co. (50,000 JPY).
          </ListItem>
        </UnorderedList>
        <WorkImage src="/images/works/point cloud/pc1.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc6.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc7.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc5.png" alt="point cloud" />
        <WorkImage src="/images/works/point cloud/pc8.JPG" alt="point cloud" />
        <UnorderedList my={4}>
          <Meta>Core Features</Meta>
          <ListItem>Provides visibility assessments of Points of Interest (POIs) in urban landscapes using point cloud data.</ListItem>
          <ListItem>Employs ray-casting techniques for accurate viewpoint analysis and visibility mapping.</ListItem>
          <ListItem>Offers valuable insights for tourism, real estate, and urban planning professionals.</ListItem>
        </UnorderedList>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Skills</Meta>
            <span>Point Cloud Data, Ray-Casting, 3D Visualization, Urban Planning, 3D Rendering</span>
          </ListItem>
          <ListItem>
            <Meta>Team Members</Meta>
            Ryoto Miyake, Yuzhe You, Ce Zhang
          </ListItem>
          <ListItem>
            <Meta>Keywords</Meta>
            <span>Point Cloud, Urban Landscape, 3D Visualization, Visibility Assessment, Ray-Casting, Tourism Experience</span>
          </ListItem>
        </List>

      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
