import React from 'react'
import Layout from './components/structure/Layout'
import {BrowserRouter} from 'react-router-dom'
import 'typeface-roboto'

const App = () =>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>

export default App
