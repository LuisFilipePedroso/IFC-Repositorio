// Imports
import styled from 'styled-components'

// Search Form
export const SearchForm = styled.form`
  i, .input-group-alternative {
    transition: all .3s;
  }
  &:hover {
    .input-group-alternative {
      border-color: #fff;
    }
    i {
      color: #fff;
    }
  }
  input {
    &::placeholder {
      transition: all .3s;
    }
    &:hover::placeholder {
      transform: translateX(12px);
    }
  }
  @media screen and (max-width: 767px) {
    display: block;
    margin: 0 auto;
    .input-group-alternative {
      width: 96vw !important;
    }
  }
  @media screen and (max-width: 320px) {
    .input-group-alternative {
      width: 92vw !important;
      input {
        width: 242px !important;
      }
    }
  }
`
// Header Content Container
export const HeaderContentContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 82px !important;
  }
`
