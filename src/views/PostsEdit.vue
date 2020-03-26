<template>
  <div class="posts-edit">


    <div class="container">
      <div class="col-md-6">
        <h2 class="mrg-btm-30">Edit Your Post</h2>
        <form v-on:submit.prevent="updatePost()">
          <div>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              Category<select class="form-control" v-model="post.category_id">
                <option disable value="">Select A Category</option>
                <option value="1">Food</option>
                <option value="2">Waste</option>
                <option value="3">Energy</option>
                <option value="4">Transportation</option>
                <option value="5">Water</option>
                <option value="6">Social</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              Title<input type="text" class="form-control" placeholder="Title" v-model="post.title">
            </div>
            <div class="form-group col-md-12">
              Body<textarea class="form-control" rows="3" placeholder="Body" v-model="post.body"></textarea>
            </div>
            <div class="form-group col-md-12">
              <input class="btn btn-md btn-dark" type="submit" value="Update Post">
            </div>
            <div class="form-group col-md-12">
              <input class="btn btn-md btn-danger" v-on:click="destroyPost()" type="submit" value="Delete Post">
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="container">
      <div class="col-md-6">
        <form v-on:submit.prevent="createImage()">
          <div>
            <h3 class="mrg-btm-30">Add An Image</h3>
            <input type="file" class="form-control" v-on:change="setFile($event)" ref="fileInput">
          </div>
          <input class="btn btn-md btn-dark" type="submit" value="Add Image"><br><br>
        </form>
      </div>
    </div>

    <div class="container">
      <div class="col-md-6" v-for="image in post.images">
        <img :src="image.url" alt=""><br>
        <button class="btn btn-sn btn-danger" v-on:click="destroyImage(image)">Remove</button>
      </div>
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
      image: "",
      // newImageUrl: ""
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
      if (confirm("Do you really want to delete?")) {
        axios
          .delete(`/api/posts/${this.post.id}`)
          .then(response => {
            this.$router.push("/posts");
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    },
    destroyImage: function(image) {
      axios
        .delete(`/api/images/${image.id}`)
        .then(response => {
          var index = this.post.images.indexOf(image);
          this.post.images.splice(index, 1);
        });
    },
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    createImage: function() {
      // var params = {
      //   url: this.newImageUrl,
      //   post_id: this.post.id
      // };

      var formData = new FormData();
      formData.append("image", this.image);
      formData.append("post_id", this.post.id);

      axios
        .post("/api/images", formData)
        .then(response => {
          this.post.images.push(response.data);
          // this.newImageUrl = "";
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>