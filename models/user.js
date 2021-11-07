const mongoose  = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
 
email:{
  type:String,
  required:true,
  unique:true,
  trim:true
},
cart:[
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product'
  }
]
});

userSchema.plugin(passportLocalMongoose);//it will ad username hash and salt itself
//You're free to define your User how you like. Passport-Local Mongoose will add a username, hash and salt field to store the username the hashed password and the salt value.
const  User =mongoose.model('User',userSchema);
module.exports = User;