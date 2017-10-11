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
          }))
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
