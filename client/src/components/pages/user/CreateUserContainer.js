import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CreateUser from './CreateUser'
import {withRouter} from 'react-router-dom'

class CreateUserContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    UserDataProvider: PropTypes.object.isRequired
  }

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  onFirstNameChanged = (event) => this.setState({
    firstName: event.target.value
  })

  onLastNameChanged = (event) => this.setState({
    lastName: event.target.value
  })

  onEmailChanged = (event) => this.setState({
    email: event.target.value
  })

  onPasswordChanged = (event) => this.setState({
    password: event.target.value
  })

  onSubmit = (event) => {
    event.preventDefault()
    console.log('On Submit triggered')
    this.props.UserDataProvider.addUser(this.state)
      .then(() => this.props.history.push('/'))
      .then(() => alert(`Congrats, you are all signed up ${this.state.firstName}`))
  }

  render () {
    return (
      <CreateUser
        firstName={this.state.firstName}
        onFirstNameChanged={this.onFirstNameChanged}
        lastName={this.state.lastName}
        onLastNameChanged={this.onLastNameChanged}
        email={this.state.email}
        onEmailChanged={this.onEmailChanged}
        password={this.state.password}
        onPasswordChanged={this.onPasswordChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default withRouter(CreateUserContainer)
