const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  picture: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "user",
  },
  notedDays:{
    type: Number,
    required:true
  },
  isActive: {
    type: Boolean,
    default: true,
  },
})

module.exports = mongoose.model("User", userSchema)
