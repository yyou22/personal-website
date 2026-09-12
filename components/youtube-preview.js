import { useState } from 'react'
import { Box, Icon, Text } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'
import PreviewImage from './preview-image'

const YouTubePreview = ({ videoId, title, start = 0, ...props }) => {
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  return (
    <Box position="relative" w="full" bg="gray.900" overflow="hidden" sx={{ aspectRatio: '16 / 9' }} aria-busy={playing && !ready} {...props}>
      {!ready && <PreviewImage src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`} alt="" sizes="(max-width: 480px) 100vw, 600px" position="absolute" inset={0} />}
      {!playing ? (
        <Box
          as="button"
          type="button"
          aria-label={`Play ${title}`}
          onClick={() => setPlaying(true)}
          position="absolute"
          inset={0}
          w="full"
          h="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="blackAlpha.200"
          color="white"
          _hover={{ bg: 'blackAlpha.400' }}
          _focusVisible={{ outline: '3px solid', outlineColor: 'teal.300', outlineOffset: '-3px' }}
        >
          <Box display="flex" alignItems="center" justifyContent="center" w="64px" h="44px" borderRadius="xl" bg="#c4302b" boxShadow="lg">
            <Icon as={FaPlay} boxSize={5} ml={1} aria-hidden="true" />
          </Box>
        </Box>
      ) : (
        <>
          {!ready && <Text role="status" position="absolute" bottom={3} left={3} color="white" bg="blackAlpha.800" px={3} py={1} borderRadius="md">Loading video…</Text>}
          <Box
            as="iframe"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1${start ? `&start=${start}` : ''}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={event => { setReady(true); event.currentTarget.focus() }}
            position="absolute"
            inset={0}
            w="full"
            h="full"
            border={0}
            opacity={ready ? 1 : 0}
          />
        </>
      )}
    </Box>
  )
}

export default YouTubePreview
