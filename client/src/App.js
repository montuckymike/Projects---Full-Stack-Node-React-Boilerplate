import React from 'react'
import Layout from './structure/Layout'
import {BrowserRouter} from 'react-router-dom'
import 'typeface-roboto'
import DrinkDataProvider from './DrinkDataProvider'

const App = () =>
  <BrowserRouter>
    <DrinkDataProvider>
      <Layout />
    </DrinkDataProvider>
  </BrowserRouter>

export default App
