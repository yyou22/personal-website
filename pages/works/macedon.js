import {
  Container,
  Badge,
  ListItem,
  UnorderedList,
  Link,
  Box,
  VStack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
  Tag
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const project = {
  slug: 'macedon',
  title: 'MACEDON',
  year: '2025',
  intro:
    'MACEDON is a Visual Studio Code extension that helps programmers understand and improve code with LLM assistance. It combines real-time evaluation across multiple dimensions with targeted suggestions for selected code segments, making changes easier to assess as the code evolves.',
  recognition:
    'Published at ACM UIST 2025. Evaluated with 24 novice programmers and two real-world case studies.',
  features: [
    'Evaluate clarity, redundancy, documentation, time efficiency, and space efficiency.',
    'Select code segments and apply focused optimization suggestions.',
    'Review evolving code quality and share evaluation reports.'
  ],
  images: [
    {
      src: '/images/publications/macedon.png',
      alt: 'MACEDON interface with code, evaluation scores, and targeted optimization suggestions.',
      caption:
        'Code evaluation and optimization in MACEDON. Figure 2, Liu et al., UIST 2025.'
    },
    {
      src: '/images/works/macedon/example.png',
      alt: 'A sorting program before and after optimization with MACEDON.',
      caption:
        'An example of code refinement guided by MACEDON. Figure 4, Liu et al., UIST 2025.'
    },
    {
      src: '/images/works/macedon/participant-feedback.png',
      alt: 'Participant responses about MACEDON’s ease of use, recommendations, and interest in using it again.',
      caption:
        'What 24 participants thought after trying MACEDON. Figure 3, Liu et al., UIST 2025.'
    }
  ],
  links: [
    {
      label: 'Paper Link',
      href: 'https://dl.acm.org/doi/full/10.1145/3746059.3747655'
    },
    {
      label: 'Read the paper PDF',
      href: 'https://www.wvisdomlab.com/papers/macedon.pdf'
    },
    { label: 'Project code', href: 'https://github.com/xuyeliu/MACEDON' }
  ],
  keywords: [
    'Human-Computer Interaction',
    'Code Optimization',
    'Large Language Models',
    'Programming Interfaces'
  ],
  authors: 'Xuye Liu, Yuzhe You, Xinrong Qiu, Tengfei Ma, Jian Zhao'
}

const Work = () => {
  const linkColor = useColorModeValue('pink.600', 'teal.300')
  const borderColor = useColorModeValue('teal.500', 'teal.600')
  const metaColor = useColorModeValue('green.800', undefined)
  return (
    <Layout title={project.title}>
      <Container>
        <Title>
          {project.title} <Badge>{project.year}</Badge>
        </Title>
        <P>{project.intro}</P>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Recognition &amp; Outreach</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            <ListItem>{project.recognition}</ListItem>
          </UnorderedList>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Core Features</Meta>
          </Box>
          <UnorderedList mt={2} pl={6}>
            {project.features.map(feature => (
              <ListItem key={feature}>{feature}</ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Box display="grid" gap={4}>
          {project.images.map(image => (
            <WorkImage
              key={image.src}
              {...image}
              sidePadding={{ base: 3, md: 5 }}
              verticalPadding={{ base: 3, md: 5 }}
            />
          ))}
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
            {project.links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                isExternal
                color={linkColor}
                fontWeight="semibold"
              >
                {link.label} <ExternalLinkIcon mx="1px" />
              </Link>
            ))}
          </VStack>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Keywords</Meta>
          </Box>
          <Wrap spacing={2} mt={2}>
            {project.keywords.map(keyword => (
              <WrapItem key={keyword}>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme="teal"
                  borderRadius="full"
                  px={4}
                  py={1}
                >
                  {keyword}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box my={4}>
          <Box as="span" color={metaColor}>
            <Meta>Authors</Meta>
          </Box>
          <Text mt={2}>{project.authors}</Text>
        </Box>
      </Container>
    </Layout>
  )
}
export default Work
export { getServerSideProps } from '../../components/chakra'
