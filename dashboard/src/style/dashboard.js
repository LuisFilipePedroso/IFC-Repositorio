// Imports
import styled from 'styled-components'

// DashboardWrapper
export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
