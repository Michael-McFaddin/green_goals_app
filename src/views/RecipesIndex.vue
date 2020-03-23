<template>
  <div class="recipes-index">


    <h1>Recipe Search</h1>
    <button v-on:click="returnRecipes()">Get Recipes</button>
    <div v-for="recipe in recipes">
      <h2>{{ recipe.title }}</h2>
      <img v-bind:src="recipe.image" alt="">
      <h4>Prep time: {{ recipe.prep_time }} minutes</h4>
      <h4>Serves: {{ recipe.servings }}</h4>
      <div v-for="ingredient in recipe.ingredients">{{ ingredient.ingredient }}</div>
      <!-- <div v-for="instruction in recipe.analyzed_instructions">{{ instruction.step }}</div> -->
      <p>{{ recipe.instructions }}</p>
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