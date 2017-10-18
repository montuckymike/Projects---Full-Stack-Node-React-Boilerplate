import React, {Component} from 'react'
import PropTypes from 'prop-types'
import EditDrinkForm from './EditDrinkForm'
import {withRouter} from 'react-router-dom'

class EditDrinkContainer extends Component {
  static propTypes = {
    drinkData: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  state = {
    loaded: false,
    name: undefined,
    image: undefined,
    isDairy: undefined,
    isSweet: undefined
  }

  componentDidMount () {
    this.props.drinkData.getDrinkById(this.props.match.params.drinkId)
    setTimeout(() => {
      this.setState({
        name: this.props.drinkData.drink.name,
        image: this.props.drinkData.drink.image,
        isDairy: this.props.drinkData.drink.isDairy,
        isSweet: this.props.drinkData.drink.isSweet,
        loaded: true
      })
    }, 2000)
  }

  onNameChanged = (event) => this.setState({name: event.target.value})

  onImageChanged = (event) => this.setState({image: event.target.value})

  onDairyChanged = () => { this.setState({isDairy: !this.state.isDairy}) }

  onSweetnessChanged = () => { this.setState({isSweet: !this.state.isSweet}) }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.drinkData.updateDrink(this.props.match.params.drinkId, this.state)
    this.props.history.push('/AllDrinks')
    console.log('edited drink succcesssffulllie')
  }

  render () {
    return (
      this.state.loaded ? <EditDrinkForm
        {...this.state}
        onNameChanged={this.onNameChanged}
        onImageChanged={this.onImageChanged}
        onDairyChanged={this.onDairyChanged}
        onSweetnessChanged={this.onSweetnessChanged}
        onSubmit={this.onSubmit}
      /> : null
    )
  }
}

export default withRouter(EditDrinkContainer)
