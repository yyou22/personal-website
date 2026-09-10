import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

const ProfileIntro = () => {
  const foreground = useColorModeValue('gray.800', 'gray.100')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const roleBackground = useColorModeValue('whiteAlpha.500', 'whiteAlpha.50')

  return (
    <Box as="header" mb={8} color={foreground}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={5}
      >
        <Box minW={0}>
          <Heading
            as="h2"
            variant="page-title"
            fontSize={{ base: '2rem', sm: '2.5rem' }}
            letterSpacing="-0.035em"
            lineHeight={1.2}
          >
            Yuzhe You
          </Heading>
        </Box>
        <Box
          position="relative"
          flexShrink={0}
          w={{ base: '72px', sm: '84px' }}
          h={{ base: '72px', sm: '84px' }}
          borderRadius="full"
          overflow="hidden"
          border="3px solid"
          borderColor={roleBackground}
        >
          <Image
            src="/images/photo1.png"
            alt="Yuzhe You"
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 479px) 72px, 84px"
          />
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(3, minmax(0, 1fr))',
          sm: 'repeat(3, max-content)'
        }}
        gap={{ base: 1.5, sm: 2 }}
        mt={4}
      >
        {[
          ['CS PhD', 'Researcher'],
          ['Artist +', 'Designer'],
          ['Student', 'Pilot ✈️']
        ].map(([first, second]) => (
          <Text
            key={first}
            fontSize={{ base: '0.8125rem', sm: 'sm' }}
            lineHeight={1.45}
            textAlign="center"
            px={{ base: 1.5, sm: 3 }}
            py={{ base: 1.5, sm: 1 }}
            border="1px solid"
            borderColor={border}
            borderRadius={{ base: 'xl', sm: 'full' }}
            bg={roleBackground}
            color={foreground}
            minW={0}
            overflowWrap="anywhere"
          >
            <Box as="span" display={{ base: 'block', sm: 'inline' }}>
              {first}
            </Box>{' '}
            <Box as="span">{second}</Box>
          </Text>
        ))}
      </Box>

      <Box mt={4} fontSize="sm" lineHeight={1.8} color={muted}>
        <Box display="flex" flexWrap="wrap" columnGap={5} rowGap={0.5}>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            columnGap={1.5}
          >
            <Text as="span">Research Intern at</Text>
            <Box as="span" display="inline-flex" alignItems="center" gap={1.5}>
              <Image src="/images/adobe.png" alt="" width={12} height={12} />
              <Text as="span">Adobe</Text>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            columnGap={1.5}
          >
            <Text as="span">Previously at</Text>
            <Box as="span" display="inline-flex" alignItems="center" gap={1.5}>
              <Image
                src="/images/microsoft.png"
                alt=""
                width={12}
                height={12}
              />
              <Text as="span">Microsoft</Text>
            </Box>
          </Box>
        </Box>
        <Text mt={1}>Sneaks Speaker at Adobe Summit 2026</Text>
      </Box>
    </Box>
  )
}

export default ProfileIntro
