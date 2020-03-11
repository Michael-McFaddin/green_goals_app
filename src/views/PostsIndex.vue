<template>
  <div class="posts-index">

    <h1>All Posts</h1>
    <div v-for="post in posts">
      <h2>{{ post.title }}</h2>
      <h3>{{ post.category_name }}</h3>
      <h4>{{ post.user_name }}</h4>
      <p>{{ post.body }}</p>
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
        this.posts = response.data;
        console.log(response.data);
      });
  },

  methods: {}
};
</script>