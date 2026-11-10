import { AspectRatio, Box, Container, ListItem, UnorderedList, Text, Wrap, WrapItem, Tag, useColorModeValue } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import YouTubePreview from '../../components/youtube-preview'

const Piano = () => {
  const captionColor = useColorModeValue('day.subtle', 'gray.500')
  const metaColor = useColorModeValue('day.link', undefined)

  return (
    <Layout title="Piano">
      <Container>
        <Title>Piano</Title>
        <Paragraph>
          I recently returned to the piano after more than 10 years away.
          Here is a glimpse of what I&apos;m playing as I find my way back to the instrument.
        </Paragraph>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Musical Background</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>
            In 2013, I earned the Shanghai Conservatory of Music Grade 10 Piano
            certificate (上海音乐学院钢琴十级), the highest numbered level in
            its graded music examination system. The exam assesses both
            technical skills and the ability to perform a set repertoire.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box as="figure" mx={0} my={4}>
          <AspectRatio ratio={16 / 9} w="full" borderRadius="lg" overflow="hidden">
            <YouTubePreview
            videoId="JBXyzqtB8FI"
            title="My piano performance of the Succession main title"
            thumbnailSrc="https://i.ytimg.com/vi/JBXyzqtB8FI/frame0.jpg"
            thumbnailPosition="center bottom"
            borderRadius="lg"
            />
          </AspectRatio>
          <Text as="figcaption" mt={3} fontSize="sm" lineHeight={1.6} textAlign="center" color={captionColor}>
            My piano performance of the main title from HBO&apos;s <i>Succession</i>.
          </Text>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Skills</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {['Piano', 'Music Performance'].map(item => (
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

export default Piano
