const meats = require('../models/meats')

// import Meat model 
const Meat = require('../models/MeatsModel')

// index function: The callback func originally from "app.get('/', () =>{})"
module.exports.index = async (req, res) => {
    // the method .find() will connect the data to the database 
   const meatData = await Meat.find()
   console.log(meatData)
    res.render('meats/Index', {meats: meatData})
}

// Show function // index function: The callback func originally from "app.get('/:index', () =>{})"
// They now have names: "index" and "show"
module.exports.show = async (req, res ) => {
    console.log(req.params.index)
    const meat = await Meat.findById(req.params.index)
    console.log(meat)
    res.render('meats/Show', {meat: meat})
}

// GET/meats/new 
module.exports.new = (req, res) => {
    res.render('meats/New')
}


// Post/meats 
module.exports.create = async (req, res) => {
    console.log('POST /meats')
    console.log(req.body)
    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    try {
        const  result = await Meat.create(req.body)
            console.log(result)
        } catch(err) {
            console.log('error is', err)
        }    
    // meats.push(req.body)
    res.redirect('/meats')
}

// DELETE /meats/:name
module.exports.delete = (req, res) => {
    console.log("DELETE /meats/:name")
    console.log(req.params)
    let index = meats.findIndex((item) => item.name === req.params.name)
    meats.splice(index, 1)
    res.redirect('/meats')
}

// GET /meats/:name/edit changed to GET /meats/:id/edit 
module.exports.edit = async (req, res ) => {
    console.log('GET /meats/:name/edit')
    // let index = meats.findIndex((item) => item.name === req.params.name)
    const meat = await Meat.findById(req.params.id)
    res.render('meats/Edit', {meat: meat})
}

//PUT / meats/:name 
module.exports.update = (req, res ) => {
    console.log('PUT / meats/:name')
    console.log(req.body)
    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    let index = meats.findIndex((item) => item.name === req.params.name)
   
    meats[index] = req.body
    res.redirect('/meats')
}



// module.exports = { index, show }

