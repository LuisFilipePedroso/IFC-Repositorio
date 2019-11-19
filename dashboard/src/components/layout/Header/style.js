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
  @media screen and (max-width: 768px) {
    display: none !important;
  }
`
