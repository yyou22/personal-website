import YouTubePreview from '../../components/youtube-preview'
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
  const linkColor = useColorModeValue('day.link', 'teal.300')
  const borderColor = useColorModeValue('day.strongBorder', 'teal.600')
  const panelBackground = useColorModeValue('day.surface', undefined)
  const metaColor = useColorModeValue('day.link', undefined)

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
            <Meta>Recognition &amp; Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>
              Accepted to ACM UIST 2026.
            </ListItem>
            <ListItem>
              Presented at Adobe Summit Sneaks 2026, selected as one of seven
              projects from more than 500 submissions. I was the event&apos;s
              only intern presenter.{' '}
              <Link href={adobeUrl} isExternal>
                Read the Adobe Research feature <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              Technology transfer into Adobe products is currently in progress.
            </ListItem>
            <ListItem>
              Covered by multiple press and news outlets.{' '}
              <Link href="/press#project-coverage">
                Explore Project Test Kitchen press coverage
              </Link>
              .
            </ListItem>
          </UnorderedList>
        </Box>

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
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
          sidePadding={{ base: 3, md: 5 }}
        />
        <WorkImage
          src="/images/works/test-kitchen/comedy-poster-workflow.png"
          alt="Surprise2Refine comedy poster design: a moodboard guides exploration along art style and composition axes, followed by zooming, anchoring, and decomposition to create the final poster."
          caption="From a moodboard to a finished comedy poster: exploration and refinement in Surprise2Refine."
        />

        <Box display="grid" gap={4} mt={6}>
          <WorkImage
            src="/images/works/test-kitchen/iliza-live-demo.jpg"
            alt="Iliza Shlesinger trying Project Test Kitchen on stage, with the generated poster designs displayed behind her."
            caption="Comedian Iliza Shlesinger trying Project Test Kitchen live at Adobe Summit Sneaks 2026."
          />
          <WorkImage
            src="/images/works/test-kitchen/summit-stage-demo.png"
            alt="Yuzhe You presenting Project Test Kitchen at the podium during Adobe Summit Sneaks 2026."
            caption="Presenting Project Test Kitchen at Adobe Summit Sneaks 2026."
          />
        </Box>

        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Adobe Summit Demo</Meta>
          </Box>
          <Text mt={2}>
            Watch Project Test Kitchen in action! I presented it live at Adobe
            Summit Sneaks 2026, where comedian Iliza Shlesinger tried it out on
            stage.
          </Text>
          <AspectRatio
            ratio={16 / 9}
            mt={3}
            borderRadius="lg"
            overflow="hidden"
          >
            <YouTubePreview videoId="HPjwlZ6knHg" title="Project Test Kitchen — Adobe Summit Sneaks 2026" maxW="600px" />
          </AspectRatio>

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
              Surprise2Refine paper <ExternalLinkIcon mx="1px" />
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
