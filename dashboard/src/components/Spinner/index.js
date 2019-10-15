// React
import React from 'react'
import PropTypes from 'prop-types';

// Others
import { BounceLoader } from 'react-spinners'

// Spinner
const Spinner = ({ loading }) => (
  <BounceLoader
    css={{ margin: '100px auto 0 auto', display: 'block' }}
    sizeUnit="px"
    size={280}
    color="#5e72e4"
    loading={loading}
  />
)

Spinner.propTypes = { loading: PropTypes.bool.isRequired }

export default Spinner
