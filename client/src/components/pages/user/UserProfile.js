import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  userProfile: {
    border: 'solid #2980b9',
    width: '74.5%'
  }
}

const enhancer = injectSheet(styles)

const UserProfile = (props) => {
  return (
    <div className={props.classes.userProfile}>
      UserProfile
    </div>
  )
}

export default enhancer(UserProfile)
