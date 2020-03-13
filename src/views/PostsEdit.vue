<template>
  <div class="posts-edit">

    <h1>Posts Edit</h1>
    <div class="container">
      <form v-on:submit.prevent="updatePost(post)">
        
      </form>
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
      errors: []
    };
  },

  created: function() {
    axios
      .get(`/api/posts/${this.$route.params.id}`)
      .then(response => {
        this.post = response.data;
        console.log(response.data);
      });
  },

  methods: {
    updatePost: function(post) {
      var params = {
        title: post.title,
        body: post.body,
        category_id: post.category_id
      };
      axios
        .patch(`/api/posts/${this.post.id}`, params)
        .then(response => {
          this.$router.push(`/posts/${this.post.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>