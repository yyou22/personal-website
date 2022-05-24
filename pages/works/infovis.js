import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="infovis">
    <Container>
      <Title>
        InfoVis for AI Explainability <Badge>2022</Badge>
      </Title>
      <P>
        The goal of InfoVis for AI Explainability is to design, develop, and evaluate
        visualization techniques for solving real-world data problems and gain hands-on
        experience in prototyping visualization designs.
      </P>
      <P>
        <b>VD1: Hello, D3!</b> is a project that includes two visualizations interactively linked together, each encodes
        three variables of the Income Evaluation Dataset. When a user hovers over a circle
        in the scatter plot, the corresponding rectangle in the bar will be highlighted,
        and vice versa. The page is built with HTML and encoded JavaScript. Both visualizations are
        rendered at real-time by reading the CSV file containing the dataset and making needed
        calculations.
      </P>
      <P>
        <b>VD2: Dimensionality Reduction</b> is a project that applies various dimensionality reduction methods,
        including PCA, MDS, and t-SNE to the 10,000 test set of Fashion MNIST by projecting the high-dimensional
        data points onto a 2D plane. Python is used to pre-process the data and generate the projected coordinates, and the
        resulting visualizations is linked interactively as hovering over one dot in one visualization
        will highlight the corresponding dots in otehr visualizations. This is a NodeJS-based web app that can run on a
        local server.
      </P>
      <P>
        <b>VD3: Adjacency Matrix v.s. Node-Link Diagram</b> is an implementation of an
        animated transition between a node-link diagram and an adjancency matrix based on the
        Les Miserables Network Dataset. Clicking a button will initiate an animated sequence in which
        the nodes of the node-link diagram will transition into the IDs of the characters and the resulted
        adjacency matrix will fade in.
      </P>
      <br />
      <WorkImage src="/images/works/infovis1.png" alt="infovis" />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>HTML, JavaScript, D3, NodeJS, sklearn, pytorch</span>
        </ListItem>
        <ListItem>
          <Meta>Source VD1</Meta>
          <Link href="https://github.com/yyou22/D3-Linked-Graph">
            github.com/yyou22/D3-Linked-Graph <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source VD2</Meta>
          <Link href="https://github.com/yyou22/D3-Dimensionality-Reduction">
            github.com/yyou22/D3-Dimensionality-Reduction <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>HCI, Data Visualization, AI Explainability, Machine Learning</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
