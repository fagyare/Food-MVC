const fruits = require('../models/fruits')

// import Fruit model 
const Fruit = require('../models/FruitsModel')

// index function: The callback func originally from "app.get('/', () =>{})"
module.exports.index = async(req, res) => {
    // the method .find() will connect the data to the database 
    const fruitData = await Fruit.find()
    console.log(fruitData)
    res.render('fruits/Index', {fruits: fruitData})
}

// Show function // index function: The callback func originally from "app.get('/:index', () =>{})"
// They now have names: "index" and "show"
module.exports.show = async (req, res) =>  {
    console.log(req.params.index)
    const fruit = await Fruit.findById(req.params.id)
    console.log(fruit)
    res.render('fruits/Show', { fruit})
}

// GET/fruits/new 
module.exports.new = (req, res) => {
    res.render('fruits/New')
}

// Post/fruits 
module.exports.create = async (req, res) => {
    console.log('POST /fruits')
    console.log(req.body)
    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    try {
    const  result = await Fruit.create(req.body)
        console.log(result)
    } catch(err) {
        console.log('error is', err)
    }    

    // fruits.push(req.body)
    res.redirect('/fruits')
}

// DELETE /fruits/:name
module.exports.delete = (req, res) => {
    console.log("DELETE /fruits/:name")
    console.log(req.params)
    let index = fruits.findIndex((item) => item.name === req.params.name)
    fruits.splice(index, 1)
    res.redirect('/fruits')
}

// GET /fruits/:name/edit  changed to GET /fruits/:id/edit 
module.exports.edit = async (req, res ) => {
    console.log('GET /fruits/:id/edit')
    // let index = fruits.findIndex((item) => item.name === req.params.name)
   const fruit = await Fruit.findById(req.params.id)
    res.render('fruits/Edit', {fruit})
}

//PUT / fruits/:name  changed to PUT / fruits/:id
module.exports.update = async (req, res ) => {
    console.log('PUT / fruits/:id')
    console.log(req.body)
    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try {
    // pass the id (req.params.id) to find the document in the db & the form data (req.body) to update it
    await Fruit.findByIdAndUpdate(req.params.id, req.body) // id to find fruit and req.body is
    // let index = fruits.findIndex((item) => item.name === req.params.name)
    // fruits[index] = req.body
    res.redirect(`/fruits/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }

}
