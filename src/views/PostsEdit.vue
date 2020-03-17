<template>
  <div class="posts-edit">

    <h1>Edit Your Post</h1>
    <div class="container">
      <form v-on:submit.prevent="updatePost()">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
          <select v-model="post.category_id">
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
          <input type="text" v-model="post.title">
        </div>
        <div>
          <label>Body:</label>
          <textarea v-model="post.body" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <input type="submit" value="Submit"><br>
      </form><br>
    </div>
    <div>
      <button v-on:click="destroyPost()">Delete Post</button><br><br>
    </div>


    <div>
      <form v-on:submit.prevent="createImage()">
        <div>
          <label>Image Url:</label>
          <input type="text" v-model="newImageUrl">
        </div>
        <button type="submit">Add Image</button><br><br>
      </form>
    </div>

    <div v-for="image in post.images">
      <img :src="image.url" alt=""><br>
      <button v-on:click="destroyImage(image)">Remove</button>
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
      errors: [],
      newImageUrl: ""
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
    updatePost: function() {
      var params = {
        title: this.post.title,
        body: this.post.body,
        category_id: this.post.category_id
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
    },
    destroyImage: function(image) {
      axios
        .delete(`/api/images/${image.id}`)
        .then(response => {
          var index = this.post.images.indexOf(image);
          this.post.images.splice(index, 1);
        });
    },
    createImage: function() {
      var params = {
        url: this.newImageUrl,
        post_id: this.post.id
      };
      axios
        .post("/api/images", params)
        .then(response => {
          this.post.images.push(response.data);
          this.newImageUrl = "";
        });
    }
  }
};
</script>