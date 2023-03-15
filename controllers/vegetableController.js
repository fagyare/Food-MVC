const vegetables = require('../models/vegetables')

// import vegetable model 
const Vegetable = require('../models/VegetablesModel')


// index function: The callback func originally from "app.get('/', () =>{})"
module.exports.index = async (req, res)  => {
    // the method .find() will connect the data to the database 
    const vegetableData = await Vegetable.find()
    console.log(vegetableData)
        res.render('vegetables/Index', {vegetables: vegetableData})
}

// Show function // index function: The callback func originally from "app.get('/:index', () =>{})"
// They now have names: "index" and "show"
module.exports.show = async (req, res) => {
    console.log(req.params.index)
    const vegetable = await Meat.findById(req.params.index)
    console.log(vegetable)
    res.render('vegetables/Show', {vegetable: vegetable})
}

// GET/vegetables/new 
module.exports.new = (req, res) => {
    res.render('vegetables/New')
}


// Post/vegetablests 
module.exports.create = async (req, res) => {

    console.log('POST /vegetables')
    console.log(req.body)
    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    try {
        const  result = await Vegetable.create(req.body)
            console.log(result)
        } catch(err) {
            console.log('error is', err)
        }    
   

    // vegetablests.push(req.body)
    res.redirect('/vegetables')
}

// DELETE /vegetables/:name
module.exports.delete = (req, res) => {
    console.log("DELETE /vegetables/:name")
    console.log(req.params)
    let index = vegetables.findIndex((item) => item.name === req.params.name)
    vegetablests.splice(index, 1)
    res.redirect('/vegetables')
}

// GET /vegetables/:name/edit  changed to GET /vegetables/:id/edit 
module.exports.edit = async (req, res ) => {
    console.log('GET /vegetables/:id/edit')
    // let index = vegetables.findIndex((item) => item.name === req.params.name)
    const vegetable = await Vegetable.findById(req.params.id)
    res.render('vegetables/Edit', {vegetable: vegetable})
}

//PUT / vegetables/:name 
module.exports.update = (req, res ) => {
    console.log('PUT / vegetables/:name')
    console.log(req.body)
    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    let index = vegetables.findIndex((item) => item.name === req.params.name)
   
    vegetables[index] = req.body
    res.redirect('/vegetables')
}


// module.exports = { index, show }

