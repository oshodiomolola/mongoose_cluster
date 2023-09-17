const express = require('express');
const controller = require('./controller')

const studentRouter = express.Router();

studentRouter.post("/", controller.createItem)

module.exports = studentRouter