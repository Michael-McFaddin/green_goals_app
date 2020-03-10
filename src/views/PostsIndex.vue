<template>
  <div class="posts-index">

    <h1>All Posts</h1>
    <div v-for="post in posts">
      <h2>{{ post.category_name }}</h2>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <img v-bind:src="post.image" alt=""><br><br>
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

export default {
  data: function() {
    return {
      posts: []
    };
  },

  created: function() {
    axios
      .get("/api/posts")
      .then(response => {
        this.posts = response.data
      })
  },

  methods: {}
};
</script>