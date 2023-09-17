const studentModel = require('../models/students')

async function createItem(req, res) {
const create = req.body
const newStudent =  await studentModel.create(create)
}

module.exports = {createItem}