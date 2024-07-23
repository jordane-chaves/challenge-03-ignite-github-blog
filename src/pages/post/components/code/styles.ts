import styled from 'styled-components'

export const CodeContainer = styled.div`
  pre {
    background-color: ${(props) => props.theme.colors.post} !important;
    border-radius: 2px;

    padding: 1rem;
  }

  code[class*='language-'] {
    color: ${(props) => props.theme.colors.code.base};
    font-family: 'Fira Code', monospace;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;

    span[class*='keyword'] {
      color: ${(props) => props.theme.colors.code.keyword};
    }

    span[class*='boolean'],
    span[class*='number'],
    span[class*='string'] {
      color: ${(props) => props.theme.colors.code.number};
    }

    span[class*='comment'] {
      color: ${(props) => props.theme.colors.code.comment};
    }
  }
`
