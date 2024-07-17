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
`
