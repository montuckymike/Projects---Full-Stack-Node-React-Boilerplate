import React from 'react'
import NavBar from './NavBar'
import injectSheet from 'react-jss'
import Avatar from 'material-ui/Avatar'
import PropTypes from 'prop-types'

const styles = {
  masterDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
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
  }
}

const enhancer = injectSheet(styles)

const Header = ({classes}) => {
  return (
    <div className={classes.masterDiv}>
      <div className={classes.navPanel}>
        <NavBar />
      </div>
      <div className={classes.gravatar}>
        <Avatar className={classes.avatar}src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Coffee-cup-icon.png' />
      </div>
    </div>
  )
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default enhancer(Header)
