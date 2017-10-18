import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
// import ButtonBase from 'material-ui/ButtonBase'
// import Typography from 'material-ui/Typography'
import DrinkCard from '../admin/drink/DrinkCard'

const styles = {
  main: {
    border: 'solid pink'
  }
}
const enhancer = injectSheet(styles)

const Randomizer = (props) => {
  return (
    <div className={props.classes.main}>
      <h1>Randomizer app card will render here</h1>
      <button type='button' onClick={props.drinkData.getRandomDrink}>RANDOMIZER 2000</button>
      {
        props.drinkData && props.drinkData.randomDrink
          ? <DrinkCard
            key={props.drinkData.randomDrink._id}
            drink={props.drinkData.randomDrink}
          />
          : <h1> No Drinks </h1>
      }
    </div>
  )
}
Randomizer.propTypes = {
  classes: PropTypes.object.isRequired,
  randomDrink: PropTypes.func.isRequired,
  drinkData: PropTypes.object.isRequired
}
export default enhancer(Randomizer)
