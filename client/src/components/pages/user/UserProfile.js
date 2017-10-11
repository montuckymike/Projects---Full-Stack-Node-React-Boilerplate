import React from 'react'
import injectSheet from 'react-jss'
import Avatar from 'material-ui/Avatar'

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10,
    width: 50,
    height: 50
  }
}

const enhancer = injectSheet(styles)

const UserProfile = ({classes}) => {
  return (
    <div className={classes.userProfile}>
      <Avatar src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png' className={classes.avatar} />
    </div>
  )
}

export default enhancer(UserProfile)
