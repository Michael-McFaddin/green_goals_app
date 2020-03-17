<template>
  <div class="categories-show">

    <h1>{{ category.name }}</h1>
    <div v-for="post in category.posts">
      <h2>{{ post.title }}</h2>
      <h4>{{ post.user_name }}</h4>
      <p>{{ post.body }}</p>
      <img :src="post.image" alt=""><br>
      <router-link v-bind:to="`/posts/${post.id}`">Details</router-link><br><br>
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
      category: {},
      posts: []
    };
  },

  created: function() {
    axios
      .get(`/api/categories/${this.$route.params.id}`)
      .then(response => {
        this.category = response.data;
        console.log(response.data);
      });
  },

  methods: {}
};
</script>