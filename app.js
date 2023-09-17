const express = require('express');
require("dotenv").config();
const studentRoute = require('./route/student.route');
const {connectToDatabase} =require('./mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT;

const app = express();

connectToDatabase();

app.use(bodyParser.json());
app.use("/students", studentRoute)


app.listen(PORT, () => {
  console.log("app listening at 4000")
})