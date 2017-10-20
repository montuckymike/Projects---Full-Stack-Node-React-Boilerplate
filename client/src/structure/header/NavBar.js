import React from 'react'
import {NavLink} from 'react-router-dom'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Gravatar from 'react-gravatar'

const propTypes = {
  classes: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
}

const styles = {
  navLinks: {
    display: 'flex',
    padding: 20,
    top: 0,
    width: '100%'
  },
  links: {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'Merriweather'
  },
  navLinksLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%'
  },
  navLinksGravatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '25%'
  },
  gravatarImg: {
    borderRadius: '50px'
  }
}
const enhancer = injectSheet(styles)

const NavBar = props => {
  const { classes, userData } = props
  return (
    <div className={classes.navLinks}>
      <div className={classes.navLinksLinks}>
        <NavLink className={classes.links} to='/'>Home</NavLink>
        <NavLink className={classes.links} to='/Randomizer'>Randomizer</NavLink>
        <NavLink className={classes.links} to='/AllDrinks'>All Drinks</NavLink>
        <NavLink className={classes.links} to='/AddDrink'>Add Drink</NavLink>
        { !userData.user ? <NavLink className={classes.links} to='/CreateUser'>Sign Up</NavLink>
          : null }
        { !userData.user ? <NavLink className={classes.links} to='/Login'>Login</NavLink> : null }
        { userData.user ? <NavLink className={classes.links} to='/Profile'>Profile</NavLink> : null}
      </div>
      <div className={classes.navLinksGravatar}>
        <Gravatar className={classes.gravatarImg} email={userData && userData.user ? userData.user.local.email : 'one@gmail.com'} size={60} rating='pg' default='wavatar' />
      </div>
    </div>
  )
}
NavBar.propTypes = propTypes

export default enhancer(NavBar)
