const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userInfoSchema = new Schema({
  username: String,
  email: String,
  password: String
});

userInfoSchema.pre('save', function(next){
  const user = this

  bcrypt.hash(user.password, 5,(error,hash) =>{
    user.password = hash
    next()
  })
})

const userInfo = mongoose.model('UserInfo', userInfoSchema);
module.exports = userInfo
