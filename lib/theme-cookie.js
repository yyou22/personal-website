// Only the theme preference belongs in serialized page props.
export function getThemeCookie(cookies = '') {
  const match = cookies.match(/(?:^|;\s*)chakra-ui-color-mode=(light|dark)(?:;|$)/)
  return match ? `chakra-ui-color-mode=${match[1]}` : ''
}
