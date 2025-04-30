const express = require('express');
const Recipe = require('../models/recipeModel');
const router = express.Router();

// GET all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new recipe
router.post('/', async (req, res) => {
  const { title, description, ingredients, instructions, imageUrl, rating } = req.body;

  const recipe = new Recipe({
    title,
    description,
    ingredients,
    instructions,
    imageUrl,
    rating
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a recipe by ID
router.put('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      recipe.title = req.body.title || recipe.title;
      recipe.description = req.body.description || recipe.description;
      recipe.ingredients = req.body.ingredients || recipe.ingredients;
      recipe.instructions = req.body.instructions || recipe.instructions;
      recipe.imageUrl = req.body.imageUrl || recipe.imageUrl;
      recipe.rating = req.body.rating || recipe.rating;

      const updatedRecipe = await recipe.save();
      res.json(updatedRecipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a recipe by ID
router.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      await recipe.remove();
      res.json({ message: 'Recipe deleted' });
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
