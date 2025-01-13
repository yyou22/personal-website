import { useEffect } from 'react'
import { Container, List, ListItem, UnorderedList } from '@chakra-ui/react'
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
    <Layout title="Art & Illustration">
      <Container>
        <Title>
        Art & Illustration
        </Title>
        <P>
        Art and design have always been central to my creative journey. 
        Starting with traditional techniques like charcoal, acrylics, and watercolor, I attended the Rhode Island School of Design&apos;s pre-college program in 2015, where three of my artworks were selected for exhibition. 
        Recently, I&apos;ve shifted my focus to digital art, graphic design, and UI/UX design, combining my artistic foundation with modern tools. 
        While my coding and research projects don&apos;t explicitly showcase my art, you can still see the impact of my design background in how I approach and present my work.
        </P>
        <UnorderedList my={4}>
        <Meta>Recognition & Outreach</Meta>
        <ListItem>
          Three artworks exhibited at Rhode Island School of Design (RISD) Exhibition in 2015
        </ListItem>
        <ListItem>
          Six artworks featured in University of Michigan's Blueprint Literary Magazine (2018&ndash;2019)
        </ListItem>
        </UnorderedList>
        <WorkImage src="/images/works/art/art1.png" alt="art" />
        <WorkImage src="/images/works/art/art3.png" alt="art" />
        <WorkImage src="/images/works/art/art2.png" alt="art" />
        <WorkImage src="/images/works/art/art4.png" alt="art" />
        <WorkImage src="/images/works/art/art5.png" alt="art" />
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Skills</Meta>
            <span>Painting, Drawing, Art, Illustration, Watercolor, Charcoal</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
