const express = require('express')

// create our router and attach it to express 
const router = express.Router()

// load our controller and its routes logic
const meatController = require('../controllers/meatController')

// Setup an "index" route for meats & attaching it to router object
router.get('/', meatController.index)

// Setup a "NEW" route for creating meat
router.get('/new', meatController.new)

// Setup a "DELETE" route 
router.delete('/:name', meatController.delete)

// Setup an "UPDATE" route for updating a specific meat 
router.put('/:name', meatController.update)

// Set up "create" routee for meats data 
router.post('/', meatController.create)

// Setup an "EDIT" route for editing meat
router.get('/:id/edit', meatController.edit)

// Setup a "SHOW" route for meats, attach it to the router (show-index tags the index of the types of meat in the meats array)
router.get('/:index', meatController.show) // req.params.index tags specific meat type in the arr

module.exports = router 
