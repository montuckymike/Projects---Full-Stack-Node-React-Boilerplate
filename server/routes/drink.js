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
    drink.loadData(req.body)
    drink.save((err, drink) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        console.log('added drink from backend', drink)
        res.json({ message: 'Added new Drink 😆', data: drink })
      }
    })
  })
Router.route('/id/:drink_id')
  .delete((req, res) => {
    Drink.remove({_id: req.params.drink_id}, (err) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'Drink Deleted', data: {} })
      }
    })
  })
  .put((req, res) => {
    Drink.findById(req.params.drink_id, (er, drink) => {
      if (er) return res.status(500)
      if (!drink) return res.status(404)
      drink.loadData(req.body)
      drink.save((err, updatedDrink) => {
        if (err) {
          res.json({ message: err, data: null })
        } else {
          res.json({ updatedDrink, message: 'Drink Updated' })
        }
      })
    })
  })
  .get((req, res) => {
    Drink.findById({_id: req.params.drink_id}, (err, drink) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'gotchu a drink☕️', data: drink })
      }
    })
  })

Router.route('/random')
  .get((req, res) => {
    Drink.find((err, drinks) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        const drink = drinks[Math.floor(Math.random() * drinks.length)]
        res.json({ message: 'random drink', data: drink })
      }
    })
  })
module.exports = Router
