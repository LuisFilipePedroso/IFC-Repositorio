// React
import React from 'react'
import PropTypes from 'prop-types'

// Others
import { BeatLoader } from 'react-spinners'

// Spinner
const Spinner = ({ loading, size = 92 }) => (
  <BeatLoader
    css={style}
    sizeUnit="px"
    size={size}
    color="#5e72e4"
    loading={loading}
  />
)

// Styles
const style = {
  display: 'block',
  margin: '0 auto',
  textAlign: 'center'
}

// Props
Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  size: PropTypes.number,
}

export default Spinner
