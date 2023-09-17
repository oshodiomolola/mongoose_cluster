const mongoose = require('mongoose');
require("dotenv").config

function connectToDatabase() {
  mongoose.connect(process.env.DB_URL)
  mongoose.connection.on("connected", ()=> {
    console.log("DataBase Connected Successfully")
  })
  mongoose.connection.on("error", ()=> {
    console.log("Database connection failed")
  })
}

module.exports = {connectToDatabase}