import {
  Box,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { FaTrophy } from 'react-icons/fa'

const education = [
  {
    institution: 'University of Waterloo',
    logo: '/images/uwaterloo.png',
    role: 'PhD in Computer Science',
    dates: '2023 – Present'
  },
  {
    institution: 'University of Waterloo',
    logo: '/images/uwaterloo.png',
    role: 'MMath in Computer Science',
    dates: '2021 – 2023'
  },
  {
    institution: 'University of Michigan',
    logo: '/images/umich.jpeg',
    role: 'BS in Computer Science',
    dates: '2017 – 2021'
  },
  {
    institution: 'Rhode Island School of Design',
    logo: '/images/risd.png',
    invertInDark: true,
    role: 'Pre-college Art & Design',
    dates: '2015'
  }
]

const industry = [
  {
    institution: 'Adobe',
    logo: '/images/adobe2.png',
    role: 'Research Intern',
    dates: '2026 – Present',
    highlight: 'Sneaks Speaker'
  },
  {
    institution: 'Adobe',
    logo: '/images/adobe2.png',
    role: 'Research Intern',
    dates: '2025'
  },
  {
    institution: 'Microsoft',
    logo: '/images/microsoft.png',
    role: 'Research Intern',
    dates: '2025'
  },
  {
    institution: 'BlackBerry',
    logo: '/images/blackberry.png',
    invertInLight: true,
    role: 'Research Intern',
    dates: '2023 – 2024'
  }
]

const ExperienceGrid = () => {
  const mutedColor = useColorModeValue('day.muted', 'gray.400')
  const isDark = useColorModeValue(false, true)
  const highlightColor = useColorModeValue('day.gold', '#FFB347')

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
      {[
        { title: 'Education', entries: education },
        { title: 'Industry experience', entries: industry }
      ].map(({ title, entries }) => (
        <Box key={title} minW={0}>
          <Heading as="h4" fontSize="sm" fontWeight="semibold" mb={3}>
            {title}
          </Heading>
          <VStack as="ul" align="stretch" spacing={3} listStyleType="none" m={0} p={0}>
            {entries.map(({ institution, logo, role, dates, highlight, invertInDark, invertInLight }) => (
              <Box as="li" key={`${institution}-${dates}`} display="flex" alignItems="flex-start" gap={2}>
                <Image
                  src={logo}
                  alt=""
                  boxSize="24px"
                  objectFit="contain"
                  flexShrink={0}
                  mt="2px"
                  // Hide the stray white pixels along this asset's right edge.
                  clipPath={logo === '/images/adobe2.png' ? 'inset(0 2% 0 0)' : undefined}
                  filter={(isDark ? invertInDark : invertInLight) ? 'invert(1)' : undefined}
                />
                <Box flex={1} minW={0}>
                  <Box display="flex" alignItems="baseline" justifyContent="space-between" gap={2}>
                    <Text fontSize="sm" fontWeight="semibold" lineHeight="short">
                      {institution}
                    </Text>
                    <Text fontSize="xs" color={mutedColor} whiteSpace="nowrap">{dates}</Text>
                  </Box>
                  <Text fontSize="xs" color={mutedColor} mt={0.5}>{role}</Text>
                  {highlight && (
                    <Box display="flex" alignItems="flex-start" gap={1.5} mt={1} color={highlightColor}>
                      <Icon as={FaTrophy} boxSize={3} mt="3px" flexShrink={0} aria-hidden="true" />
                      <Text fontSize="xs" lineHeight="short">
                        <Text as="span" fontWeight="semibold">{highlight}</Text>
                        {' '}at Adobe Summit 2026
                      </Text>
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default ExperienceGrid
