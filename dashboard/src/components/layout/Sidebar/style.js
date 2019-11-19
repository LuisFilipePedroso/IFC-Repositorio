// Imports
import styled from 'styled-components'

// Brand Image
export const BrandImage = styled.img`
  width: 100%;
  max-width: 80% !important;
  max-height: unset !important;
  @media screen and (max-width: 768px) {
    width: unset;
  }
`

// Navbar Menu
export const NavbarMenu = styled.ul`
  a.nav-link {
    transition: all .3s;
    i {
      transition: all .3s;
    }
    &.active {
      font-weight: bold !important;
      color: #5e72e4 !important;
    }
    &:hover {
      color: #5e72e4 !important;
      i {
        transform: translateX(6px);
      }
    }
  }
`
