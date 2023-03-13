const express = require('express')

// create our router 
const router = express.Router()

const vegetableController = require('../controllers/vegetableController')


router.get('/', vegetableController.index)

router.get('/:index', vegetableController.show)

module.exports = router