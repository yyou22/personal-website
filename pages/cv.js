import { Container, Heading, Divider, Text, Box, VStack, HStack, Icon, Link, } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { FaGraduationCap, FaBook, FaBriefcase, FaAward, FaChalkboardTeacher, FaHandsHelping, FaNewspaper, FaMicrophone, /* FaScroll, */ FaTrophy } from 'react-icons/fa'
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
              <Text fontWeight="medium">Grade: 96.5/100</Text>
              <br />
              <Text>Master of Mathematics (MMath) in Computer Science</Text>
              <Text color="#6d758e">Waterloo, ON | Sep 2021 - Aug 2023</Text>
              <Text>Advisor: Dr. Jian Zhao</Text>
              <Text fontWeight="medium">Grade: 93.75/100</Text>
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
        <Box p={6, 8} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md" mb={8}>
          <HStack spacing={3} align="center">
            <Icon as={FaBook} boxSize={6} color="teal.500" />
            <Heading as="h3" variant="section-title" color="teal.600">
              Publications
            </Heading>
          </HStack>
          <VStack align="start" spacing={6} mt={4}>
            <Box>
              <Text fontSize="md">
                Xuye Liu, <strong>Yuzhe You</strong>, Tengfei Ma, Jian Zhao. <Text as="span" color="#6b93a2">MACEDON: Supporting Programmers with Real-Time Multi-Dimensional Code Evaluation and Optimization</Text>. Proceedings of ACM Symposium on User Interface Software and Technology, 2025 (In Press).
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                <strong>Yuzhe You</strong>, Jian Zhao. <Text as="span" color="#6b93a2">Exploring Comparative Visual Approaches for Understanding Model Trade-offs in Adversarial Machine Learning</Text>. Proceedings of the Graphics Interface Conference, 2025 (In Press).
              </Text>
              <HStack mt={1} color="#FFB347">
                <Icon as={FaTrophy} />
                <Text fontSize="sm">Best Paper Award</Text>
              </HStack>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                <strong>Yuzhe You</strong>, Jarvis Tse, and Jian Zhao. <Link color="#6b93a2" href="https://dl.acm.org/doi/10.1145/3725739" isExternal>Panda or not Panda? Understanding Adversarial Attacks with Interactive Visualization.<ExternalLinkIcon mx="2px" /></Link>. ACM Transactions on Interactive Intelligent Systems, 2025.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                <strong>Yuzhe You</strong>, Helen Weixu Chen, and Jian Zhao. <Link color="#6b93a2" href="https://doi.org/10.1145/3706599.3719795" isExternal>Enhancing AI Explainability for Non-technical Users with LLM-Driven Narrative Gamification.<ExternalLinkIcon mx="2px" /></Link>. Extended Abstracts of the CHI Conference on Human Factors in Computing Systems, 2025.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                <strong>Yuzhe You</strong> and Jian Zhao. <Link color="#6b93a2" href="https://visxai-aml.vercel.app/" isExternal>Panda or Gibbon? A Beginner&apos;s Introduction to Adversarial Attacks<ExternalLinkIcon mx="2px" /></Link>. In 7th Workshop on Visualization for AI Explainability (VISxAI), IEEE VIS 2024.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                Li Feng, Ryan Yen, <strong>Yuzhe You</strong>, Mingming Fan, Jian Zhao, and Zhicong Lu. <Link color="#6b93a2" href="https://arxiv.org/abs/2310.09235" isExternal>CoPrompt: Supporting Prompt Sharing and Referring in Collaborative Natural Language Programming<ExternalLinkIcon mx="2px" /></Link>. In Proceedings of the CHI Conference on Human Factors in Computing Systems, CHI 2024.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Section>

      {/* Thesis Section - Commented Out
      <Section delay={0.2}>
        <Box p={6} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md" mb={8}>
          <HStack spacing={3} align="center">
            <Icon as={FaScroll} boxSize={6} color="teal.500" />
            <Heading as="h3" variant="section-title" color="teal.600">
              Thesis
            </Heading>
          </HStack>
          <VStack align="start" spacing={6} mt={4}>
            <Box>
              <Text fontSize="md">
                <strong>Yuzhe You</strong>. <Link color="#6b93a2" href="https://uwspace.uwaterloo.ca/items/33b531b9-3fe0-436d-97c6-0da4547a4af9" isExternal>AdvEx: Interactive Visual Explorations of Adversarial Evasion Attacks<ExternalLinkIcon mx="2px" /></Link>. <i>Master&apos;s thesis</i>, University of Waterloo, 2023.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Section>
      */}

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
              <HStack>
                <Image 
                  src="/images/adobe.png"
                  alt="Adobe Logo"
                  width={24}
                  height={24}
                />
                <Text fontSize="lg" fontWeight="bold">Adobe</Text>
              </HStack>
              <Text>Research Intern</Text>
              <Text color="#6d758e">San Jose, USA | Aug 2025 - Present</Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="lg" fontWeight="bold">University of Waterloo </Text>
              <Text>Researcher</Text>
              <Text color="#6d758e">Waterloo, ON | Jun 2022 - Present</Text>
            </Box>
            <Divider />
            <Box>
              <HStack>
                <Image 
                  src="/images/microsoft.png"
                  alt="Microsoft Logo"
                  width={24}
                  height={24}
                />
                <Text fontSize="lg" fontWeight="bold">Microsoft</Text>
              </HStack>
              <Text>Research Intern</Text>
              <Text color="#6d758e">Cambridge, UK | Apr 2025 - Jun 2025</Text>
            </Box>
            <Divider />
            {/*<Box>
              <Text fontSize="lg" fontWeight="bold">iTSS Lab <Text as="span" fontSize="sm" fontWeight="normal"> (University of Waterloo)</Text></Text>
              <Text>Researcher</Text>
              <Text color="#6d758e">Waterloo, ON | Jun 2022 - April 2025</Text>
            </Box>
            <Divider />*/}
            <Box>
              <HStack>
                <Image 
                  src="/images/blackberry.png"
                  alt="Blackberry Logo"
                  width={24}
                  height={18}
                />
                <Text fontSize="lg" fontWeight="bold">Blackberry</Text>
              </HStack>
              <Text>Research Intern</Text>
              <Text color="#6d758e">Waterloo, ON | Sep 2023 - Feb 2024</Text>
            </Box>
            {/*<Divider />
            <Box>
              <Text fontSize="lg" fontWeight="bold">SOCR Research Team <Text as="span" fontSize="sm" color="#6d758e" fontWeight="normal">- University of Michigan</Text></Text>
              <Text>Research Assistant</Text>
              <Text color="#6d758e">Ann Arbor, MI | Jan 2019 - Jan 2020</Text>
            </Box>*/}
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
                    May 2025
                  </Text>
                  </BioYear> 
                  Best Student Paper in HCI (Michael A. J. Sweeney Award)
                </BioSection>
                <BioSection>
                  <BioYear>
                  <Text as="span" color="#6d758e" fontWeight="normal">
                    May 2025
                  </Text>
                  </BioYear>   
                  <Text>Ontario Graduate Scholarship ($15,000 CAD) <br/><Text as="span" fontSize="sm" color="#6d758e" display="inline">[had to decline due to already holding NSERC CGS-D]</Text></Text>
                </BioSection>
                <BioSection>
                  <BioYear>
                  <Text as="span" color="#6d758e" fontWeight="normal">
                    Apr 2025
                  </Text>
                  </BioYear>   
                  NSERC Canada Graduate Scholarship - Doctoral ($120,000 CAD)
                </BioSection>
                <BioSection>
                  <BioYear>
                  <Text as="span" color="#6d758e" fontWeight="normal">
                    Apr 2025
                  </Text>
                  </BioYear>   
                  UWaterloo President&apos;s Graduate Scholarship ($10,000 CAD)
                </BioSection>
                <BioSection>
                  <BioYear>
                  <Text as="span" color="#6d758e" fontWeight="normal">
                    Apr 2025
                  </Text>
                  </BioYear> 
                  Computer Science PhD Student Award ($3,000 CAD)
                </BioSection>
                <BioSection>
                  <BioYear>
                  <Text as="span" color="#6d758e" fontWeight="normal">
                    Oct 2024
                  </Text>
                  </BioYear>
                  3rd Place Best Poster Award ($300 CAD) in UWaterloo CPI Conference
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
                  GO-Bell Scholarship ($24,000 CAD)
                </BioSection>

                <BioSection>
                  <BioYear>
                    <Text as="span" color="#6d758e" fontWeight="normal">
                      Feb 2023
                    </Text>
                  </BioYear>
                  Provost Doctoral Entrance Award for Women ($5,000 CAD)
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
                  2nd Place Winner in Waterloo.AI Data Challenge ($1,000 CAD)
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
            <Text color="#6d758e">Fall 2024</Text>
          </Box>
          <Box>
            <Text>TA / Lecturer for CS 449/649: Human-Computer Interaction</Text>
            <Text color="#6d758e">Spring 2023 - Fall 2023; Spring 2024</Text>
          </Box>
          <Box>
            <Text>TA for CS 349: User Interfaces</Text>
            <Text color="#6d758e">Winter 2024; Winter 2025</Text>
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

      {/* Press Section */}
      <Section delay={0.8}>
        <Box p={6} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md" mb={8}>
          <HStack spacing={3} align="center">
            <Icon as={FaNewspaper} boxSize={6} color="teal.500" />
            <Heading as="h3" variant="section-title" color="teal.600">
              Press & Media Coverage
            </Heading>
          </HStack>
          <VStack align="start" spacing={6} mt={4}>
            <Box>
              <Text fontSize="md">
                <Link color="#6b93a2" href="https://uwaterloo.ca/cybersecurity-privacy-institute/news/cpi-congratulates-our-top-3-winners-cpi-annual-conference" isExternal>
                &quot;CPI Congratulates our Top 3 Winners in the CPI Annual Conference Poster Competition.&quot;<ExternalLinkIcon mx="2px" />
                </Link> Cybersecurity and Privacy Institute, University of Waterloo, Oct 2024.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                <Link color="#6b93a2" href="https://uwaterloo.ca/current-graduate-students/news/meet-gradflix-finalist-who-combined-art-and-programming" isExternal>
                &quot;Meet the GRADflix finalist who combined art and programming to share her research.&quot;<ExternalLinkIcon mx="2px" />
                </Link> Graduate Studies and Postdoctoral Affairs, University of Waterloo, May 2023.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                <Link color="#6b93a2" href="https://cs.uwaterloo.ca/news/cheriton-students-among-winners-at-waterloo-ai-data-challenge" isExternal>
                &quot;Cheriton School of Computer Science undergrads and grads among winners at Waterloo.AI’s Data Challenge.&quot;<ExternalLinkIcon mx="2px" />
                </Link> Cheriton School of Computer Science, University of Waterloo, Nov 2022.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Section>

      {/* Presentations & Invited Talks Section */}
      <Section delay={0.9}>
        <Box p={6} boxShadow="3px 4px 16px rgba(0, 0, 0, 0.5)" borderRadius="md" mb={8}>
          <HStack spacing={3} align="center">
            <Icon as={FaMicrophone} boxSize={6} color="teal.500" />
            <Heading as="h3" variant="section-title" color="teal.600">
              Presentations & Invited Talks
            </Heading>
          </HStack>
          <VStack align="start" spacing={6} mt={4}>
            <Box>
              <Text fontSize="md">
                <strong>NavEaz: An AI-based Smartwatch Application for Driver Impairment Detection & Predictive Analysis.</strong> Oral Presentation, Transport Canada/NRC Community of Practice (CoP) workshop, Oct 2024.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                <strong>Panda or Gibbon? A Beginner&apos;s Introduction to Adversarial Attacks.</strong> Oral Presentation, IEEE VIS, Oct 2024.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                <strong>AdvEx: Understanding Adversarial Attacks with Interactive Visualizations.</strong> Poster Presentation, Cybersecurity and Privacy Institute Annual Conference, University of Waterloo, Oct 2024.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text fontSize="md">
                <strong>AdvEx: Interactive Visual Explorations of Adversarial Attacks.</strong> Oral and Poster Presentations, Math and Computing Research Discovery Days, University of Waterloo, Jun 2023.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Section>

    </Container>
  </Layout>
)

export default CV
export { getServerSideProps } from '../components/chakra'
