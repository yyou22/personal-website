import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
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
        The model is evaluated in tasks such as image classification (with CUB-200-2011 dataset)
        and cross-domain character recognition (Omniglot -> EMNIST).
      </P>
      <P>
        An alternative model, denoted as BaselineST+, is also investigated in the Appendix section
        of the paper. In BaselineST+, a classifier is built with the SoftTriple loss by summing up
        the resulting weights of each centroud from the same class, whic is then fed through a
        SoftMax function to finalize the proabibility for eac class.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Python3, Pytorch, Machine Learning</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/yyou22/FewShotSoftTriple">
            github.com/yyou22/FewShotSoftTriple <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>Image Classification, Few-shot Classification, Distance Metric Learning,
          Convolution Network, Cross-Domain Character Recognition</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
