import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from './paragraph'
import styled from '@emotion/styled'

const GridBox = styled.span`
  div {
    transition: transform 0.2s ease;
  }
  .code {
    position: absolute;
    top: 0;
    white-space: pre;
    color: #88ccca00;
    transition: color 0.3s ease-out;
  }
  .code:first-of-type {
    right: 100%;
  }
  .code:last-of-type {
    left: 100%;
  }
  &:hover div {
    transform: scale(1.05);
  }
  &:hover .code{
    color: #88ccca;
  }
`
const WorkBox = styled.span`
  display: block;
  .work-thumb {
    box-shadow: 0 0 0 1px rgba(128, 128, 128, 0.22);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  .work-thumb img {
    transition: transform 0.45s ease;
  }
  .code {
    display: inline-block;
    margin-left: 0.25em;
    color: #88ccca00;
    transform: translateX(-4px);
    transition: color 0.25s ease-out, transform 0.25s ease-out;
  }
  &:hover .work-thumb {
    box-shadow: 0 0 0 1px #88ccca, 0 10px 28px rgba(0, 0, 0, 0.22);
    transform: translateY(-2px);
  }
  &:hover .work-thumb img {
    transform: scale(1.04);
  }
  &:hover .code,
  &:focus-within .code {
    color: #88ccca;
    transform: translateX(0);
  }
`
const isGif = (thumbnail) => {
  return typeof thumbnail === 'object' && thumbnail.src.endsWith('.gif');
}

// For works linked to the outside
export const GridItem = ({ children, href, title, thumbnail, blurPlaceholder }) => (
  <Box w="100%" textAlign="center">
    <GridBox>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          blurDataURL={isGif(thumbnail) ? blurPlaceholder?.src : undefined}
          loading="lazy"
          layout="intrinsic"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2} fontSize={20} position="relative" display="inline-block">
          <span className="code"> &#8611; </span>{title}<span className="code"> &#8610; </span>
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </GridBox>
  </Box>
)

// For works displayed directly inside the site
export const WorkGridItem = ({ children, id, title, thumbnail, blurPlaceholder, thumbnailBrand, thumbnailObjectFit, thumbnailPosition, thumbnailDynamicRange }) => (
  <Box w="100%" textAlign="left">
    <NextLink href={`/works/${id}`}>
    <WorkBox>
      <LinkBox cursor="pointer">
        <Box
          as="span"
          className="work-thumb"
          display="flex"
          flexDirection="column"
          position="relative"
          sx={{ aspectRatio: '16 / 9' }}
          borderRadius="12px"
          overflow="hidden"
          bg={thumbnailBrand ? 'white' : undefined}
        >
        {thumbnailBrand && (
          <Box
            as="span" display="flex" alignItems="center" flexShrink={0}
            gap={2} px={3} py={1.5}
            position={thumbnailBrand.overlay ? 'absolute' : undefined}
            top={thumbnailBrand.overlay ? 0 : undefined}
            left={thumbnailBrand.overlay ? 0 : undefined}
            right={thumbnailBrand.overlay ? 0 : undefined}
            zIndex={thumbnailBrand.overlay ? 1 : undefined}
            bg={thumbnailBrand.overlay ? 'rgba(0, 0, 0, 0.65)' : undefined}
            backdropFilter={thumbnailBrand.overlay ? 'blur(4px)' : undefined}
            color={thumbnailBrand.overlay ? 'white' : 'gray.800'}
          >
            <Image src={thumbnailBrand.logo} alt="" width={20} height={20} objectFit="contain" style={{ clipPath: thumbnailBrand.logo === '/images/adobe2.png' ? 'inset(0 3% 0 0)' : undefined }} />
            <Text as="span" fontSize="sm" fontWeight="semibold">{thumbnailBrand.name}</Text>
          </Box>
        )}
        <Box as="span" display="block" position="relative" flex={1} minH={0} sx={{ dynamicRangeLimit: thumbnailDynamicRange }}>
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit={thumbnailObjectFit || (thumbnailBrand ? 'contain' : 'cover')}
          objectPosition={thumbnailPosition}
          className="grid-item-thumbnail"
          placeholder="blur"
          blurDataURL={isGif(thumbnail) ? blurPlaceholder?.src : undefined}
          loading="lazy"
        />
        </Box>
        </Box>
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={3} fontSize={18} fontWeight="medium" lineHeight={1.35}>
            {title.includes(' ') && `${title.slice(0, title.lastIndexOf(' '))} `}
            <Box as="span" whiteSpace="nowrap">
              {title.slice(title.lastIndexOf(' ') + 1)}
              <span className="code" aria-hidden="true">&#8594;</span>
            </Box>
          </Text>
        </LinkOverlay>
        <Text mt={1} fontSize={14} lineHeight={1.55} opacity={0.75}>{children}</Text>
      </LinkBox>
      </WorkBox>
    </NextLink>
  </Box>
)
export const WorkGridItemWithModal = ({
  children,
  id,
  title,
  thumbnail,
  description,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box w="100%" textAlign="center" onClick={onOpen} cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          blurDataURL={isGif(thumbnail) ? blurPlaceholder?.src : undefined}
        />
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{children}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={useColorModeValue('#f0e7db', '#202023')}>
          <ModalHeader
            bgColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box alignItems="center">
              <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
              />
              <Paragraph>{description}</Paragraph>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              onClick={onClose}
              m={4}
            >
              Close
            </Button>
            <NextLink href={`/works/${id}`}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Detail
              </Button>
            </NextLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
