<template>
  <div class="favorites-index">
    
    <h1>{{ message }}</h1>
    <div v-for="favorite in favorites">
      <h4>{{favorite}}</h4>
      <h2>{{favorite.post.title}}</h2>
      <img :src="favorite.post.image" alt="">
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
      message: "Your Favorites",
      favorites: []
    };
  },

  created: function() {
    axios
      .get("/api/favorites")
      .then(response => {
        this.favorites = response.data;
      });
  },

  methods: {}
};
</script>