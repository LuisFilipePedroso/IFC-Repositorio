// Imports
import { createGlobalStyle } from 'styled-components'

/**
 * Global styles: classes & html resets
 */
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
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
    &:hover {
      background: #5e72e4;
    }
  }

  .bg-dark-graph {
    background: #2a2a2a !important;
  }

  .bg-light-graph {
    background: #fff !important;
  }
`
