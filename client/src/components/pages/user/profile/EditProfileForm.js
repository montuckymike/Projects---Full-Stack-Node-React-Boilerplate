import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  isDairy: PropTypes.bool.isRequired,
  onDairyChanged: PropTypes.func.isRequired,
  isSweet: PropTypes.bool.isRequired,
  onSweetnessChanged: PropTypes.func.isRequired,
  favCoffee: PropTypes.string.isRequired,
  onFavCoffee: PropTypes.func.isRequired,
  favoriteCoffeeShop: PropTypes.string.isRequired,
  onFavoriteCoffeeShop: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const EditProfileForm = props => {
  const { classes } = props
  return (
    <form onSubmit={props.onSubmit}>
      First Name: <input type='text' className={classes.name} value={props.firstName} onChange={props.onFirstNameChanged} />
      Last Name: <input type='text' value={props.lastName} onChange={props.onLastNameChanged} />
      Email: <input type='text' value={props.email} onChange={props.onEmailChanged} />
      Password: <input type='text' value={props.password} onChange={props.onPasswordChanged} />
      Dairy Preference: <input type='text' value={props.isDairy} onChange={props.onDairyChanged} />
      Sweetness Preference: <input type='text' value={props.isSweet} onChange={props.onSweetnessChanged} />
      Favorite Coffee: <input type='text' value={props.favCoffee} onChange={props.onFavCoffee} />
      Favorite Coffee Shop: <input type='text' value={props.favoriteCoffeeShop} onChange={props.onFavoriteCoffeeShop} />

      <input
        type='submit'
        value='Submit Form'
      />
    </form>
  )
}
EditProfileForm.propTypes = propTypes

export default EditProfileForm
