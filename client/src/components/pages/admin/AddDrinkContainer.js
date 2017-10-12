import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {drinkData} from '../../../lib/propTypes'
import AddDrinkForm from './AddDrinkForm'

const propTypes = {
  drinkData,
  history: PropTypes.object.isRequired
}

class AddDrinkContainer extends Component {
  state = {
    name: '',
    isSweet: '',
    isDairy: '',
    image: ''
  }

  onNameChanged = (event) => this.setState({
    name: event.target.value
  })

  onDairyChanged = (event) => this.setState({
    isDairy: event.target.value
  })

  onImageChanged = (event) => this.setState({
    image: event.target.value
  })
  onSweetnessChanged = (event) => this.setState({
    isSweet: event.target.value
  })
  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.drinkData)
    this.props.drinkData.addDrink(this.state)
    this.props.history.push('/AllDrinks')
    console.log('add button worked')
  }
  render () {
    return (
      <AddDrinkForm
        onNameChanged={this.onNameChanged}
        onDairyChanged={this.onDairyChanged}
        onImageChanged={this.onImageChanged}
        onSweetnessChanged={this.onSweetnessChanged}
      />
    )
  }
}
AddDrinkContainer.propTypes = propTypes

export default AddDrinkContainer
