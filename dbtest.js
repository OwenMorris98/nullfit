const mongoose = require('mongoose')
const userInfo = require('./models/user')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})
userInfo.create({
  username: "Jstears",
  email: "jstears1@gmail.com",
  password: "12345"
}, (error,userinfo) =>{
    console.log(error,userinfo)
})
