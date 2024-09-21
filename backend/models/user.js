const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: { type: String ,required:true,unique:true},
  password: {
    type:String,
    required:true,

  }
});
const userModel=mongoose.model("UserModel",userSchema)
module.exports=userModel
