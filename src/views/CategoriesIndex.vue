<template>
  <div class="categories-index">

    <div v-for="category in categories">
      <h1>{{ category.name }}</h1>
      <img :src="category.image_url" alt=""><br>
      <router-link :to="`/categories/${category.id}`">Posts</router-link>
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
      categories: []
    };
  },

  created: function() {
    axios
      .get("/api/categories")
      .then(response => {
        this.categories = response.data;
      });
  },

  methods: {}
};
</script>