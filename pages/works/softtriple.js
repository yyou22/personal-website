import { Container, Badge, Link, List, ListItem, UnorderedList, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  const linkColor = useColorModeValue('pink.600', 'teal.300')
  const borderColor = useColorModeValue('teal.500', 'teal.600')
  const metaColor = useColorModeValue('green.800', undefined)

  return (
  <Layout title="softtriple">
    <Container>
      <Title>
        BaselineST(+) <Badge>2022</Badge>
      </Title>
      <P>
        BaselineST isn a novel machine learning model that incorporates the
        SoftTriple loss into existing distance metric learning techniques
        to elevate the state-of-the-art baseline performance in few-shot classification.
      </P>
      <P>
        In this model, a feature extractor and a Baseline++ classifier is trained from scratch with
        a hybrid loss function that combines the SoftTriple loss and standard cross-entropy
        loss. The goal is to improve model performance by capturing the hidden distribution of
        the dataset by reducing the intra-class variance, as each class is assigned multiple representative
        centers rather than one from the conventional SoftMax loss function.
        In the fine-tuning stage, the general structure from Baseline++ is retained and a
        new classifier is trained and fine-turned with the labeled examples from the support set.
        The model is evaluated in tasks such as image classification (with {' '}
        <Link href="https://paperswithcode.com/dataset/cub-200-2011" scroll={false}>
          <Link>CUB-200-2011 dataset</Link>
        </Link>)
        and cross-domain character recognition ({''}
        <Link href="https://github.com/brendenlake/omniglot" scroll={false}>
          <Link>Omniglot</Link>
        </Link> -&gt;&nbsp;
        <Link href="https://paperswithcode.com/dataset/emnist" scroll={false}>
          <Link>EMNIST</Link>
        </Link>).
      </P>
      <P>
        An alternative model, denoted as BaselineST+, is also investigated in the Appendix section
        of the paper. In BaselineST+, a classifier is built with the SoftTriple loss by summing up
        the resulting weights of each centroid from the same class, which is then fed through a
        SoftMax function to finalize the probability for each class.
      </P>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Links</Meta>
        </Box>
        <VStack align="stretch" spacing={2} mt={2} pl={2} borderLeftWidth="2px" borderColor={borderColor}>
          <Box>
            <Text as="span" fontWeight="medium" color="gray.500">Code: </Text>
            <Link href="https://github.com/yyou22/FewShotSoftTriple" target="_blank" rel="noopener noreferrer" color={linkColor}>
              GitHub – FewShotSoftTriple <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </VStack>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Core Features</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Incorporates SoftTriple loss into existing distance metric learning techniques.</ListItem>
          <ListItem>Trained a feature extractor and a classifier from scratch and fine-tuned the model with support set.</ListItem>
          <ListItem>Evaluated model performance in image classification and cross-domain character recognition.</ListItem>
          <ListItem>Reproduced and re-evaluated the experimental results of Baseline++.</ListItem>
          <ListItem>Investigated an alternative model that performed few-shot classification based on SoftTriple loss only.</ListItem>
        </UnorderedList>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['Python3', 'Pytorch', 'Machine Learning'].map(item => (
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
          {['Image Classification', 'Few-shot Classification', 'Distance Metric Learning', 'Convolution Network', 'Cross-Domain Character Recognition'].map(item => (
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
