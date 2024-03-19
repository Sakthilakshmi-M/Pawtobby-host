const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type: String,
    required: true,
    unique: true,
  },
  mobile:{
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.statics.signUp = async(email,password)=>{
  const exists = await this.findOne({email});
  if(exists)
    throw Error("Email already in use!")
  const salt = bcrypt.genSalt(10);
  const hash = bcrypt.hash(password,salt);
  const user = this.create({email,password:hash});
  return user;
}
module.exports = mongoose.model("User_details",userSchema);


