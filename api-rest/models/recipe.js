'use strict'

const mongoose = require('mongoose') //To connect database
const Schema = mongoose.Schema

const RecipeSchema = Schema({
    name: String,
    calification: { type: Array , default: null },
    ingredients: {type: Array, default: []},
    steps: String,
    imageURL: String
})

module.exports = mongoose.model('recipe', RecipeSchema)