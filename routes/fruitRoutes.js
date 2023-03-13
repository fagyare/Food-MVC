const express = require('express')

//Create our Router() & connect to express required 
const router = express.Router()

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// load our controller and its routes logic
const fruitController = require('../controllers/fruitController')

// Setup an "INDEX" route for fruits & attaching it to router object
router.get('/', fruitController.index)

// Setup a "NEW" route for creating fruit
router.get('/new', fruitController.new)

// Setup a "DELETE" route 
router.delete('/:name', fruitController.delete)

// Set up "CREATE" routee for fruits data 
router.post('/', fruitController.create)

// Setup a "SHOW" route for fruits, attach it to the router (show-index tags the index of the types of fruit in the fruits array)
router.get('/:index', fruitController.show) // req.params.index tags specific fruit type in the arr

module.exports = router
