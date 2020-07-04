'use strict'

const express = require('express')
const recipeController = require('../controllers/recipe')
const api = express.Router()


api.get('/recipes', recipeController.getRecipes)
api.get('/recipes/:text', recipeController.getRecipesByText)
api.get('/recipe/:id', recipeController.getRecipe)
api.post('/recipe', recipeController.saveRecipe)
api.delete('/recipe/:id', recipeController.deleteRecipe)

api.get('/recipe/:id/setcalification/:calification', recipeController.setRecipeCalification)

module.exports = api