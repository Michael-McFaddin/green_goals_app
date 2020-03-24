<template>
  <div class="categories-show">

    <div class="widget widget-search">
      <h3 class="widget-tittle">Search</h3>
      <label class="input-wrapper">
        <input class="form-control" type="text" placeholder="Title Search" v-model="titleFilter">
        <a href="" class="btn inline-submit mrg-top-5"><i class="ei ei-search"></i></a>
      </label>
      <div class="mrg-btm-15">
        <a class="btn btn-md btn-theme-inverse" v-on:click="sortById = 1 ">Oldest to Newest</a>
      </div>
      <div class="mrg-btm-15">
        <a class="btn btn-md btn-theme-inverse" v-on:click="sortById = -1 ">Newest to Oldest</a>
      </div>
    </div>

    <!-- Blog list full width -->
    <section class="section-1">
     <div class="container">
      <div class="blog blog-list" v-for="post in orderBy(filterBy(category.posts, titleFilter, 'title'), 'id', sortById)">
        <div class="blog-item">
          <div class="row">
            <div class="col-md-4">
              <div class="blog-media">
                <a href="single-post-full-width.html"><img class="img-responsive" v-bind:src="post.image" alt=""></a>
              </div>
            </div>
            <div class="col-md-8">
              <div class="blog-content">
                <h3 class="blog-tittle"><a href="single-post-full-width.html">{{ post.title }}</a></h3>
                <div class="blog-meta">
                  <span class="author">By <a class="theme-color" href="blog-classic-left-sidebar.html">{{ post.user_name }}</a></span>
                  <span class="date">Created: {{ relativeDate(post.created_at) }}</span>
                </div>
                <p class="blog-article">{{ post.body }}</p>
                <div class="blog-action">
                  <!-- <span class="comments"><a href="javascript:void(0);"><i class="ei ei-speech-bubble"></i> 20</a></span> -->
                  <!-- <span class="likes"><a href="javascript:void(0);"><i class="ei ei-heart"></i> 168</a></span> -->
                </div>
                <div class="continue-reading">
                  <router-link class="btn btn-dark-inverse" v-bind:to="`/posts/${post.id}`"><i class="ei ei-right-arrow"></i></router-link>
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

    <div class="container">
      <h1>{{ category.name }}</h1>
      Search by Title: <input type="text" v-model="titleFilter"><br>
      <button v-bind:class="{'button': sortById == -1}" v-on:click="sortById = -1 ">Sort by new to old</button>
      <button v-bind:class="{'button': sortById == 1}" v-on:click="sortById = 1 ">Sort by old to new</button> 
    </div>

    <!-- <div v-for="post in orderBy(filterBy(category.posts, titleFilter, 'title'), 'id', sortById)">
      <h2>{{ post.title }}</h2>
      <h4>{{ post.user_name }}</h4>
      <p>{{ post.body }}</p>
      <img :src="post.image" alt=""><br>
      <router-link v-bind:to="`/posts/${post.id}`">Details</router-link><br><br>
    </div> -->


  </div>
</template>

<style>
img {
  width: 250px;
}
.button {
  background-color: blue;
  color: white;
}
</style>

<script>
import axios from 'axios';
import moment from 'moment';
import Vue2Filters from 'vue2-filters';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      category: {},
      titleFilter: "",
      sortById: -1
    };
  },

  created: function() {
    axios
      .get(`/api/categories/${this.$route.params.id}`)
      .then(response => {
        this.category = response.data;
        console.log(response.data);
      });
  },

  methods: {
    relativeDate: function(date) {
      return moment(date).startOf('day').fromNow(date);
    }
  }
};
</script>