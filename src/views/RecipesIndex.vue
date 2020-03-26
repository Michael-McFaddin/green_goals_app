<template>
  <div class="recipes-index">


    <div class="container text-center mrg-top-30">
      <div>
        <h2 class="mrg-btm-40">Looking for a Green Meal? Select a Diet and Meal Type and enjoy!</h2>
      </div>
      <div class="form-group col-md-6">
        <select class="form-control" v-model="dietInput">
          <option disable value="">Select A Diet</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <select class="form-control" v-model="dishInput">
          <option disable value="">Select A Meal Type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="salad">Salad</option>
          <option value="appetizer">Appetizer</option>
        </select>
      </div>
      <div class="text-center">
        <button class="btn btn-md btn-theme" v-on:click="returnRecipes()">Get Recipe</button>
      </div>
    </div>
    
    <section class="section-4">
      <div class="container" v-for="recipe in recipes">
        <div class="row">
          <div class="col-md-5">
            <h2 class="mrg-btm-30">{{ recipe.title }}</h2>
            <p class="mrg-top-15"><b class="text-dark">Prep Time:</b> {{ recipe.prep_time }} minutes</p>
            <p class="mrg-top-10"><b class="text-dark">Servings:</b> {{ recipe.servings }} minutes</p>
            <p><b class="text-dark">Diets:</b></p>
            <li v-for="diet in recipe.diets">{{ diet }}</li>
            <h4>Ingredients:</h4>
            <div v-for="ingredient in recipe.ingredients">
              
              <li>
                {{ ingredient.ingredient }}
              </li>
              
            </div><br>
            <h4>Instructions:</h4>
            <div v-for="instruction in recipe.analyzed_instructions">
              <ul>
                <li>
                  {{instruction.number}}. {{ instruction.step }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-md-offset-1">
            <img class="img-responsive mrg-top-30" v-bind:src="recipe.image" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- <div class="blog blog-list" v-for="recipe in recipes">
      <div class="blog-item">
        <div class="row">
          <div class="col-md-4">
            <div class="blog-media">
              <img class="img-responsive" v-bind:src="recipe.image" alt="">
            </div>
          </div>
          <div class="col-md-8">
            <div class="blog-content">
              <h3 class="blog-tittle">{{ recipe.title }}</h3>
              <div class="blog-meta">
                <span class="author">By <a class="theme-color"></a></span>
                <h5 class="author">Prep Time: {{ recipe.prep_time }}</h5>
                <span class="author">Serves: {{ recipe.servings }}</span>
              </div>
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
              <div class="blog-action">
                <span></span>
              </div>
              <div class="continue-reading">
                <router-link class="btn btn-dark-inverse" v-bind:to="`/posts/${post.id}`"><i class="ei ei-right-arrow"></i></router-link>
              </div>      
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="container">
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
        <p>{{ recipe.instructions }}</p>
      </div>
    </div> -->
    
  

  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      recipes: [],
      dietInput: "",
      dishInput: ""
    };
  },

  created: function() {},

  methods: {
    returnRecipes: function() {
      axios
        .get(`/api/recipes?diet=${this.dietInput}&dish=${this.dishInput}`)
        .then(response => {
          this.recipes = response.data;
          console.log(response.data);
        });
    }
  }
};
</script>