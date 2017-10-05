import React from 'react'
import {NavLink} from 'react-router-dom'
import injectSheet from 'react-jss'

const styles = {
  navLinks: {
    border: 'solid red',
    display: 'flex',
    justifyContent: 'space-between'
  },
  links: {
    textDecoration: 'none',
    color: 'blue'
  }
}
const enhancer = injectSheet(styles)

const NavBar = (props) => {
  return (
    <div className={props.classes.navLinks}>
      <NavLink className={props.classes.links} to='/'>Home</NavLink>
      <NavLink className={props.classes.links} to='/Randomizer'>Randomizer</NavLink>
      <NavLink className={props.classes.links} to='/AddDrink'>AddDrink</NavLink>
      <NavLink className={props.classes.links} to='/AllDrinks'>AllDrinks</NavLink>
      <NavLink className={props.classes.links} to='/EditDrink'>EditDrink</NavLink>
      <NavLink className={props.classes.links} to='/ListUsers'>ListUsers</NavLink>
      <NavLink className={props.classes.links} to='/CreateUser'>CreateUser</NavLink>
      <NavLink className={props.classes.links} to='/Login'>Login</NavLink>
      <NavLink className={props.classes.links} to='/TopTen'>TopTen</NavLink>
      <NavLink className={props.classes.links} to='/UserProfile'>UserProfile</NavLink>

    </div>
  )
}

export default enhancer(NavBar)
