const express = require('express')

// create our router 
const router = express.Router()

const vegetableController = require('../controllers/vegetableController')



// Setup an "INDEX" route for vegetables & attaching it to router object
router.get('/', vegetableController.index)

// Setup a "NEW" route for creating vegetable
router.get('/new', vegetableController.new)

// Setup a "DELETE" route 
router.delete('/:name', vegetableController.delete)

// Setup an "UPDATE" route for updating a specific vegetable 
router.put('/:name', vegetableController.update)

// Set up "CREATE" routee for vegetables data 
router.post('/', vegetableController.create)

// Setup an "EDIT" route for editing vegetable
router.get('/:id/edit', vegetableController.edit)

// Setup a "SHOW" route for vegetables, attach it to the router (show-index tags the index of the types of vegetable in the vegetables array)
router.get('/:index', vegetableController.show) // req.params.index tags specific vegetable type in the arr


module.exports = router