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
        <router-link v-if="post.user_id == $parent.getUserId()" v-bind:to="`/posts/${post.id}/edit`">Edit Post</router-link><br><br>
        <button v-if="!post.favorite && $parent.isLoggedIn()" v-on:click="createFavorite()">Favorite</button>
        <!-- <button v-if="post.favorite" v-on:click="destroyFavorite()">UnFavorite</button> -->
    </div>

 <!--    <div>
      <p>{{ post.favorite_id }}</p>
    </div> -->

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

  methods: {
    createFavorite: function() {
      var params = {
        post_id: this.post.id
      };
      axios
        .post("/api/favorites", params)
        .then(response => {
          console.log("You Favorited this post.");
          this.post.favorite = true;
        });
    }
  },
  //put destroyFavorites here
// this.post.favorite = false
};
</script>