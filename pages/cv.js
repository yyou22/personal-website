import { Container, Heading, Divider, Text, Box, VStack, HStack, Icon, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { FaGraduationCap, FaBook, FaBriefcase } from 'react-icons/fa'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const CV = () => (
  <Layout title="CV">
    <Container maxW="container.md" py={6}>
      
      {/* Education Section */}
      <Section delay={0.1}>
        <Box p={6} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md" mb={8}>
          <HStack spacing={3} align="center">
            <Icon as={FaGraduationCap} boxSize={6} color="teal.500" />
            <Heading as="h3" variant="section-title" color="teal.600">
              Education
            </Heading>
          </HStack>
          <VStack align="start" spacing={4} mt={4}>
            <Box>
              <Text fontSize="lg" fontWeight="bold">University of Waterloo</Text>
              <Text>PhD in Computer Science</Text>
              <Text color="#6d758e">Waterloo, ON | Sep 2023 - Present</Text>
              <Text>Advisor: Dr. Jian Zhao</Text>
              <Text fontWeight="medium">GPA: 96.5/100</Text>
              <br />
              <Text>Master of Mathematics (MMath) in Computer Science</Text>
              <Text color="#6d758e">Waterloo, ON | Sep 2021 - Aug 2023</Text>
              <Text>Advisor: Dr. Jian Zhao</Text>
              <Text fontWeight="medium">GPA: 93.75/100</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="lg" fontWeight="bold">University of Michigan - Ann Arbor</Text>
              <Text>Bachelor of Science (B.S.) in Computer Science</Text>
              <Text color="#6d758e">Ann Arbor, MI | Sep 2017 - May 2021</Text>
              <Text fontWeight="medium">GPA: 3.695/4.0</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="lg" fontWeight="bold">Rhode Island School of Design</Text>
              <Text>Pre-college Program, Art & Design</Text>
              <Text color="#6d758e">Providence, RI | July 2015 - Aug 2015</Text>
            </Box>
          </VStack>
        </Box>
      </Section>

      {/* Publications Section */}
      <Section delay={0.2}>
        <Box p={6} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md" mb={8}>
          <HStack spacing={3} align="center">
            <Icon as={FaBook} boxSize={6} color="teal.500" />
            <Heading as="h3" variant="section-title" color="teal.600">
              Publications
            </Heading>
          </HStack>
          <VStack align="start" spacing={6} mt={4}>
            <Box>
              <Text fontSize="md">
                <strong>Yuzhe You</strong> and Jian Zhao. <Link color="#6b93a2" href="https://visxai-aml.vercel.app/" isExternal>Panda or Gibbon? A Beginner&apos;s Introduction to Adversarial Attacks<ExternalLinkIcon mx="2px" /></Link>. In <i>7th Workshop on Visualization for AI Explainability (VISxAI)</i>, IEEE VIS 2024.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                Li Feng, Ryan Yen, <strong>Yuzhe You</strong>, Mingming Fan, Jian Zhao, and Zhicong Lu. <Link color="#6b93a2" href="https://arxiv.org/abs/2310.09235" isExternal>CoPrompt: Supporting Prompt Sharing and Referring in Collaborative Natural Language Programming<ExternalLinkIcon mx="2px" /></Link>. In <i>Proceedings of the CHI Conference on Human Factors in Computing Systems</i>, CHI 2024.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                <strong>Yuzhe You</strong>. <Link color="#6b93a2" href="https://uwspace.uwaterloo.ca/items/33b531b9-3fe0-436d-97c6-0da4547a4af9" isExternal>AdvEx: Interactive Visual Explorations of Adversarial Evasion Attacks<ExternalLinkIcon mx="2px" /></Link>. <i>Master&apos;s thesis</i>, University of Waterloo, 2023.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Section>

      {/* Professional Experience Section */}
      <Section delay={0.3}>
        <Box p={6} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md">
          <HStack spacing={3} align="center">
            <Icon as={FaBriefcase} boxSize={6} color="teal.500" />
            <Heading as="h3" variant="section-title" color="teal.600">
              Professional Experience
            </Heading>
          </HStack>
          <VStack align="start" spacing={4} mt={4}>
            <Box>
              <Text fontSize="lg" fontWeight="bold">WatVis Research Group</Text>
              <Text>Researcher</Text>
              <Text color="#6d758e">Waterloo, ON | June 2022 - Present</Text>
              <Text>Advisor: Dr. Jian Zhao</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="lg" fontWeight="bold">iTSS Lab</Text>
              <Text>Researcher</Text>
              <Text color="#6d758e">Waterloo, ON | June 2022 - Present</Text>
              <Text>Advisor: Dr. Liping Fu</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="lg" fontWeight="bold">Blackberry Labs</Text>
              <Text>Research Intern</Text>
              <Text color="#6d758e">Waterloo, ON | Sep 2023 - Feb 2024</Text>
              <Text>Advisor: Dr. Andrew Walenstein</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="lg" fontWeight="bold">SOCR Research Team</Text>
              <Text>Research Assistant</Text>
              <Text color="#6d758e">Ann Arbor, MI | Jan 2019 - Jan 2020</Text>
              <Text>Advisor: Dr. Ivo Dinov</Text>
            </Box>
          </VStack>
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default CV
export { getServerSideProps } from '../components/chakra'
