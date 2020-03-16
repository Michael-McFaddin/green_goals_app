<template>
  <div class="favorites-index">
    
    <h1>Your Favorites</h1>
    <div v-for="favorite in favorites">
      <!-- <h4>{{favorite}}</h4> -->
      <h2>{{ favorite.post.title }}</h2>
      <h3>{{ favorite.post.user_name }}</h3>
      <p>{{ favorite.post.body }}</p>
      <img :src="favorite.post.image" alt=""><br>
      <router-link v-bind:to="`/posts/${favorite.post.id}`">Details</router-link><br><br>
      <button v-on:click="destroyFavorite(favorite)">Unfavorite</button>
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
      favorites: []
    };
  },

  created: function() {
    axios
      .get("/api/favorites")
      .then(response => {
        this.favorites = response.data;
        console.log(response.data);
      });
  },

  methods: {
    destroyFavorite: function(favorite) {
      axios
        .delete(`/api/favorites/${favorite.id}`)
        .then(response => {
          console.log("Favorite Deleted", response.data);
          var index = this.favorites.indexOf(favorite);
          this.favorites.splice(index, 1);
        });
    }
  }
};
</script>