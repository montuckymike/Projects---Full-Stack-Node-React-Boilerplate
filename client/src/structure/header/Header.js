import React from 'react'
import NavBar from './NavBar'
import injectSheet from 'react-jss'
import Gravatar from 'react-gravatar'
import PropTypes from 'prop-types'

const propTypes = {
  classes: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
}

const styles = {
  masterDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'fixed !important',
    top: 0,
    zIndex: 1,
    background: 'rgba(250,250,250,.5)',
    width: '100%'
  },
  navPanel: {
    width: '100vw',
    marginLeft: 10
  },
  gravatar: {
    width: '25%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  avatar: {
    margin: 10,
    width: 50,
    height: 50
  },
  input: {
    marginTop: 10,
    width: '55%',
    height: 40
  },
  gravatarImg: {
    borderRadius: '50px 50px 50px 50px'
  }
}

const enhancer = injectSheet(styles)

const Header = props => {
  const { classes, userData } = props
  return (
    <header className={classes.header}>
      <NavBar userData={userData} />
    </header>
  )
}
Header.propTypes = propTypes

export default enhancer(Header)
