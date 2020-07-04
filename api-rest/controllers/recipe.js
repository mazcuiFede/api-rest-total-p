'use strict'

const Recipe = require('../models/recipe')

function getRecipe (req, res) {
    let id = req.params.id

    Recipe.findById(id, (err, recipe) => {
        if (err) 
            return res.status(500).send({message: "Error getting recipe."})
        if (!recipe) 
            return res.status(404).send({message: "Recipe not found"})
        
        return res.status(200).send({recipe})
    })
}

function getRecipesByText (req, res) {
    let text = req.params.text
    console.log("termino buscado", text)
    Recipe.find({
        $or: [ 
            {"name": { "$regex": text, "$options": "i" }},
             {"ingredients.name": { "$regex": text, "$options": "i" }}
        ]
    }, (err, recipes) => {
        if (err) 
            return res.status(500).send({message: "Error getting recipes."})
        if (!recipes) 
            return res.status(404).send({message: "Recipe not found"})
        
        return res.status(200).send({recipes})
    })
}

function getRecipes (req, res) {
    Recipe.find({}, (err, recipes) => {
        if (err) 
            return res.status(500).send({message: "Error getting recipes."})
        res.status(200).send({ recipes })    
    })
}

function saveRecipe (req, res) {
    let recipe = new Recipe() 
    recipe.name = req.body.name
    
    req.body.ingredients.forEach(element => {

        recipe.ingredients.push(
            {
                unit: element["unit"],
                quantity: element["quantity"],
                name: element["name"],
                type: element["type"]
            }
        )
    });

        
    recipe.steps = req.body.steps
    recipe.imageURL = req.body.imageURL
    recipe.calification = req.body.calification

    recipe.save((err, recipeStored) => {
        if (err) res.status(500).send({ message: `Error saving the recipe: ${err} ` })
        
        res.status(200).send({recipe: recipeStored})
    })
}

function deleteRecipe (req, res){
    let id = req.params.id
    Recipe.findById(id, (err, recipe) => {
        if (err) return res.status(500).send({message: "Error deleting recipe."})
        
        recipe.remove(err => {
            if (err) return res.status(500).send({message: "Error deleting recipe."})
            res.status(200).send({message: "The recipe was deleted"})
        })
    })
}

function setRecipeCalification (req, res) {
    let id = req.params.id
    let calification = req.params.calification
    
    Recipe.findById(id, (err, recipe) => {
        if (err) return res.status(500).send({message: "Error deleting recipe."})
        recipe.calification.push(calification)
        recipe.save();
        res.status(200).send({message: "The recipe was updated"})
    })
}


module.exports = {
    getRecipe,
    getRecipesByText,
    getRecipes,
    saveRecipe,
    deleteRecipe,
    setRecipeCalification
}