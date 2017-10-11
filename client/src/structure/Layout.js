import React from 'react'
import Footer from './Footer'
import Header from './header/Header'
import Main from './Main'

const Layout = ({drinkData}) => {
  return (
    <div>
      <Header />
      <Main drinkData={drinkData} />
      <Footer />
    </div>
  )
}

export default Layout
