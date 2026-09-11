import { Container, Badge, Link, ListItem, SimpleGrid, UnorderedList, Box, VStack, Text, useColorModeValue, Wrap, WrapItem, Tag } from '@chakra-ui/react'
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
        I worked with the{' '}
        <Link href="https://www.socr.umich.edu/" scroll={false} target="_blank" rel="noopener noreferrer">
          Statistics Online Computational Resource
        </Link>
        {' '}(SOCR) team through the University of Michigan&apos;s{' '}
        <Link href="https://mdp.engin.umich.edu/" scroll={false} target="_blank" rel="noopener noreferrer">
          Multidisciplinary Design Program
        </Link>
        . SOCR develops tools and teaching materials for statistics, data
        analysis, and machine learning. My work included analyzing clinical
        data and contributing to educational resources that help students
        work with databases and predictive models.
      </P>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>My Role</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>
          Analyzed the{' '}
          <Link href="https://physionet.org/content/mimiciii/1.4/" scroll={false} target="_blank" rel="noopener noreferrer">
            MIMIC-III
          </Link>
          {' '}critical care database using R and RStudio. I worked with vital
          signs, lab results, clinical notes, and waveforms to explore
          statistical models for predicting clinical outcomes, alongside
          machine learning methods for biomedical and healthcare applications.
          </ListItem>
        </UnorderedList>
      </Box>
      <Box my={4}>
        <Box as="span" color={metaColor}>
          <Meta>Recognition & Outreach</Meta>
        </Box>
        <UnorderedList mt={2} pl={6}>
          <ListItem>
            Contributed a database-querying module to the University of Michigan&apos;s Data Science and Predictive Analytics course (HS650).{' '}
            <Link href="http://www.socr.umich.edu/people/dinov/courses/DSPA_notes/DSPA_Appendix_5_SQL_DB_Queries.html" target="_blank" rel="noopener noreferrer" color={linkColor}>
              Appendix 5: Database SQL Queries <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <WorkImage src="/images/works/socr0.jpg" alt="socr" />
      <WorkImage src="/images/works/socr/socr1.png" alt="socr" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/socr2.png" alt="socr" />
        <WorkImage src="/images/works/socr3.jpg" alt="socr" />
      </SimpleGrid>
      <Box my={4} p={3} borderWidth="1px" borderColor={borderColor} borderRadius="md">
        <Meta>Links</Meta>
        <VStack align="stretch" spacing={2} mt={2}>
          <Box>
            <Link
              href="https://www.socr.umich.edu/"
              target="_blank"
              rel="noopener noreferrer"
              color={linkColor}
              fontWeight="semibold"
            >
              SOCR Website <ExternalLinkIcon mx="1px" />
            </Link>
            <Text fontSize="xs" color="gray.500" lineHeight="1.2">
              Statistics Online Computational Resource.
            </Text>
          </Box>
          <Box>
            <Link
              href="https://mdp.engin.umich.edu/"
              target="_blank"
              rel="noopener noreferrer"
              color={linkColor}
              fontWeight="semibold"
            >
              MDP Website <ExternalLinkIcon mx="1px" />
            </Link>
            <Text fontSize="xs" color="gray.500" lineHeight="1.2">
              UMich Multidisciplinary Design Program.
            </Text>
          </Box>
        </VStack>
      </Box>
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
