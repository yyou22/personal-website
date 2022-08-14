import { Container, Badge, Link, List, ListItem, UnorderedList, } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage,Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="fgsm">
    <Container>
      <Title>
        FGSM Explainer <Badge>2022</Badge>
      </Title>
      <P>
        The FGSM Explainer is an on-going project in which we design and implement an
        interactive web-based visualization software that demonstrates the underlying logic and consequences of
        FGSM Attack, a gradient-based white-box attack in Adversarial Machine Learning (AML), while simultaneously performs
        data analytics and model performance analysis.
      </P>
      <P>
        The primary objective of our study is to explore how visualizations can help machine learning practitioners
        understand the underlying logic of adversarial attacks. Especially, we aim to explore for practitioners
        with limited background in AML, how effectively can visualizations highlight and explain
        the adversarial images, as they tend to be imperceptible to human eyes but can fool state-of-the-art classifiers.
      </P>
      <br />
      <WorkImage src="/images/works/demo.png" alt="fgsm" />
      <WorkImage src="/images/works/demo2.png" alt="fgsm" />
      <UnorderedList my={4}>
        <Meta>Core Features</Meta>
        <ListItem>An Interactive Visualization of FGSM Attack</ListItem>
        <ListItem>Provide data analytics and model performance analysis in parallel</ListItem>
        <ListItem>Demonstrate the underlying logic and consequences of adversarial attacks via animated sequences</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Python3, Pytorch, Sklearn, Adversarial Machine Learning, Evasion Attack, D3, JavaScript, HTML</span>
        </ListItem>
        <ListItem>
          <Meta>Source (Data Preparation)</Meta>
          <Link href="https://github.com/yyou22/FGSM-Attack-with-VGG-Models">
            github.com/yyou22/FGSM-Attack-with-VGG-Models <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>HCI, Information Visualization, FGSM Attack, Adversarial ML</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
