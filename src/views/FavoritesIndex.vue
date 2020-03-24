<template>
  <div class="favorites-index">

    <!-- Blog list full width -->
    <section class="section-1">
     <div class="container">
      <div class="blog blog-list" v-for="favorite in favorites">
        <div class="blog-item">
          <div class="row">
            <div class="col-md-4">
              <div class="blog-media">
                <a href="single-post-full-width.html"><img class="img-responsive" v-bind:src="favorite.post.image" alt=""></a>
              </div>
            </div>
            <div class="col-md-8">
              <div class="blog-content">
                <h3 class="blog-tittle"><a href="single-post-full-width.html">{{ favorite.post.title }}</a></h3>
                <div class="blog-meta">
                  <span class="author">By <a class="theme-color" href="blog-classic-left-sidebar.html">{{ favorite.post.user_name }}</a></span>
                  <!-- <span class="date">Created: {{ relativeDate(favorite.post.created_at) }}</span> -->
                </div>
                <p class="blog-article">{{ favorite.post.body }}</p>
                <div class="blog-action">
                  <div class="mrg-btm-15">
                    <a class="btn btn-md btn-theme-inverse" v-on:click="destroyFavorite(favorite)">Unfavorite</a>
                  </div>
                  <!-- <span class="comments"><a href="javascript:void(0);"><i class="ei ei-speech-bubble"></i> 20</a></span> -->
                  <!-- <span class="likes"><a href="javascript:void(0);"><i class="ei ei-heart"></i> 168</a></span> -->
                </div>
                <div class="continue-reading">
                  <router-link class="btn btn-dark-inverse" v-bind:to="`/posts/${favorite.post.id}`"><i class="ei ei-right-arrow"></i></router-link>
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="text-center mrg-top-50">
        <button class="btn btn-dark btn-md">Show More</button>
      </div> -->
    </div>
    </section>
    <!-- Blog End -->
    
    <!-- <h1>Your Favorites</h1>
    <div v-for="favorite in favorites">
      <h2>{{ favorite.post.title }}</h2>
      <h3>{{ favorite.post.user_name }}</h3>
      <p>{{ favorite.post.body }}</p>
      <img :src="favorite.post.image" alt=""><br>
      <router-link v-bind:to="`/posts/${favorite.post.id}`">Details</router-link><br><br>
      <button v-on:click="destroyFavorite(favorite)">Unfavorite</button>
    </div> -->


  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data: function() {
    return {
      favorites: []
    };
  },

  created: function() {
    axios
      .get("/api/favorites")
      .then(response => {
        this.favorites = response.data;
        console.log(response.data);
      });
  },

  methods: {
    destroyFavorite: function(favorite) {
      axios
        .delete(`/api/favorites/${favorite.id}`)
        .then(response => {
          console.log("Favorite Deleted", response.data);
          var index = this.favorites.indexOf(favorite);
          this.favorites.splice(index, 1);
        });
    }
  },
  relativeDate: function(date) {
    return moment(date).startOf('day').fromNow(date);
  }
};
</script>