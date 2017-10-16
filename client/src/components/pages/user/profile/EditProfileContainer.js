import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../../lib/propTypes'
import EditProfileForm from './EditProfileForm'
import {withRouter} from 'react-router-dom'

class EditProfileContainer extends Component {
  static propTypes = {
    userData: AppPropTypes.userData,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }
  constructor (props) {
    super()
    const profileId = props.match.params.profileId
    const profile = props.userData.findUserById(profileId)

    this.state = {
      _id: profile._id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      password: profile.password,
      isDairy: profile.isDairy,
      isSweet: profile.isSweet,
      favCoffee: profile.favCoffee,
      favoriteCoffeeShop: profile.favoriteCoffeeShop
    }
  }

onFirstNameChanged = (event) => this.setState({firstName: event.target.value})

onLastNameChanged = (event) => this.setState({lastName: event.target.value})

onEmailChanged = (event) => this.setState({email: event.target.value})

onPasswordChanged = (event) => this.setState({password: event.target.value})

onDairyChanged = (event) => this.setState({isDairy: event.target.value})

onSweetnessChanged = (event) => this.setState({isSweet: event.target.value})

onFavCoffee = (event) => this.setState({favCoffee: event.target.value})

onFavoriteCoffeeShop = (event) => this.setState({favoriteCoffeeShop: event.target.value})

onSubmit = (event) => {
  event.preventDefault()
  this.props.userData.updateUser(this.state)
  this.props.history.push('/profile')
  console.log('Submit Form Worked')
}

render () {
  return (
    <EditProfileForm
      {...this.state}
      onFirstNameChanged={this.onFirstNameChanged}
      onLastNameChanged={this.onLastNameChanged}
      onEmailChanged={this.onEmailChanged}
      onPasswordChanged={this.onPasswordChanged}
      onDairyChanged={this.onDairyChanged}
      onSweetnessChange={this.onSweetnessChanged}
      onSubmit={this.onSubmit}
    />)
}
}

export default withRouter(EditProfileContainer)