import { useEffect } from 'react'
import { Container, ListItem, UnorderedList, Box, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
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
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition & Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>Three artworks exhibited at Rhode Island School of Design (RISD) Exhibition in 2015.</ListItem>
            <ListItem>Six artworks featured in University of Michigan&apos;s Blueprint Literary Magazine (2018&ndash;2019).</ListItem>
          </UnorderedList>
        </Box>
        <WorkImage src="/images/works/art/art1.png" alt="art" />
        <WorkImage src="/images/works/art/art3.png" alt="art" />
        <WorkImage src="/images/works/art/art2.png" alt="art" />
        <WorkImage src="/images/works/art/art4.png" alt="art" />
        <WorkImage src="/images/works/art/art5.png" alt="art" />
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Skills</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['Painting', 'Drawing', 'Art', 'Illustration', 'Watercolor', 'Charcoal'].map(item => (
              <WrapItem key={item}>
                <Tag size="md" variant="subtle" colorScheme="teal" borderRadius="full" px={4} py={1}>{item}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
