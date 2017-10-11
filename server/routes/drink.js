const express = require('express')

const Router = express.Router()
const Drink = require('../models/Drink')

Router.route('/')
  .get((req, res) => {
    Drink.find((err, drinks) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'all the drinks ☕️', data: drinks })
      }
    })
  })

module.exports = Router
