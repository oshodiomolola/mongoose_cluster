const mongoose = require('mongoose');
const shortid = require('shortid');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema;

const studentSchema = new schema({
  _id: {
    type: String,
    default: shortid.generate,
    autoIncrement: true,
    required: true,
    unique: true
  },
  email: {type: String, required:true, unique: true},
  password: {type: String, required:true, unique: true},
  firstName: {type: String, required:true},
  lastName: {type: String, required:true},
  userName: {type: String, required:true, unique: true},
  phoneNumber: {type: String, required: true, unique: true}
})

studentSchema.pre("save", async function(next){
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next ()
})

studentSchema.methods.checkValidPassword = async function(){
  const student = this
  const compare = await bcrypt.compare(password, student.password)
  return compare
}

module.exports = mongoose.model("students", studentSchema)