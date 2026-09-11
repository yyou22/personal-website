import {
  Box,
  Icon,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
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
  const foreground = useColorModeValue('gray.700', 'gray.200')
  const accent = useColorModeValue('teal.700', 'teal.200')

  return (
    <Box display="flex" flexWrap="wrap" columnGap={6} rowGap={1}>
      {contacts.map(({ label, detail, href, icon }) => (
        <Link
          key={href}
          href={href}
          isExternal={!href.startsWith('mailto:')}
          aria-label={`${label}: ${detail}`}
          title={detail}
          display="inline-flex"
          alignItems="center"
          gap={2}
          py={2}
          minH="44px"
          minW={0}
          color={foreground}
          transition="color 160ms ease"
          _hover={{
            textDecoration: 'underline',
            color: accent
          }}
          _focusVisible={{
            outline: '2px solid',
            outlineColor: accent,
            outlineOffset: '3px'
          }}
        >
          <Icon as={icon} boxSize={4} flexShrink={0} aria-hidden="true" />
          <Text as="span" fontSize="sm" lineHeight={1.5}>
            {label}
          </Text>
        </Link>
      ))}
    </Box>
  )
}

export default ContactLinks
