import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px black;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    
    color: ${(props) => props.theme.colors.text};
    line-height: 1.6;
  }
  
  body, button, input, textarea {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1 {
    color: ${(props) => props.theme.colors.title};
    font-size: 1.5rem;
    line-height: 1.3;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.colors.brand};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;

    svg {
      height: 0.75rem;
      width: 0.75rem;
    }
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.brand};
  }
`
