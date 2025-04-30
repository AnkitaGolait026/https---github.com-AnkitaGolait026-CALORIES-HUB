const mongoose = require('mongoose');

// Define the schema for the Recipe model
const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
});

// Create a model based on the recipeSchema
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export the Recipe model
module.exports = Recipe;
