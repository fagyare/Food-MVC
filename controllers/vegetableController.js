const vegetables = require('../models/vegetables')


// index function: The callback func originally from "app.get('/', () =>{})"
function index(req, res) {
    res.render('vegetables/Index', {vegetables})
}

// Show function // index function: The callback func originally from "app.get('/:index', () =>{})"
// They now have names: "index" and "show"
function show(req, res) {
    res.render('vegetables/Show', {vegetable: vegetables[req.params.index]})
}

module.exports = { index, show }

