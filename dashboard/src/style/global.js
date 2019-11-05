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
    width: 100%;
  }

  body {
    overflow-x: hidden;
  }

  .main-content {
    @media screen and (min-width: 769px) {
      width: 100%;
    }
  }

  ::-webkit-scrollbar {
    @media screen and (min-width: 769px) {
      width: 10px;
    }
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #5e72e4;
  }
`
