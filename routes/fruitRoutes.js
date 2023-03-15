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
router.delete('/:id', fruitController.delete)

// Setup an "UPDATE" route for updating a specific fruit 
router.put('/:id', fruitController.update)

// Set up "CREATE" routee for fruits data 
router.post('/', fruitController.create)

// Setup an "EDIT" route for editing fruit
router.get('/:id/edit', fruitController.edit)

// Setup a "SHOW" route for fruits, attach it to the router (show-index tags the index of the types of fruit in the fruits array)
router.get('/:id', fruitController.show) // req.params.index tags specific fruit type in the arr

module.exports = router
