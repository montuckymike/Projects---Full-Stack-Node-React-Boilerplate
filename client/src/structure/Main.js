import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/pages/Home'
import AddDrinkContainer from '../components/pages/admin/AddDrinkContainer'
import AllDrinks from '../components/pages/admin/AllDrinks'
import EditDrink from '../components/pages/admin/EditDrink'
import ListUsers from '../components/pages/admin/ListUsers'
import CreateUserContainer from '../components/pages/user/CreateUserContainer'
import Login from '../components/pages/user/Login'
import TopTen from '../components/pages/user/TopTen'
import UserProfile from '../components/pages/user/UserProfile'
import Randomizer from '../components/pages/user/Randomizer'
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

const Main = ({drinkData}) => {
  return (
    <div>
      <Route path='/'exact component={Home} />
      <Route
        path='/AddDrink'
        render={() => <AddDrinkContainer />}
      />
      <Route
        path='/AllDrinks'
        render={() => <AllDrinks drinkData={drinkData} />}
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
        render={() => <CreateUserContainer />}
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
