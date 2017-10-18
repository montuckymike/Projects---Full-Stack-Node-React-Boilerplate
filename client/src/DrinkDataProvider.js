import React, {Component} from 'react'
import * as ServerApi from './lib/serverApi'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.element.isRequired,
  userData: PropTypes.object.isRequired
}

class DrinkDataProvider extends Component {
  state = {
    isLoaded: false,
    drinks: [],
    randomDrink: undefined,
    drink: undefined
  }

  methods = {
    getAllDrinks: () =>
      ServerApi.getAllDrinks()
        .then(drinks => {
          console.log(drinks, 'where are all the drinks!')
          this.setState({
            isLoaded: true,
            drinks: drinks
          })
        }),

    addDrink: (newDrink) =>
      ServerApi.addDrink(newDrink)
        .then(() => {
          this.methods.getAllDrinks()
        }),

    deleteDrink: (drinkId) =>
      ServerApi.deleteDrink(drinkId)
        .then(() => {
          this.methods.getAllDrinks()
        }),

    getRandomDrink: () =>
      ServerApi.getRandomDrink()
        .then((res) => {
          console.log('random drink response', res)
          this.setState({
            isLoaded: true,
            randomDrink: res
          })
        }),

    getDrinkById: (drinkId) => {
      ServerApi.getDrinkById(drinkId)
        .then((drink) => {
          this.setState({
            drink: drink
          })
        })
    },

    updateDrink: (drinkId, drink) =>
      ServerApi.updateDrink(drinkId, drink)
        .then(this.methods.getAllDrinks)
  }

  componentDidMount () {
    this.methods.getAllDrinks()
  }

  render () {
    const drinkData = {
      ...this.state,
      ...this.methods
    }
    return React.cloneElement(this.props.children, {drinkData, userData: this.props.userData})
  }
}

DrinkDataProvider.propTypes = propTypes

export default DrinkDataProvider
