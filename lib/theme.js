import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('day.canvas', '#202023')(props),
      ...(props.colorMode === 'light' ? { color: 'day.ink' } : {})
    },
    ...(props.colorMode === 'light'
      ? {
          '::selection': { bg: '#cce4e1', color: '#243344' },
          'body.chakra-ui-light': {
            '--portfolio-accent': '#17636e',
            '--portfolio-thumb-shadow':
              '0 0 0 1px #d8e0e3, 0 6px 20px rgba(36, 51, 68, 0.06)',
            '--portfolio-thumb-hover-shadow':
              '0 0 0 1px #88b8b9, 0 12px 28px rgba(36, 51, 68, 0.12)'
          }
        }
      : {})
  })
}

const components = {
  Heading: {
    baseStyle: props =>
      props.colorMode === 'light' ? { color: 'day.ink' } : {},
    variants: {
      'section-title': props => ({
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: mode('#8bb8b4', '#525252')(props),
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      })
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('day.link', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
  Button: {
    variants: {
      solid: props =>
        props.colorMode === 'light' && props.colorScheme === 'teal'
          ? {
              bg: 'day.link',
              color: 'white',
              _hover: { bg: '#124f58' },
              _active: { bg: '#103f47' }
            }
          : {}
    }
  },
  Badge: {
    variants: {
      subtle: props =>
        props.colorMode === 'light' &&
        ['green', 'teal'].includes(props.colorScheme)
          ? { bg: 'day.tint', color: 'day.link' }
          : {}
    }
  },
  Tag: {
    variants: {
      subtle: props =>
        props.colorMode === 'light' && props.colorScheme === 'teal'
          ? { container: { bg: 'day.tint', color: 'day.link' } }
          : {}
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca',
  day: {
    canvas: '#f8f7f4',
    surface: '#ffffff',
    ink: '#243344',
    muted: '#556575',
    subtle: '#626e7b',
    link: '#17636e',
    title: '#245579',
    border: '#d8e0e3',
    strongBorder: '#beced3',
    tint: '#eaf2f1',
    hover: '#edf4f3',
    gold: '#916323',
    goldBackground: '#faf1de'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
