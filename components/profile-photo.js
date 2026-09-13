import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import heroAssets from '../lib/hero-assets.json'

const profile = heroAssets.profile
const srcSet = profile.variants.map(image => `${image.src} ${image.width}w`).join(', ')
const src = (profile.variants.find(image => image.width === 200) || profile.variants[0]).src

const ProfilePhoto = () => (
  <>
    <Head>
      <link key="profile-photo" rel="preload" as="image" href={src} imagesrcset={srcSet} imagesizes="100px" />
    </Head>
    <Box
      as="img"
      src={src}
      srcSet={srcSet}
      sizes="100px"
      alt="Profile image"
      width={100}
      height={100}
      w="full"
      h="full"
      display="block"
      objectFit="cover"
      borderRadius="full"
      loading="eager"
      decoding="async"
    />
  </>
)

export default ProfilePhoto
