const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: { type: String ,required:true,unique:true},
  password: {
    type:String,
    required:true,

  }
});
module.exports=mongoose.model("UserModel",userSchema)
