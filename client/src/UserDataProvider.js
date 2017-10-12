import React, {Component} from 'react'
import Layout from './structure/Layout'
import * as ServerApi from './lib/serverApi'

class UserDataProvider extends Component {
  state = {
    isLoaded: false,
    users: null
  }

  methods = {
    getAllUsers: () =>
      ServerApi.getAllUsers()
        .then(users =>
          this.setState({
            isLoaded: true,
            users: users
          })),

    addUser: (newUser) =>
      ServerApi.addUser(newUser)
        .then(this.methods.getAllUsers),

    updateUser: (user) =>
      ServerApi.updateUser(user)
        .then(this.methods.getAllUsers),

    deleteUser: (userId) =>
      ServerApi.deleteUser(userId)
        .then(this.methods.getAllUsers),

    findUserById: (userId) =>
      ServerApi.findUserById(userId)
        .then(this.methods.getAllUsers)
  }

  componentDidMount () {
    this.methods.getAllUsers()
  }

  render () {
    const userData = {
      ...this.state,
      ...this.methods
    }
    return this.state.isLoaded ? <Layout userData={userData} /> : null
  }
}
export default UserDataProvider
