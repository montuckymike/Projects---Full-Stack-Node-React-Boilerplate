import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import AddDrink from '../pages/admin/AddDrink'
import AllDrinks from '../pages/admin/AllDrinks'
import EditDrink from '../pages/admin/EditDrink'
import ListUsers from '../pages/admin/ListUsers'
import CreateUser from '../pages/user/CreateUser'
import Login from '../pages/user/Login'
import TopTen from '../pages/user/TopTen'
import UserProfile from '../pages/user/UserProfile'

const Main = () => {
  return (
    <div>
      <Route path='/'exact component={Home} />
      <Route
        path='/AddDrink'
        render={() => <AddDrink />}
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
    </div>
  )
}

export default Main
