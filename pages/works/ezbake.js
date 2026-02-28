import { Container, Badge, List, ListItem, UnorderedList} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ezBake">
    <Container>
      <Title>
        ezBake <Badge>2019</Badge>
      </Title>
      <P>
        EzBake is a complex software implemented from scratch in C++ that automates
        quality testing of camera lenses by communicating with a thermal chamber via
        Modbus Protocol.
      </P>
      <P>
        A separate interactive software is scripted in MATLAB that assists in developing and visualizing
        complex graphical charts and testing camera controls by extracting and manipulating the
        data from the thermal chamber. The goal is to simplify the process of quality control and
        provide visualizations of data that are easy to understand for potential clients.
      </P>

      <UnorderedList my={4}>
        <Meta>Core Features</Meta>
        <ListItem>Automate and simplify camera lenses quality testing.</ListItem>
        <ListItem>Communicate with the testing chamber via Modbus Protocol.</ListItem>
        <ListItem>Generate data visualizations that are easy to comprehend.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>C++, MATLAB, Data Visualization, HCI</span>
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>Software Development, Automated Quality Testing</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ezbake1.JPG" alt="ezbake" />
      <WorkImage src="/images/works/ezbake2.JPG" alt="ezbake" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
