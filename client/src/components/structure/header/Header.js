import React from 'react'
import NavBar from './NavBar'
import injectSheet from 'react-jss'

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
  gImg: {
    border: 'solid purple',
    height: '2em',
    width: '2em',
    borderRadius: '25%'
  }
}
const enhancer = injectSheet(styles)

const Header = (props) => {
  return (
    <div className={props.classes.masterDiv}>
      <div className={props.classes.navPanel}>
        <NavBar />
      </div>
      <div className={props.classes.gravatar}>
        <input type='text' placeholder='your name'></input>
        <img className={props.classes.gImg} src='https://upload.wikimedia.org/wikipedia/commons/e/ea/Re_south_park_new_avatar.png' />
      </div>
    </div>
  )
}
// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default enhancer(Header)
