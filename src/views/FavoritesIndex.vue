<template>
  <div class="favorites-index">

    <section v-if="favorites.length == 0" class="page-tittle page-tittle-sm bg-white">
      <div class="container">               
        <div class="page-tittle-head display-block text-center">
          <h1 class="font-size-45 font-weight-light ls-1-5">You need some Favorites!</h1>
          <h3>Check out some of the other posts and add to your favoites</h3>
          <div class="text-center">
            <router-link class="btn btn-md btn-theme" to="/posts">All Posts</router-link>
          </div>
        </div>
      </div>
    </section>

    <section v-else class="page-tittle page-tittle-sm bg-white">
      <div class="container">               
        <div class="page-tittle-head display-block text-center">
          <h1 class="font-size-45 font-weight-light ls-1-5">Here are your Favorites</h1>
        </div>
      </div>
    </section>

    <!-- Blog list full width -->
    <section class="section-4">
     <div class="container">
      <div class="blog blog-list" v-for="favorite in favorites">
        <div class="blog-item">
          <div class="row">
            <div class="col-md-4">
              <div class="blog-media">
                <router-link v-bind:to="`/posts/${favorite.post.id}`"><img class="img-responsive" v-bind:src="favorite.post.image" alt=""></router-link>
              </div>
            </div>
            <div class="col-md-8">
              <div class="blog-content">
                <h3 class="blog-tittle"><router-link v-bind:to="`/posts/${favorite.post.id}`">{{ favorite.post.title }}</router-link></h3>
                <div class="blog-meta">
                  <span class="author">By <a class="theme-color">{{ favorite.post.user_name }}</a></span>
                  <span class="date">Created: {{ relativeDate(favorite.post.created_at) }}</span>
                  <h4 class="blog-meta author">Category: {{ favorite.post.category_name }}</h4>
                </div>
                <p v-if="favorite.post.body.length > 300" class="blog-article">{{ favorite.post.body.slice(0, 300) }}...</p>
                <p v-else class="blog-article">{{ favorite.post.body }}</p>
                <div class="blog-action">
                  <div class="mrg-btm-15">
                    <a class="btn btn-md btn-theme-inverse" v-on:click="destroyFavorite(favorite)">Unfavorite</a>
                  </div>
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
    },
    relativeDate: function(date) {
      return moment(date).startOf('day').fromNow(date);
    }
  }
};
</script>