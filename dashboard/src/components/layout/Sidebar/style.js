// Imports
import styled from 'styled-components'

// SibebarWrapper
export const SibebarWrapper = styled.div`
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;

  .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }

  .list-group {
    width: 15rem;
  }

  @media (min-width: 768px) {
    margin-left: 0;
  }
`
