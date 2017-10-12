import React from 'react'
import Footer from './Footer'
import Header from './header/Header'
import Main from './Main'

const Layout = ({drinkData, userData}) => {
  return (
    <div>
      <Header />
      <Main drinkData={drinkData} userData={userData} />
      <Footer />
    </div>
  )
}

export default Layout
