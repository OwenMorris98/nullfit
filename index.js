const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
app.use(express.static('public'))
app.set('view engine', 'ejs')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const landingPageController = require('./controllers/landingPage')
const loginPageController = require('./controllers/loginPage')
const registerPageController = require('./controllers/registerPage')
const dashPageController = require('./controllers/dashboardPage')
const userProfController = require('./controllers/userProfile')

const storeUserController = require('./controllers/storeUser')
app.post('/users/register', storeUserController)

app.listen(3000, ()=>{
	console.log('listening on port 3000')
})

app.get('/', landingPageController)
app.get('/login', loginPageController)
app.get('/register', registerPageController)
app.get('/dashboard', dashPageController)
app.get('/userProfile', userProfController)



app.get('*',(req,res)=>{
	res.render('404')
})
