import styled from 'styled-components'

export const BrandImage = styled.img`
  width: 100%;
  height: 82px;
  max-height: unset !important;
  @media screen and (max-width: 768px) {
    width: unset;
  }
  @media screen and (max-width: 325px) {
    width: 230px;
  }
`
