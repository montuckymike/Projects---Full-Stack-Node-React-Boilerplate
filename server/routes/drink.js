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
  .post((req, res) => {
    const drink = new Drink()
    console.log(req.body)
    drink.loadData(req.body)
    drink.save((err, drink) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'Added new Drink 😆', data: drink })
      }
    })
  })
module.exports = Router
