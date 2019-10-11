// Imports
import styled from 'styled-components'

// DashboardWrapper
export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
// ContentWrapper
export const ContentWrapper = styled.div`
  min-width: 100vw;

  @media (min-width: 768px) {
    min-width: 0;
    width: 100%;
  }
`
