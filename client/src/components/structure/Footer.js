import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 35,
    backgroundColor: '#2980b9',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20
  },
  p: {
    color: 'white',
    fontSize: 20
  }
}

const enhancer = injectSheet(styles)

const Footer = (props) =>
  <div className={props.classes.footer}>
    <p className={props.classes.p}> A coffee app for coffee people</p>
  </div>

export default enhancer(Footer)
