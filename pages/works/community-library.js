import {
  Badge,
  Box,
  Container,
  Link,
  ListItem,
  Tag,
  Text,
  UnorderedList,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { cv } from '../../lib/cv'

const paperUrl =
  'https://www.microsoft.com/en-us/research/publication/engaging-communities-meaningfully-in-defining-disability-representation-for-ai-image-generation/'
const paper = cv.publications.find(publication => publication.href === paperUrl)

const CommunityLibrary = () => {
  const linkColor = useColorModeValue('day.link', 'teal.300')
  const borderColor = useColorModeValue('day.strongBorder', 'teal.600')
  const panelBackground = useColorModeValue('day.surface', undefined)
  const metaColor = useColorModeValue('day.link', undefined)

  return (
    <Layout title="Community Library Creator — Microsoft Research">
      <Container>
        <Title>
          Community Library Creator <Badge>2025–2026</Badge>
        </Title>
        <Text mb={4} fontWeight="medium" color={linkColor}>
          Microsoft Research
        </Text>
        <P>
          Community Library Creator supports disability communities in
          defining good representation and curating images that reflect their
          perspectives. Developed through three months of collaboration with
          three disability organizations across the Global North and South,
          the project explores how community-led data practices can inform the
          evaluation and future adaptation of AI image-generation models.
        </P>
        <Box mt={3}>
          <P>
            During my Microsoft Research internship in 2025, I helped implement
            and iterate on multiple versions of the Community Library, analyzed
            workshop data through visualizations, and participated in workshops
            with the partner disability organizations.
          </P>
        </Box>

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition &amp; Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>
              Published at the ACM CHI Conference on Human Factors in Computing
              Systems, 2026.{' '}
              <Link href={paperUrl} isExternal>
                Paper Link <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>
              Photo pinboards and magazine activities help communities
              articulate what meaningful representation looks like.
            </ListItem>
            <ListItem>
              Community libraries organize selected images and annotations.
            </ListItem>
            <ListItem>
              AI image evaluation brings community perspectives into assessments
              of generated representations.
            </ListItem>
          </UnorderedList>
        </Box>

        <WorkImage
          src="/images/publications/community-library.png"
          alt="Community Library Creator: defining representation, curating image libraries, and evaluating AI images, supported by community feedback."
          caption="Community Library Creator workflow. Figure 2, Thieme et al., CHI 2026."
        />
        <Box display="grid" gap={4} mt={5}>
          <WorkImage
            src="/images/works/community-library/photo-pinboard.png"
            alt="Photo Pinboard interface with a collection of images selected to represent a disability community."
            caption="Defining representation through a community-curated photo pinboard. Figure 6, Thieme et al., CHI 2026."
          />
          <WorkImage
            src="/images/works/community-library/image-evaluation.png"
            alt="AI image evaluation interface with a text prompt, generated classroom image, rating choices, and a comment field."
            caption="Evaluating generated images against community-defined representation. Figure 5, Thieme et al., CHI 2026."
          />
        </Box>

        <Box
          my={4}
          p={3}
          borderWidth="1px"
          borderColor={borderColor} bg={panelBackground}
          borderRadius="md"
        >
          <Meta>Links</Meta>
          <VStack align="stretch" spacing={3} mt={2}>
            <Link
              href={paperUrl}
              isExternal
              color={linkColor}
              fontWeight="semibold"
            >
              Paper Link <ExternalLinkIcon mx="1px" />
            </Link>
            <Text fontSize="sm">{paper.title}</Text>
          </VStack>
        </Box>

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Keywords</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {[
              'Human-Computer Interaction',
              'Accessibility',
              'Generative AI',
              'Disability Representation',
              'Community-Led Data Curation'
            ].map(item => (
              <WrapItem key={item}>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme="teal"
                  borderRadius="full"
                  px={4}
                  py={1}
                >
                  {item}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Authors</Meta>
          </Box>
          <Text mt={2}>{paper.authors}</Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default CommunityLibrary
export { getServerSideProps } from '../../components/chakra'
