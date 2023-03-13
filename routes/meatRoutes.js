const express = require('express')

// create our router and attach it to express 
const router = express.Router()

// load our controller and its routes logic
const meatController = require('../controllers/meatController')

// Setup an "index" route for fruits & attaching it to router object
router.get('/', meatController.index)

// // Setup a "new" route for creating fruit
// router.get('/new', meatController.new)
// // Set up "create" routee for fruits data 
// router.post('/meats', meatController.create)


// Setup a "show" route for fruits, attach it to the router (show-index tags the index of the types of fruit in the fruits array)
router.get('/:index', meatController.show)

module.exports = router 
