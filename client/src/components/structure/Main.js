import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import AddDrinkContainer from '../pages/admin/AddDrinkContainer'
import AllDrinks from '../pages/admin/AllDrinks'
import EditDrink from '../pages/admin/EditDrink'
import ListUsers from '../pages/admin/ListUsers'
import CreateUser from '../pages/user/CreateUser'
import Login from '../pages/user/Login'
import TopTen from '../pages/user/TopTen'
import UserProfile from '../pages/user/UserProfile'
import Randomizer from '../pages/user/Randomizer'
import injectSheet from 'react-jss'

const styles = {
  main: {
    position: 'fixed',
    padding: 0,
    top: 50,
    bottom: 25,
    left: 0,
    right: 0
  }
}

const enhancer = injectSheet(styles)

const Main = () => {
  return (
    <div>
      <Route path='/'exact component={Home} />
      <Route
        path='/AddDrink'
        render={() => <AddDrinkContainer />}
      />
      <Route
        path='/AllDrinks'
        render={() => <AllDrinks />}
      />
      <Route
        path='/EditDrink'
        render={() => <EditDrink />}
      />
      <Route
        path='/ListUsers'
        render={() => <ListUsers />}
      />
      <Route
        path='/CreateUser'
        render={() => <CreateUser />}
      />
      <Route
        path='/Login'
        render={() => <Login />}
      />
      <Route
        path='/TopTen'
        render={() => <TopTen />}
      />
      <Route
        path='/UserProfile'
        render={() => <UserProfile />}
      />
      <Route
        path='/Randomizer'
        render={() => <Randomizer />}
      />
    </div>
  )
}

export default enhancer(Main)
