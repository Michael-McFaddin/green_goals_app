<template>
  <div class="posts-edit">

    <h1>Posts Edit</h1>
    <div class="container">
      <form v-on:submit.prevent="updatePost(post)">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
          <label>Title:</label>
          <input type="text" v-model="post.title">
        </div>
        <div>
          <label>Body:</label>
          <input type="text" v-model="post.body">
        </div>
        <div>
          <label>Category:</label>
          <input type="text" v-model="post.category_id"><br><br>
        </div>
        <div>
         {{ post.images }}<br><br>
        </div>
        <button click="submit">Update</button><br><br>
      </form>
    </div>

    <div>
      <button v-on:click="destroyPost()">Delete Post</button>
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
    },
    destroyPost: function() {
      axios
        .delete(`/api/posts/${this.post.id}`)
        .then(response => {
          this.$router.push("/posts");
        });
    }
  }
};
</script>