<template>
  <div class="posts-index">
    
    <div class="container">
      <h1>All Posts</h1>
      Search by title keyword: <input type="text" v-model="titleFilter">
    </div>
    
    <div v-for="post in filterBy(posts, titleFilter, 'title')">
      <h2>{{ post.title }}</h2>
      <h3>{{ post.category_name }}</h3>
      <h4>{{ post.user_name }}</h4>
      <img v-bind:src="post.image" alt=""><br>
      <router-link v-bind:to="`/posts/${post.id}`">Details</router-link><br><br>
    </div>

  </div>
</template>

<style>
img {
  width: 250px;
}
</style>

<script>
import axios from 'axios';
import Vue2Filters from 'vue2-filters';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      posts: [],
      titleFilter: ""
    };
  },

  created: function() {
    axios
      .get("/api/posts")
      .then(response => {
        this.posts = response.data;
        console.log(response.data);
      });
  },

  methods: {}
};
</script>