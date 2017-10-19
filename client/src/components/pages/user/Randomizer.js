import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
// import ButtonBase from 'material-ui/ButtonBase'
// import Typography from 'material-ui/Typography'
import DrinkCard from '../admin/drink/DrinkCard'
import ProgressLinear from '../../presentation/ProgressLinear'

const styles = {
  main: {
    border: 'solid pink'
  },
  heroImage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/espresso-cinemagraph.gif")'
  },
  randomizerCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '5%',
    border: 'dashed red'
  },
  randomizerBtnCont: {
    border: 'solid pink',
    width: '33.333%',
    display: 'flex',
    justifyContent: 'center'
  },
  randomDrinkCont: {
    border: 'solid green',
    width: '33.333%',
    display: 'flex',
    justifyContent: 'center'
  }
}
const enhancer = injectSheet(styles)

const images = [
  {
    url: 'https://burst.shopifycdn.com/photos/coffee-beans-from-above_925x.jpg',
    title: 'Breakfast',
    width: '40%'
  }
]

const Randomizer = (props) => {
  return (
    <div className={props.classes.main}>
      <div className={props.classes.heroImage}>
        <h1>Randomizer app card will render here</h1>
      </div>
      <div className={props.classes.randomizerCont}>
        <div className={props.classes.randomizerBtnCont}>
          <button type='button' onClick={props.drinkData.getRandomDrink}>RANDOMIZER 2000</button>
        </div>
        <div className={props.classes.randomDrinkCont}>
          {
            props.drinkData && props.drinkData.randomDrink
              ? <DrinkCard
                key={props.drinkData.randomDrink._id}
                drink={props.drinkData.randomDrink}
              />
              : <h1> <ProgressLinear /> No Drinks </h1>
          }
        </div>
      </div>
    </div>
  )
}
Randomizer.propTypes = {
  classes: PropTypes.object.isRequired,
  randomDrink: PropTypes.func.isRequired,
  drinkData: PropTypes.object.isRequired
}
export default enhancer(Randomizer)
