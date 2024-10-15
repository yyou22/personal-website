import { Container, Heading, Divider, Text, Box, VStack, HStack, Icon, Link, } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { FaGraduationCap, FaBook, FaBriefcase, FaAward, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

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
        <Box p={6} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md" mb={8}>
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
              <Text color="#6d758e">Waterloo, ON | Jun 2022 - Present</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="lg" fontWeight="bold">iTSS Lab</Text>
              <Text>Researcher</Text>
              <Text color="#6d758e">Waterloo, ON | Jun 2022 - Present</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="lg" fontWeight="bold">Blackberry Labs</Text>
              <Text>Research Intern</Text>
              <Text color="#6d758e">Waterloo, ON | Sep 2023 - Feb 2024</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="lg" fontWeight="bold">SOCR Research Team</Text>
              <Text>Research Assistant</Text>
              <Text color="#6d758e">Ann Arbor, MI | Jan 2019 - Jan 2020</Text>
            </Box>
          </VStack>
        </Box>
      </Section>

      {/* Scholarships & Awards Section */}
      <Section delay={0.4}>
        <Box p={6} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md" mb={8}>
          <HStack spacing={3} align="center">
            <Icon as={FaAward} boxSize={6} color="teal.500" />
            <Heading as="h3" variant="section-title" color="teal.600">
              Scholarships & Awards
            </Heading>
          </HStack>
          <VStack align="start" spacing={6} mt={4}>
            <Box>
            <Text fontSize="lg" fontWeight="bold">Graduate</Text>
              <VStack align="start" spacing={2} mt={2}>
              <BioSection>
                  <BioYear>
                  <Text as="span" color="#6d758e" fontWeight="normal">
                    Oct 2024
                  </Text>
                  </BioYear>
                  3rd Place Best Poster Award (300 CAD) in 2024 UWaterloo CPI Conference
                </BioSection>
                <BioSection>
                  <BioYear>
                  <Text as="span" color="#6d758e" fontWeight="normal">
                    Mar 2024
                  </Text>
                  </BioYear>
                  3rd Place + Business Incubation Award (50,000 JPY) in Dynamic Map Platform Hackathon
                </BioSection>
                <BioSection>
                  <BioYear>
                    <Text as="span" color="#6d758e" fontWeight="normal">
                    Sep 2023
                    </Text>
                  </BioYear>
                  ICACHI Innovation Design Award (5,000 RMB)
                </BioSection>

                <BioSection>
                  <BioYear>
                    <Text as="span" color="#6d758e" fontWeight="normal">
                      May 2023
                    </Text>
                  </BioYear>
                  GO-Bell Scholarship (24,000 CAD)
                </BioSection>

                <BioSection>
                  <BioYear>
                    <Text as="span" color="#6d758e" fontWeight="normal">
                      Feb 2023
                    </Text>
                  </BioYear>
                  Provost Doctoral Entrance Award for Women (5,000 CAD)
                </BioSection>

                <BioSection>
                  <BioYear>
                    <Text as="span" color="#6d758e" fontWeight="normal">
                      Jan 2023
                    </Text>
                  </BioYear>
                  UWaterloo GRADflix competition finalist
                </BioSection>

                <BioSection>
                  <BioYear>
                    <Text as="span" color="#6d758e" fontWeight="normal">
                      Nov 2022
                    </Text>
                  </BioYear>
                  2nd Place Winner in Waterloo.AI Data Challenge (1,000 CAD)
                </BioSection>

                <BioSection>
                  <BioYear>
                    <Text as="span" color="#6d758e" fontWeight="normal">
                      Sep 2022
                    </Text>
                  </BioYear>
                  Graduate Research Studentship
                </BioSection>

              </VStack>
            </Box>
            <Divider />
            <Box>
            <Text fontSize="lg" fontWeight="bold">Undergraduate</Text>
            <VStack align="start" spacing={2} mt={2}>
              <BioSection>
                <BioYear>
                  <Text as="span" color="#6d758e" fontWeight="normal">
                    Apr 2020
                  </Text>
                </BioYear>
                2nd Place Winner in EECS 494 Student Showcase
              </BioSection>
              
              <BioSection>
                <BioYear>
                  <Text as="span" color="#6d758e" fontWeight="normal">
                    Dec 2017
                  </Text>
                </BioYear>
                University Honors Designation (3 terms)
              </BioSection>
            </VStack>
            </Box>
          </VStack>
        </Box>
      </Section>

      {/* Teaching Section */}
      <Section delay={0.5}>
      <Box p={6} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md" mb={8}>
        <HStack spacing={3} align="center">
          <Icon as={FaChalkboardTeacher} boxSize={6} color="teal.500" />
          <Heading as="h3" variant="section-title" color="teal.600">
            Teaching
          </Heading>
        </HStack>
        <VStack align="start" spacing={4} mt={4}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">University of Waterloo</Text>
            <Text>TA for CS486/686: Intro to Artificial Intelligence</Text>
            <Text color="#6d758e">Fall 2024 - Present</Text>
          </Box>
          <Box>
            <Text>TA / Lecturer for CS 449/649: Human-Computer Interaction</Text>
            <Text color="#6d758e">Spring 2023 - Fall 2023; Spring 2024</Text>
          </Box>
          <Box>
            <Text>TA for CS 349: User Interfaces</Text>
            <Text color="#6d758e">Winter 2024</Text>
          </Box>
          <Box>
            <Text>TA for CS 135: Designing Functional Programs</Text>
            <Text color="#6d758e">Fall 2022 - Winter 2023</Text>
          </Box>
          <Divider />
          <Box>
            <Text fontSize="lg" fontWeight="bold">University of Michigan - Ann Arbor</Text>
            <Text>Tutorial Designer for HS 650: Data Science and Predictive Analytics</Text>
            <Text color="#6d758e">Dec 2018 - Dec 2019</Text>
          </Box>
        </VStack>
      </Box>
    </Section>

      {/* Volunteering Section */}
      <Section delay={0.6}>
        <Box p={6} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md">
          <HStack spacing={3} align="center">
            <Icon as={FaHandsHelping} boxSize={6} color="teal.500" />
            <Heading as="h3" variant="section-title" color="teal.600">
              Volunteering
            </Heading>
          </HStack>
          <VStack align="start" spacing={4} mt={4}>
            <Box>
              <Text fontSize="lg" fontWeight="bold">University of Waterloo</Text>
              <Text>Student host for Prof. Niklas Elmqvist&apos;s Seminar on Human-Centered AI Tools</Text>
              <Text color="#6d758e">Aug 2024</Text>
            </Box>
            <Box>
              <Text>Student host for Prof. John Stasko&apos;s Distinguished Lecture on Visualization </Text>
              <Text color="#6d758e">May 2024</Text>
            </Box>
          </VStack>
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default CV
export { getServerSideProps } from '../components/chakra'
