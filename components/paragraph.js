import styled from '@emotion/styled'

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;

  .chakra-ui-light & {
    text-align: left;
    text-indent: 0;
    line-height: 1.75;
  }
`

export default Paragraph
