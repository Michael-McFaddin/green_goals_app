<template>
  <div class="posts-new">
    
    <div>
      <form v-on:submit.prevent="createPost()">
        <h1>Make a new Post</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
          <select v-model="newCategoryId">
            <option disable value="">Select A Category</option>
            <option value="1">Food</option>
            <option value="2">Waste</option>
            <option value="3">Energy</option>
            <option value="4">Transportation</option>
            <option value="5">Water</option>
            <option value="6">Social</option>
          </select>
        </div>
        <div>
          <label>Title:</label>
          <input type="text" v-model="newTitle">
        </div>
         <div>
          <label>Body:</label>
          <textarea v-model="newBody" name="" id="" cols="30" rows="10"></textarea>
        </div>
         <!-- <div>
          <label>Image Url 1:</label>
          <input type="text" v-model="newImageUrl1">
        </div>
         <div>
          <label>Image Url 2:</label>
          <input type="text" v-model="newImageUrl2">
        </div> -->
         <!-- <div>
          <label>Image Url 3:</label>
          <input type="text" v-model="newImageUrl3">
        </div> -->
        <div>
          <label>Image 1:</label>
          <input type="file" v-on:change="setFile($event, 1)" ref="fileInput">
        </div>
        <div>
          <label>Image 2:</label>
          <input type="file" v-on:change="setFile($event, 2)" ref="fileInput">
        </div>
        <div>
          <label>Image 3:</label>
          <input type="file" v-on:change="setFile($event, 3)" ref="fileInput">
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
      // newImageUrl1: "",
      // newImageUrl2: "",
      // newImageUrl3: "",
      image1: "",
      image2: "",
      image3: "",
      errors: []
    };
  },

  created: function() {},

  methods: {
    setFile: function(event, num) {
      if (event.target.files.length > 0) {
        if (num === 1) {
          this.image1 = event.target.files[0]; 
        } else if (num === 2) {
          this.image2 = event.target.files[0];
        } else {
          this.image3 = event.target.files[0];
        }
      }
    },
    createPost: function() {
      // var params = {
      //   category_id: this.newCategoryId,
      //   title: this.newTitle,
      //   body: this.newBody,
      //   images: images
      // };
      var formData = new FormData();

      formData.append("category_id", this.newCategoryId);
      formData.append("title", this.newTitle);
      formData.append("body", this.newBody);
      if (this.image1) {
        formData.append("image1", this.image1);
      }
      if (this.image2) {
        formData.append("image2", this.image2);
      }
      if (this.image3) {
        formData.append("image3", this.image3);
      }
      axios
        .post("/api/posts", formData)
        .then(response => {
          this.$router.push(`/posts/${response.data.id}`);
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>