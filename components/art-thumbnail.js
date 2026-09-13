import { Box } from '@chakra-ui/react'
import artPreviews from '../lib/art-previews.json'

const artworks = [
  { file: 'the-long-way-home-original.jpg', position: '50% 55%' },
  { file: 'blessing-of-the-mountain.jpg', position: '50% 50%' },
  { file: 'cool-scottish-pilot-original.jpg', position: '68% 42%' }
]

const ArtThumbnail = () => (
  <Box
    as="span"
    role="img"
    aria-label="Art collage: The Long Way Home (2026), Blessing of the Mountain (2014), and Cool Scottish Pilot (2025)"
    position="absolute"
    inset={0}
    display="grid"
    gridTemplateColumns="repeat(3, minmax(0, 1fr))"
    gridTemplateRows="minmax(0, 1fr)"
    gap="3px"
    bg="#f8f7f4"
  >
    {artworks.map(({ file, position }) => (
      <Box as="span" key={file} position="relative" minW={0} overflow="hidden">
        <Box
          as="img"
          src={artPreviews[file].variants[0].src}
          srcSet={artPreviews[file].variants.map(image => `${image.src} ${image.width}w`).join(', ')}
          alt=""
          position="absolute"
          inset={0}
          display="block"
          w="full"
          h="full"
          objectFit="cover"
          objectPosition={position}
          sizes="(max-width: 480px) 33vw, 120px"
          loading="lazy"
          decoding="async"
          sx={{ dynamicRangeLimit: 'standard' }}
        />
      </Box>
    ))}
  </Box>
)

export default ArtThumbnail
