import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    background: {
      image: 'url("http://i65.tinypic.com/4twy8p.jpg")'
    },
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20
  }
}

const enhancer = injectSheet(styles)

const Footer = (props) =>
  <div className={props.classes.footer}>
  </div>

export default enhancer(Footer)
