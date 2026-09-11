import {
  Box,
  Icon,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoLinkedin, IoLogoTwitter, IoMail } from 'react-icons/io5'
import { SiGooglescholar } from 'react-icons/si'

const contacts = [
  {
    label: 'Email',
    detail: 'y28you@uwaterloo.ca',
    href: 'mailto:y28you@uwaterloo.ca',
    icon: IoMail
  },
  {
    label: 'LinkedIn',
    detail: '@yuzheyou',
    href: 'https://www.linkedin.com/in/yuzheyou/',
    icon: IoLogoLinkedin
  },
  {
    label: 'X / Twitter',
    detail: '@yuzhe_you',
    href: 'https://x.com/yuzhe_you',
    icon: IoLogoTwitter
  },
  {
    label: 'Google Scholar',
    detail: 'Yuzhe You',
    href: 'https://scholar.google.ca/citations?user=ICAXncUAAAAJ&hl=en&oi=ao',
    icon: SiGooglescholar
  }
]

const ContactLinks = () => {
  const foreground = useColorModeValue('gray.800', 'gray.100')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const accent = useColorModeValue('teal.700', 'teal.200')
  const surface = useColorModeValue('whiteAlpha.500', 'whiteAlpha.50')
  const iconSurface = useColorModeValue('teal.50', 'whiteAlpha.100')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const hoverSurface = useColorModeValue('whiteAlpha.800', 'whiteAlpha.100')

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {contacts.map(({ label, detail, href, icon }) => (
        <Link
          key={href}
          href={href}
          isExternal={!href.startsWith('mailto:')}
          aria-label={`${label}: ${detail}`}
          data-group=""
          display="flex"
          alignItems="center"
          gap={3}
          p={4}
          minW={0}
          borderWidth="1px"
          borderColor={border}
          borderRadius="lg"
          bg={surface}
          color={foreground}
          transition="background-color 160ms ease, border-color 160ms ease"
          _hover={{
            textDecoration: 'none',
            bg: hoverSurface,
            borderColor: accent
          }}
          _focusVisible={{
            outline: '2px solid',
            outlineColor: accent,
            outlineOffset: '3px'
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize={10}
            flexShrink={0}
            borderRadius="md"
            bg={iconSurface}
            color={accent}
          >
            <Icon as={icon} boxSize={5} aria-hidden="true" />
          </Box>
          <Box minW={0} flex={1}>
            <Text fontSize="sm" fontWeight="semibold" lineHeight={1.5}>
              {label}
            </Text>
            <Text
              fontSize="sm"
              color={muted}
              mt={0.5}
              overflowWrap="anywhere"
              _groupHover={{ color: accent }}
            >
              {detail}
            </Text>
          </Box>
          {!href.startsWith('mailto:') && (
            <ExternalLinkIcon
              boxSize={3.5}
              flexShrink={0}
              color={muted}
              aria-hidden="true"
            />
          )}
        </Link>
      ))}
    </SimpleGrid>
  )
}

export default ContactLinks
