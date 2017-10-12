import React, {Component} from 'react'
import Layout from './structure/Layout'
import * as ServerApi from './lib/serverApi'

class DrinkDataProvider extends Component {
  state = {
    isLoaded: false,
    drinks: []
  }

  methods = {
    getAllDrinks: () =>
      ServerApi.getAllDrinks()
        .then(drinks =>
          this.setState({
            isLoaded: true,
            drinks: drinks
          })),

    addDrink: (newDrink) =>
      ServerApi.addDrink(newDrink)
        .then((res) => console.log('serverApi', res))
  }

  componentDidMount () {
    this.methods.getAllDrinks()
  }

  render () {
    const drinkData = {
      ...this.state,
      ...this.methods
    }
    return this.state.isLoaded ? <Layout drinkData={drinkData} /> : null
  }
}
export default DrinkDataProvider
