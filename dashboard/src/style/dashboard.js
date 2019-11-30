// Imports
import styled from 'styled-components'

// DashboardWrapper
export const DashboardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* ============ Mobile ============ */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
