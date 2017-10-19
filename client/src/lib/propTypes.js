import PropTypes from 'prop-types'

export const user = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
})

export const userData = PropTypes.shape({
  isLoaded: PropTypes.bool.isRequired,
  addUser: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  getUserById: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
})

export const drink = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isDairy: PropTypes.bool.isRequired,
  isSweet: PropTypes.bool.isRequired
})

export const drinkData = PropTypes.shape({
  isLoaded: PropTypes.bool.isRequired,
  addDrink: PropTypes.func.isRequired,
  randomDrink: PropTypes.func.isRequired

}).isRequired
