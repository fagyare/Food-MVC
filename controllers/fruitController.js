const fruits = require('../models/fruits')


// index function: The callback func originally from "app.get('/', () =>{})"
module.exports.index = (req, res) => {
    res.render('fruits/Index', {fruits})
}

// Show function // index function: The callback func originally from "app.get('/:index', () =>{})"
// They now have names: "index" and "show"
module.exports.show = (req, res) =>  {
    res.render('fruits/Show', {fruit: fruits[req.params.index]})
}

// GET/fruits/new 
module.exports.new = (req, res) => {
    res.render('fruits/New')
}


// Post/fruits 
module.exports.create = (req, res) => {
    
    console.log('POST /fruits')
    console.log(req.body)
    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
}

