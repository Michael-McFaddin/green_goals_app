<template>
  <div class="posts-show">

    <h1>Post Show</h1>

    <div>
      <h3>{{ post.title }}</h3>
      <h4>{{ post.user_name }}</h4>
      <p>{{ post.body }}</p>
        <div v-for="image in post.images">
          <img v-bind:src="image.url" alt="">
        </div>
        <router-link v-bind:to="`/posts/${post.id}/edit`">Edit Post</router-link>
      
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
      post: {},
      images: []
    };
  },

  created: function() {
    axios
      .get("api/posts/" + this.$route.params.id)
      .then(response => {
        this.post = response.data;
        console.log(response.data);
      });
  },

  methods: {}
};
</script>