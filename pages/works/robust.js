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
  <Layout title="robust">
    <Container>
      <Title>
        Robustness in Machine Learning <Badge>2022</Badge>
      </Title>
      <P>
        Adversarial robustness refers to the robustness of models against the
        &quot;worst-case&quot; attacks. The goal is to explore potential methods that
        enhance the robustness of machine learning with a special emphasis on defense against adversarial examples.
      </P>
      <P>
        <b>Attack on TRADES</b> is a project where we design our own evasion attack to
        fool TRADES, the state-of-the-art method for training an adversarially robust deep
        neural networks. Our attack utilizes a gradient-based approach with an iterative method
        that includes randomization in each step. The attack achieves a robust accuracy of
        95.1% on the MNIST dataset (6th place on leaderboard) and a robust accuracy of
        54.65% on the CIFAR-10 dataset (9th place on leaderboard).
      </P>
      <P>
        Currently, we are working on another project where we investigate the feasibility of
        incorporating self-supervised learning methods into the pre-training stage of a model to
        further enhance its robustness against adversarial examples.
      </P>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Links</Meta>
        </Box>
        <VStack align="stretch" spacing={2} mt={2} pl={2} borderLeftWidth="2px" borderColor={borderColor}>
          <Box>
            <Text as="span" fontWeight="medium" color="gray.500">Code: </Text>
            <Link href="https://github.com/yyou22/TRADES" target="_blank" rel="noopener noreferrer" color={linkColor}>
              GitHub – TRADES <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </VStack>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Core Features</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>Gradient-based iterative approach.</ListItem>
          <ListItem>Evasion attack designed to fool state-of-the-art classifier.</ListItem>
          <ListItem>Investigation of self-supervised learning methods to enhance robustness.</ListItem>
        </UnorderedList>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['Python3', 'Pytorch', 'Adversarial Machine Learning', 'Evasion Attack'].map(item => (
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
          {['Machine Learning', 'Adversarial Attack', 'Self-supervised Learning'].map(item => (
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
