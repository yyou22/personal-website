import { Container, Badge, Link, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  const linkColor = useColorModeValue('pink.600', 'teal.300')
  const borderColor = useColorModeValue('teal.500', 'teal.600')
  const metaColor = useColorModeValue('green.800', undefined)

  return (
  <Layout title="infovis">
    <Container>
      <Title>
        InfoVis for AI Explainability <Badge>2022</Badge>
      </Title>
      <P>
        The goal of InfoVis for AI Explainability is to design, develop, and evaluate
        visualization techniques for solving real-world data problems and gain hands-on
        experience in prototyping visualization designs. This is a course designed and instructed by
        <Link href="https://www.jeffjianzhao.com/" scroll={false}>
          <Link> Dr. Jian Zhao</Link>
        </Link>
        .
      </P>
      <br></br>
      <P>
        <b>VD1: Hello, D3!</b> is a project that includes two visualizations interactively linked together, each encodes
        three variables of the Income Evaluation Dataset. When a user hovers over a circle
        in the scatter plot, the corresponding rectangle in the bar will be highlighted,
        and vice versa. The page is built with HTML and encoded JavaScript. Both visualizations are
        rendered at real-time by reading the CSV file containing the dataset and making needed
        calculations.
      </P>
      <br></br>
      <P>
        <b>VD2: Dimensionality Reduction</b> is a project that applies various dimensionality reduction methods,
        including PCA, MDS, and t-SNE to the 10,000 test set of Fashion MNIST by projecting the high-dimensional
        data points onto a 2D plane. Python is used to pre-process the data and generate the projected coordinates, and the
        resulting visualizations is linked interactively as hovering over one dot in one visualization
        will highlight the corresponding dots in other visualizations. This is a NodeJS-based web app that can run on a
        local server.
      </P>
      <br></br>
      <P>
        <b>VD3: Adjacency Matrix v.s. Node-Link Diagram</b> is an implementation of an
        animated transition between a node-link diagram and an adjancency matrix based on the
        Les Miserables Network Dataset. Clicking a button will initiate an animated sequence in which
        the nodes of the node-link diagram will transition into the IDs of the characters and the resulted
        adjacency matrix will fade in.
      </P>
      <br />
      <WorkImage src="/images/works/infovis1.png" alt="infovis" />
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Links</Meta>
        </Box>
        <VStack align="stretch" spacing={2} mt={2} pl={2} borderLeftWidth="2px" borderColor={borderColor}>
          <Box>
            <Text as="span" fontWeight="medium" color="gray.500">VD1 (Linked Graph): </Text>
            <Link href="https://github.com/yyou22/D3-Linked-Graph" target="_blank" rel="noopener noreferrer" color={linkColor}>
              GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
          <Box>
            <Text as="span" fontWeight="medium" color="gray.500">VD2 (Dimensionality Reduction): </Text>
            <Link href="https://github.com/yyou22/D3-Dimensionality-Reduction" target="_blank" rel="noopener noreferrer" color={linkColor}>
              GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
          <Box>
            <Text as="span" fontWeight="medium" color="gray.500">VD3 (Animated Transition): </Text>
            <Link href="https://github.com/yyou22/D3-Animated-Transition" target="_blank" rel="noopener noreferrer" color={linkColor}>
              GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </VStack>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['HTML', 'JavaScript', 'D3', 'NodeJS', 'sklearn', 'pytorch'].map(item => (
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
          {['HCI', 'Data Visualization', 'AI Explainability', 'Machine Learning'].map(item => (
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
