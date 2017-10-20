import React from 'react'
import {NavLink} from 'react-router-dom'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  navLinks: {
    border: 'solid black',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20
  },
  links: {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'Merriweather'
  }
}
const enhancer = injectSheet(styles)

const NavBar = props => {
  const { classes } = props
  return (
    <div className={classes.navLinks}>
      <NavLink className={classes.links} to='/'>Home</NavLink>
      <NavLink className={classes.links} to='/Randomizer'>Randomizer</NavLink>
      <NavLink className={classes.links} to='/AllDrinks'>All Drinks</NavLink>
      <NavLink className={classes.links} to='/AddDrink'>Add Drink</NavLink>
      <NavLink className={classes.links} to='/CreateUser'>Sign Up</NavLink>
      <NavLink className={classes.links} to='/Login'>Login</NavLink>
      <NavLink className={classes.links} to='/Profile'>Profile</NavLink>
    </div>
  )
}

NavBar.propTypes = propTypes

export default enhancer(NavBar)
