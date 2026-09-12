import NextImage from 'next/image'
import { Box } from '@chakra-ui/react'
import previews from '../lib/preview-images.json'

// Pre-sized static files avoid a third-party request and first-visit resizing.
const PreviewImage = ({ src, preview: suppliedPreview, unoptimized = false, alt = '', priority = false, objectFit = 'cover', objectPosition = 'center', sizes = '320px', loading, ...props }) => {
  const preview = suppliedPreview || previews[src]
  if (unoptimized || !preview) {
    return <Box as="img" src={src} alt={alt} loading={priority ? 'eager' : (loading || 'lazy')} decoding="async" w="full" h="full" objectFit={objectFit} objectPosition={objectPosition} {...props} />
  }
  const loader = ({ width }) => (preview.variants.find(image => image.width >= width) || preview.variants[preview.variants.length - 1]).src
  return (
    <Box position="relative" w="full" h="full" {...props}>
      <NextImage
        src={preview.variants[preview.variants.length - 1].src}
        loader={loader}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        objectPosition={objectPosition}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : loading}
        lazyBoundary="600px"
        placeholder="blur"
        blurDataURL={preview.blurDataURL}
      />
    </Box>
  )
}

export default PreviewImage
