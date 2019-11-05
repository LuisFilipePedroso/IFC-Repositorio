// Imports
import { createGlobalStyle } from 'styled-components'

// Global style
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 1rem;
  }

  html,
  body,
  :root {
    height: 100%;
  }

  body {
    overflow-x: hidden;
  }
`
