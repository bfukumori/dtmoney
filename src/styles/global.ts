import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['green-500']};
}

html {
  @media (max-width: 390px) {
   font-size: 87.5%;
  }
}

body {
  background-color: ${({ theme }) => theme.colors['gray-800']};
  color: ${({ theme }) => theme.colors['gray-100']};
}

body, input, textarea, button {
  font: 400 1rem Roboto, sans-serif ;
}
`
