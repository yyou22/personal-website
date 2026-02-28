import { Container, Badge, Link, List, ListItem, SimpleGrid, UnorderedList, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  const linkColor = useColorModeValue('pink.600', 'teal.300')
  const borderColor = useColorModeValue('teal.500', 'teal.600')
  const metaColor = useColorModeValue('green.800', undefined)

  return (
  <Layout title="socr">
    <Container>
      <Title>
        SOCR - Big Data <Badge>2019 - 2020</Badge>
      </Title>
      <P>
        The {' '}
        <Link href="https://www.socr.umich.edu/" scroll={false} target="_blank" rel="noopener noreferrer">
          <Link>Statistics Online Computational Resource</Link>
        </Link>
        &nbsp;(SOCR) designs and disseminates
        educational materials, web-services, and advanced methods/tools in probability,
        statistics, and machine learning. This is a research team led by faculties under the {' '}
        <Link href="https://mdp.engin.umich.edu/" scroll={false} target="_blank" rel="noopener noreferrer">
          <Link>UMich-MDP Progam</Link>
        </Link>
        &nbsp;(University of Michigan Multidisciplinary Design Program) that
        develops enhanced analysis and visualization toolboxes with an emphasis on &quot;Big Data,&quot;
        which are large, heterogeneous, time-varying, multisource and incomplete dataset that are
        difficult to analyze and interpret in meaningful ways using classical probability,
        statistical or algorithmic appoaches.
      </P>
      <UnorderedList my={4}>
        <Meta>My Role</Meta>
        <ListItem>
        Interrogated the {' '}
        <Link href="https://physionet.org/content/mimiciii/1.4/" scroll={false} target="_blank" rel="noopener noreferrer">
          <Link>MIMIC-III</Link>
        </Link>
        &nbsp;database, a large collection of ~43,000
        critical care patients from an ICU in Boston, MA, by utilizing R/Rstudio to digest
        the vital signs, laboratory results, free-text data, and wavefroms available in this
        unique dataset and predict clinical outcomes via statistical modeling tools; developed
        advanced AI/ML dara analytics to address specific biomedical, healthcare, neuroimaging-genectics,
        and other applications.
        </ListItem>
      </UnorderedList>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Recognition & Outreach</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>
            Contributed to an educational module for Data Science and Predictive Analytics (UMich HS650): {' '}
            <Link href="http://www.socr.umich.edu/people/dinov/courses/DSPA_notes/DSPA_Appendix_5_SQL_DB_Queries.html" target="_blank" rel="noopener noreferrer" color={linkColor}>
              Appendix 5: Database SQL Queries <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Links</Meta>
        </Box>
        <VStack align="stretch" spacing={2} mt={2} pl={2} borderLeftWidth="2px" borderColor={borderColor}>
          <Box>
            <Text as="span" fontWeight="medium" color="gray.500">SOCR website: </Text>
            <Link href="https://www.socr.umich.edu/" target="_blank" rel="noopener noreferrer" color={linkColor}>
              socr.umich.edu <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
          <Box>
            <Text as="span" fontWeight="medium" color="gray.500">MDP website: </Text>
            <Link href="https://mdp.engin.umich.edu/" target="_blank" rel="noopener noreferrer" color={linkColor}>
              mdp.engin.umich.edu <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </VStack>
      </Box>
      <WorkImage src="/images/works/socr0.jpg" alt="socr" />
      <WorkImage src="/images/works/socr/socr1.png" alt="socr" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/socr2.png" alt="socr" />
        <WorkImage src="/images/works/socr3.jpg" alt="socr" />
      </SimpleGrid>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Skills</Meta>
        </Box>
        <Wrap spacing={2} mt={2}>
          {['R/RStudio', 'Machine Learning', 'SQL', 'Quantitative Analytics'].map(item => (
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
          {['SOCR', 'Big Data', 'Data Analytics', 'Numerical Methods'].map(item => (
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
