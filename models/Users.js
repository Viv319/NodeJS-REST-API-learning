const { default: mongoose } = require('mongoose');


//  Name of the model -> first letter in capital
// User -> users in mongoDB
const Users =  mongoose.model('Users',{
    firstName: String,
    lastNmae:String,
    email: String,
    avatar: String
 })
 
 module.exports = Users