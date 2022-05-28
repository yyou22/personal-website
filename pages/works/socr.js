import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="socr">
    <Container>
      <Title>
        SOCR - Big Data <Badge>2019 - 2020</Badge>
      </Title>
      <P>
        The {' '}
        <Link href="https://www.socr.umich.edu/" scroll={false}>
          <Link>Statistics Online Computational Resource</Link>
        </Link>
        &nbsp;(SOCR) designs and disseminates
        educational materials, web-services, and advanced methods/tools in probability,
        statistics, and machine learning. This is a research team led by faculties under the {' '}
        <Link href="https://mdp.engin.umich.edu/" scroll={false}>
          <Link>UMich-MDP Progam</Link>
        </Link>
        &nbsp;(University of Michigan Multidisciplinary Design Program) that
        develops enhanced analysis and visualization toolboxes with an emphasis on &quot;Big Data,&quot;
        which are large, heterogeneous, time-varying, multisource and incomplete dataset that are
        difficult to analyze and interpret in meaningful ways using classical probability,
        statistical or algorithmic appoaches.
      </P>
      <P>
        Division: {' '}
        <Link href="https://github.com/SOCR/MIMIC-Analytics" scroll={false}>
          <Link>Data Analytics - MIMIC-III</Link>
        </Link>
      </P>
      <P>
        My Role: Interrogated the {' '}
        <Link href="https://physionet.org/content/mimiciii/1.4/" scroll={false}>
          <Link>MIMIC-III</Link>
        </Link>
        &nbsp;database, a large collection of ~43,000
        critical care patients from an ICU in Boston, MA, by utilizing R/Rstudio to digest
        the vital signs, laboratory results, free-text data, and wavefroms available in this
        unique dataset and predict clinical outcomes via statistical modeling tools; developed
        advanced AI/ML dara analytics to address specific biomedical, healthcare, neuroimaging-genectics,
        and other applications.
      </P>
      <br />
      <WorkImage src="/images/works/socr0.jpg" alt="socr" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/socr2.png" alt="socr" />
        <WorkImage src="/images/works/socr3.jpg" alt="socr" />
      </SimpleGrid>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>SOCR Website</Meta>
          <Link href="https://www.socr.umich.edu/">
            https://www.socr.umich.edu/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>MDP Website</Meta>
          <Link href="https://mdp.engin.umich.edu/">
            https://mdp.engin.umich.edu/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>MIMIC-III</Meta>
          <Link href="https://physionet.org/content/mimiciii/1.4/">
            MIMIC-III Clinical Database <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Skills</Meta>
          <span>R/RStudio, Machine Learning, SQL, Quantitative Analytics</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/SOCR/MIMIC-Analytics">
            github.com/SOCR/MIMIC-Analytics <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Publication</Meta>
          <Link href="http://www.socr.umich.edu/people/dinov/courses/DSPA_notes/DSPA_Appendix_5_SQL_DB_Queries.html">
            Appendix 5: Database SQL Queries <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Keywords</Meta>
          <span>SOCR, Big Data, Data Analytics, Numerical Methods</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
