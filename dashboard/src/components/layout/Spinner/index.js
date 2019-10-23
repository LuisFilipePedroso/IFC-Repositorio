// React
import React from 'react'
import PropTypes from 'prop-types';

// Others
import { BeatLoader } from 'react-spinners'

// Spinner
const Spinner = ({ loading }) => (
  <BeatLoader
    css={style}
    sizeUnit="px"
    size={100}
    color="#5e72e4"
    loading={loading}
  />
)

// Styles
const style = {
  display: 'block',
  margin: '100px auto 0 auto',
  textAlign: 'center'
}

// Props
Spinner.propTypes = { loading: PropTypes.bool.isRequired }

export default Spinner
