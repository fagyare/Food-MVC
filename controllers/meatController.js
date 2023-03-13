const meats = require('../models/meats')

// index function: The callback func originally from "app.get('/', () =>{})"
function index(req, res) {
    res.render('meats/Index', {meats})
}

// Show function // index function: The callback func originally from "app.get('/:index', () =>{})"
// They now have names: "index" and "show"
function show(req, res ) {
    res.render('meats/Show', {meat: meats[req.params.index]})
}

module.exports = { index, show }

