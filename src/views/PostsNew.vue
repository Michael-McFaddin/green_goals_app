<template>
  <div class="posts-new">
    
    <div>
      <form v-on:submit.prevent="createPost()">
        <h1>Make a new Post</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
         <div>
          <label>Category:</label>
          <input type="text" v-model="newCategoryId">
        </div>
        <div>
          <label>Title:</label>
          <input type="text" v-model="newTitle">
        </div>
         <div>
          <label>Body:</label>
          <input type="text" v-model="newBody">
        </div>
         <div>
          <label>Image Url:</label>
          <input type="text" v-model="newImageUrl">
        </div>
        <input type="submit" value="Submit">
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
      newCategoryId: "",
      newTitle: "",
      newBody: "",
      newImageUrl: "",
      errors: []
    };
  },

  created: function() {},

  methods: {
    createPost: function() {
      var params = {
        category_id: this.newCategoryId,
        title: this.newTitle,
        body: this.newBody
      };
      axios
        .post("/api/posts", params)
        .then(response => {
          this.$router.push("/posts");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
    createImage: function() {
      var params = {
        url: this.newImageUrl
      };
      axios
        .post("/api/images", params);
    }
  }
};
</script>