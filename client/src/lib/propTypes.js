import PropTypes from 'prop-types'

export const user = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}).isRequired

export const domainData = PropTypes.shape({
  
}).isRequired
