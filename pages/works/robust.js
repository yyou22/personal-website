import { Container, Badge, Link, List, ListItem, UnorderedList, } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
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
      <UnorderedList my={4}>
        <Meta>Core Features</Meta>
        <ListItem>Gradient-based iterative approach</ListItem>
        <ListItem>Evasion attack designed to fool state-of-the-art classifier</ListItem>
        <ListItem>Investigation of self-supervised learning methods to enhance robustness</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Python3, Pytorch, Adversarial Machine Learning, Evasion Attack</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/yyou22/TRADES">
            github.com/yyou22/TRADES <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>Machine Learning, Adversarial Attack, Self-supervised Learning</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
