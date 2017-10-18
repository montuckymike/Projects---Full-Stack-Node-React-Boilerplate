import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  signupBtn: {
    background: '#9b59b6'
  }
}

const enhancer = injectSheet(styles)

export const signupBtn = (props) => <button onClick='/profile' className={props.classes.signupBtn}>Sign NOT Now!</button>

export const randomizerBtn = (props) => <button onClick='/profile' className={props.classes.signupBtn}>Randomize!</button>

/* want to add onClick to button
need to figure out how to get the enhancer() to work
*/
