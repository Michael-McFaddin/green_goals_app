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
          <textarea v-model="newBody" name="" id="" cols="30" rows="10"></textarea>
        </div>
         <div>
          <label>Image Url 1:</label>
          <input type="text" v-model="newImageUrl1">
        </div>
         <div>
          <label>Image Url 2:</label>
          <input type="text" v-model="newImageUrl2">
        </div>
         <div>
          <label>Image Url 3:</label>
          <input type="text" v-model="newImageUrl3">
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
      newImageUrl1: "",
      newImageUrl2: "",
      newImageUrl3: "",
      errors: []
    };
  },

  created: function() {},

  methods: {
    createPost: function() {
      var images = [];
      if (this.newImageUrl1) {
        images.push(this.newImageUrl1);
      }
      if (this.newImageUrl2) {
        images.push(this.newImageUrl2);
      }
      if (this.newImageUrl3) {
        images.push(this.newImageUrl3);
      }
      var params = {
        category_id: this.newCategoryId,
        title: this.newTitle,
        body: this.newBody,
        images: images
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
    }
  }
};
</script>