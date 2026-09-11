import {
  AspectRatio,
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

const paperUrl = 'https://arxiv.org/abs/2608.12605'
const adobeUrl =
  'https://research.adobe.com/news/adobe-research-intern-follows-her-mentors-footsteps/'

const Work = () => {
  const linkColor = useColorModeValue('pink.600', 'teal.300')
  const borderColor = useColorModeValue('teal.500', 'teal.600')
  const metaColor = useColorModeValue('green.800', undefined)

  return (
    <Layout title="Project Test Kitchen / Surprise2Refine">
      <Container>
        <Title>
          Project Test Kitchen <Badge>2026</Badge>
        </Title>
        <Text mb={4} fontWeight="medium" color={linkColor}>
          Adobe Research
        </Text>
        <P>
          Project Test Kitchen is my Adobe Research internship project,
          presented at Adobe Summit Sneaks 2026. It uses a novel axis-centered
          approach to dynamically adjust the design space as designers move from
          broad exploration to focused refinement. Starting from prompts,
          reference images, and sketches, designers work with an AI agent to
          compare and evolve ideas along meaningful design dimensions. The
          research prototype is called{' '}
          <Link href={paperUrl} isExternal>
            Surprise2Refine
          </Link>
          .
        </P>

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>My Role</Meta>
          </Box>
          <Text mt={2}>
            Research intern at Adobe Research and first author of
            Surprise2Refine. I developed the prototype with mentorship from
            Tongyu Zhou and collaborated with Adobe designers to bring it to the
            Summit stage as Project Test Kitchen.
          </Text>
        </Box>

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition &amp; Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6} spacing={2}>
            <ListItem>
              <Link href={paperUrl} isExternal>
                Surprise2Refine accepted to ACM UIST 2026{' '}
                <ExternalLinkIcon mx="2px" />
              </Link>
              .
            </ListItem>
            <ListItem>
              Presented at Adobe Summit Sneaks 2026, selected as one of seven
              projects from more than 500 submissions. I was the event&apos;s
              only intern presenter.{' '}
              <Link href={adobeUrl} isExternal>
                Read the Adobe Research feature <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6} spacing={2}>
            <ListItem>
              A moodboard captures visual references, sketches, and notes to
              guide generation.
            </ListItem>
            <ListItem>
              Two editable conceptual axes organize design variations in a grid.
            </ListItem>
            <ListItem>
              Zooming generates closer variations of a chosen design.
            </ListItem>
            <ListItem>
              Anchoring blends preferred designs into new alternatives.
            </ListItem>
            <ListItem>
              Decomposition extracts reusable visual elements and color palettes
              for further refinement.
            </ListItem>
          </UnorderedList>
        </Box>

        <WorkImage
          src="/images/works/test-kitchen/workflow.png"
          alt="Surprise2Refine workflow: a moodboard and conceptual axes guide exploration, followed by zooming, anchoring, and decomposition."
          caption="Exploration and refinement in Surprise2Refine. Figure 1, You et al., 2026."
        />
        <WorkImage
          src="/images/works/test-kitchen/refinement.png"
          alt="A diverse grid of poster designs becomes a focused set of variations through the zooming interaction."
          caption="Zooming into a design to explore smaller variations. Figure 4, You et al., 2026."
        />

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Evaluation</Meta>
          </Box>
          <Text mt={2}>
            A formative study with five designers informed the workflow. In a
            comparative study with 14 designers, participants reported greater
            control, clearer tracking of design decisions, and improved
            perceived creativity.{' '}
            <Link href={paperUrl} isExternal>
              Read the study <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
        </Box>

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Adobe Summit Demo</Meta>
          </Box>
          <AspectRatio
            ratio={16 / 9}
            mt={3}
            borderRadius="lg"
            overflow="hidden"
          >
            <iframe
              src="https://www.youtube.com/embed/HPjwlZ6knHg"
              title="Project Test Kitchen — Adobe Summit Sneaks 2026"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 0 }}
            />
          </AspectRatio>
        </Box>

        <Box
          my={4}
          p={3}
          borderWidth="1px"
          borderColor={borderColor}
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
              Surprise2Refine paper <ExternalLinkIcon mx="1px" />
            </Link>
            <Link
              href="https://doi.org/10.1145/3830398.3830612"
              isExternal
              color={linkColor}
              fontWeight="semibold"
            >
              ACM publication <ExternalLinkIcon mx="1px" />
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=HPjwlZ6knHg"
              isExternal
              color={linkColor}
              fontWeight="semibold"
            >
              Watch Project Test Kitchen <ExternalLinkIcon mx="1px" />
            </Link>
            <Link
              href={adobeUrl}
              isExternal
              color={linkColor}
              fontWeight="semibold"
            >
              Adobe Research feature <ExternalLinkIcon mx="1px" />
            </Link>
          </VStack>
        </Box>

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Keywords</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {[
              'Human-AI Co-Creation',
              'Generative AI',
              'Creative Scaffolding',
              'Interaction Design',
              'AI Agents'
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
          <Text mt={2}>
            Yuzhe You, Gromit Yeuk-Yin Chan, Shunan Guo, Anlan Zhang, Eunyee
            Koh, Jian Zhao, Tongyu Zhou
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
