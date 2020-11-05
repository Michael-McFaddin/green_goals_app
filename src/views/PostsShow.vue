<template>
  <div class="posts-show">

    <!-- Portfolio Content Start -->
    <section class="section-1">
      <div class="container continue-reading">
        <router-link class="btn btn-dark-inverse" v-bind:to="`/posts`"><i class="ei ei-left-arrow"></i> Back</router-link>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h2 class="mrg-btm-30">{{ post.title }}</h2>
            <p>{{ post.body }}</p>
            <p class="mrg-top-30"><b class="text-dark">Created By:</b> {{ post.user_name }}</p>
            <div class="mrg-btm-15">
              <router-link class="btn btn-sm btn-dark-inverse" v-if="post.user_id == $parent.getUserId()" v-bind:to="`/posts/${post.id}/edit`">Edit Post</router-link>
            </div>
            <div class="mrg-btm-15">
              <a class="btn btn-sm btn-theme-inverse" v-if="!post.favorite && $parent.isLoggedIn()" v-on:click="createFavorite()">Favorite</a>
            </div>
          </div>
          <div class="col-md-6 col-md-offset-1" v-for="image in post.images">
            <img class="img-responsive mrg-top-30" v-bind:src="image.url" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- Portfolio Content End -->

    <!-- <h1>Post Show</h1>
    <div>
      <h3>{{ post.title }}</h3>
      <h4>{{ post.user_name }}</h4>
      <p>{{ post.body }}</p>
        <div v-for="image in post.images">
          <img v-bind:src="image.url" alt="">
        </div>
        <router-link v-if="post.user_id == $parent.getUserId()" v-bind:to="`/posts/${post.id}/edit`">Edit Post</router-link><br><br>
        <button v-if="!post.favorite && $parent.isLoggedIn()" v-on:click="createFavorite()">Favorite</button>
        <button v-if="post.favorite" v-on:click="destroyFavorite()">UnFavorite</button>
    </div> -->

 <!--    <div>
      <p>{{ post.favorite_id }}</p>
    </div> -->

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      post: {},
    };
  },

  created: function () {
    axios.get("api/posts/" + this.$route.params.id).then((response) => {
      this.post = response.data;
      console.log(response.data);
    });
  },

  methods: {
    createFavorite: function () {
      var params = {
        post_id: this.post.id,
      };
      axios.post("/api/favorites", params).then((response) => {
        console.log("You Favorited this post.");
        this.post.favorite = true;
      });
    },
  },
  //put destroyFavorites here
  // this.post.favorite = false
};
</script>