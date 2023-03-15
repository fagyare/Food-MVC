// Require dotenv to setup environment variables in our server
require('dotenv').config()

// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8088

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

// Load our fruit,meats,vegetables data from models folder
// const fruits = require('./models/fruits')
// const vegetables = require('./models/vegetables')
// const meats = require('./models/meats')

// Load our  routes 
const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')

// npm install jsx-view-engine react react-dom
// load the create-engine 
const { createEngine } = require('jsx-view-engine') // create the endgine 

// Load the method-override middleware 
const methodOverride = require('method-override')

app.set('view engine', 'jsx')
app.engine('jsx', createEngine()) 

//a middleware that formats the form data(currently a string that looks like query params) into an object we can use
app.use(express.urlencoded({ extended: true }))

// Hack into our form and give it more HTTP methods (like DELETE & PUT)
app.use(methodOverride('_method'))

//Connect our Routes to our express app 
app.use('/fruits', fruitRoutes) 
app.use('/meats', meatRoutes)
app.use('/vegetables', vegetableRoutes)



// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})


// // Setup an "index" route for vegetables
// app.get('/vegetables', (req, res) => {
//     res.send(vegetables)
// })

// // Setup a "show" route for vegetables
// app.get('/vegetables/:index', (req, res) => {
//     res.send(vegetables[req.params.index])
// })

// // Setup an "index" route for meats
// app.get('/meats', (req, res) => {
//     res.send(meats)
// })

// // Setup a "show" route for meat
// app.get('/meats/:index', (req, res) => {
//     res.send(meats[req.params.index])
// })