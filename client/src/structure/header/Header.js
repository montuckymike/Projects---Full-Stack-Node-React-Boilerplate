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
    width: '75%'
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
        <input className={classes.input} type='text' placeholder='your name'></input>
        <Avatar className={classes.avatar}src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png' className={classes.avatar} />
      </div>
    </div>
  )
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default enhancer(Header)
