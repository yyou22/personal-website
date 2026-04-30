import {
  Container,
  Heading,
  Box,
  Text,
  HStack,
  Link,
  Image,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { getServerSideProps as chakraGetServerSideProps } from '../components/chakra'

const BASE_PRESS_ITEMS = [
  {
    title: 'Yuzhe You cooks up a storm at Adobe Summit 2026',
    publisher: 'Cheriton School of Computer Science, University of Waterloo',
    date: 'Apr 2026',
    href: 'https://uwaterloo.ca/computer-science/news/yuzhe-you-cooks-storm-adobe-summit-2026',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    snippet:
      'Coverage of Project Test Kitchen at Adobe Summit Sneaks, selected as 1 of 7 from 500+ submissions.'
  },
  {
    title: 'Yuzhe You presents at Adobe Summit 2026',
    publisher: 'Faculty of Mathematics, University of Waterloo',
    date: 'Apr 2026',
    href: 'https://uwaterloo.ca/math/news/yuzhe-you-presents-adobe-summit-2026',
    lockImage: true,
    image:
      'https://cs.uwaterloo.ca/sites/default/files/uploads/resize/backstage-of-sneaks-1000x750_1.jpeg',
    snippet:
      'Mathematics feature highlighting Adobe Summit presentation and cross-faculty recognition.'
  },
  {
    title: 'Five Adobe Sneaks I Want Now',
    publisher: 'The AI Economy',
    date: 'Apr 2026',
    href: 'https://theaieconomy.substack.com/p/adobe-sneaks-2026-five-ai-prototypes-worth-watching',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    snippet:
      'Independent media coverage of Adobe Sneaks 2026, featuring Project Test Kitchen.'
  },
  {
    title: 'Math at the forefront of AI',
    publisher: 'Math e-Ties, University of Waterloo',
    date: 'Mar 2026',
    href: 'https://uwaterloo.ca/math-alumni-newsletter/news/math-forefront-ai',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    snippet:
      'Roundup on AI research leadership with a spotlight on gamifying explainable AI.'
  },
  {
    title: 'International Women’s Day: Celebrating women researchers and entrepreneurs',
    publisher: 'Cheriton School of Computer Science, University of Waterloo',
    date: 'Mar 2026',
    href: 'https://uwaterloo.ca/computer-science/news/international-womens-day-celebrating-women-researchers-and',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    snippet:
      'Feature story on women researchers and entrepreneurs, including work on human-centered XAI.'
  },
  {
    title: 'Gamifying AI',
    publisher: 'Cheriton School of Computer Science, University of Waterloo',
    date: 'Sep 2025',
    href: 'https://uwaterloo.ca/computer-science/news/gamifying-ai',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    snippet:
      'Profile on research vision and scholarship support for accessible explainable AI.'
  },
  {
    title: 'Yuzhe You wins best student paper award at GI 2025 for novel cybersecurity tool',
    publisher: 'Cheriton School of Computer Science, University of Waterloo',
    date: 'Jun 2025',
    href: 'https://uwaterloo.ca/computer-science/news/yuzhe-you-wins-best-student-paper-award-gi-2025-novel',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    snippet:
      'Coverage highlighting the GI 2025 Best Student Paper recognition for cybersecurity visualization research.'
  },
  {
    title: 'CPI Congratulates our Top 3 Winners in the CPI Annual Conference Poster Competition',
    publisher: 'Cybersecurity and Privacy Institute, University of Waterloo',
    date: 'Oct 2024',
    href: 'https://uwaterloo.ca/cybersecurity-privacy-institute/news/cpi-congratulates-our-top-3-winners-cpi-annual-conference',
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80',
    snippet:
      'Conference coverage recognizing top poster awards in the annual CPI conference.'
  },
  {
    title: 'Meet the GRADflix finalist who combined art and programming to share her research',
    publisher: 'Graduate Studies and Postdoctoral Affairs, University of Waterloo',
    date: 'May 2023',
    href: 'https://uwaterloo.ca/current-graduate-students/news/meet-gradflix-finalist-who-combined-art-and-programming',
    image:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80',
    snippet:
      'Feature on the GRADflix project blending pixel-art game design with research communication.'
  },
  {
    title: 'Cheriton School of Computer Science undergrads and grads among winners at Waterloo.AI’s Data Challenge',
    publisher: 'Cheriton School of Computer Science, University of Waterloo',
    date: 'Nov 2022',
    href: 'https://cs.uwaterloo.ca/news/cheriton-students-among-winners-at-waterloo-ai-data-challenge',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    snippet:
      'Recognition of Waterloo.AI Data Challenge winners from Cheriton CS.'
  }
]

const Press = ({ pressItems }) => {
  const cardBg = useColorModeValue('whiteAlpha.800', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const mutedColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Layout title="Press">
      <Container maxW="100%" px={0}>
        <Heading as="h3" fontSize={20} mb={4}>
          Press Coverage
        </Heading>

        <Box>
          {pressItems.map((item, index) => (
            <Section key={item.href} delay={0.05 * index}>
              <Box
                borderWidth="1px"
                borderColor={borderColor}
                bg={cardBg}
                borderRadius="lg"
                py={3}
                px={4}
              >
                <HStack align="center" spacing={4}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    borderRadius="md"
                    objectFit="cover"
                    w={{ base: '132px', md: '176px' }}
                    h={{ base: '68px', md: '76px' }}
                    flexShrink={0}
                  />

                  <Box minW={0}>
                    <HStack spacing={2} mb={1} flexWrap="wrap">
                      <Badge colorScheme="teal">{item.date}</Badge>
                      <Text fontSize="sm" color={mutedColor}>
                        {item.publisher}
                      </Text>
                    </HStack>

                    <Text fontWeight="bold" mb={1}>
                      <Link href={item.href} isExternal color="#6b93a2">
                        {item.title}
                        <ExternalLinkIcon mx="2px" />
                      </Link>
                    </Text>

                    <Text fontSize="sm" color={mutedColor}>
                      {item.snippet}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Section>
          ))}
        </Box>

      </Container>
    </Layout>
  )
}

export default Press

const extractFirstImage = (html, pageUrl) => {
  const ogImageMatch = html.match(
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i
  )
  const twitterImageMatch = html.match(
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i
  )
  const firstImgMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i)
  const candidate = ogImageMatch?.[1] || twitterImageMatch?.[1] || firstImgMatch?.[1]

  if (!candidate) return null
  try {
    return new URL(candidate, pageUrl).toString()
  } catch {
    return null
  }
}

export async function getServerSideProps(ctx) {
  const chakraResult = await chakraGetServerSideProps(ctx)
  const baseProps = chakraResult?.props || {}

  const pressItems = await Promise.all(
    BASE_PRESS_ITEMS.map(async item => {
      if (item.lockImage) return item
      try {
        const res = await fetch(item.href, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; PressImageFetcher/1.0)'
          }
        })
        if (!res.ok) return item

        const html = await res.text()
        const fetchedImage = extractFirstImage(html, item.href)
        return fetchedImage ? { ...item, image: fetchedImage } : item
      } catch {
        return item
      }
    })
  )

  const pressItemsForPage = pressItems.map(({ lockImage: _lock, ...rest }) => rest)

  return {
    props: {
      ...baseProps,
      pressItems: pressItemsForPage
    }
  }
}
