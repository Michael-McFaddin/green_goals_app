<template>
  <div class="recipes-index">

    <div class="container">
      <h3>Try a Random Vegetarian Recipe</h3>
      <button v-on:click="returnRecipes()">Get Recipe</button>
      <div v-for="recipe in recipes">
        <h2>{{ recipe.title }}</h2>
        <img v-bind:src="recipe.image" alt="">
        <h4>Prep time: {{ recipe.prep_time }} minutes</h4>
        <h4>Serves: {{ recipe.servings }}</h4><br>
        <h4>Ingredients:</h4>

        <div v-for="ingredient in recipe.ingredients">
          <ul>
            <li>
              {{ ingredient.ingredient }}
            </li>
          </ul>
        </div><br><br>
        
        <h4>Instructions:</h4>
        <div v-for="instruction in recipe.analyzed_instructions">
          <ul>
            <li>
              {{instruction.number}}. {{ instruction.step }}
            </li>
          </ul>
        </div>
        <!-- <p>{{ recipe.instructions }}</p> -->
      </div>
    </div>
    
  

  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      recipes: []
    };
  },

  created: function() {},

  methods: {
    returnRecipes: function() {
      axios
        .get("/api/recipes")
        .then(response => {
          this.recipes = response.data;
          console.log(response.data);
        });
    }
  }
};
</script>