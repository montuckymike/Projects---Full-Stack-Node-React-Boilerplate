import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'

const propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

const styles = {
  drinkItem: {
    background: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '33%',
    margin: 25
  },
  thumbnail: {
    width: '100%'
  },
  drinkTitle: {
    textAlign: 'center',
    color: 'white'
  },
  imageTitle: {
    background: '#2c3e50'
  },
  drinkChoices: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  p: {
    fontSize: 12
  },
  price: {
    fontSize: 50
  },
  button: {
    backgroundColor: '#34495e',
    color: 'white',
    border: 'solid #34495e 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    marginBottom: 10,
    justifyContent: 'space-around'
  }
}

const enhancer = injectSheet(styles)

const DrinkCard = props => {
  const { classes } = props
  return (
    <div className={classes.drinkItem}>
      <div className={classes.imageTitle}>
        <img className={classes.thumbnail} src={props.drink.image} />
        <h1 className={classes.drinkTitle}> Name: {props.drink.name}</h1>
      </div>
      <div className={classes.drinkChoices}>
        <p> Eventually slider things </p>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={props.onEdit}>Edit</button>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  )
}

DrinkCard.propTypes = propTypes

export default enhancer(DrinkCard)
