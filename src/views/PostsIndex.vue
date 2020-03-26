<template>
  <div class="posts-index">

    <div class="widget widget-search container text-center">
      <div class="mrg-btm-15 mrg-top-15">
        <label class="input-wrapper">
          <input class="form-control" type="text" placeholder="Title Search" v-model="titleFilter">
          <a href="" class="btn inline-submit mrg-top-5"><i class="ei ei-search"></i></a>
        </label>
        <span><a class="btn btn-md btn-theme-inverse" v-bind:class="{'active-btn': sortById == 1}" v-on:click="sortById = 1 ">Oldest to Newest</a>
        <a class="btn btn-md btn-theme-inverse" v-bind:class="{'active-btn': sortById == -1}" v-on:click="sortById = -1 ">Newest to Oldest</a></span>
      </div>
    </div>

    <div v-if="$parent.isLoggedIn()" class="text-center">
      <h2 class="mrg-btm-20 mrg-top-5"><router-link to="/recipes">Let Green Goals help you find a green recipe!</router-link></h2>
    </div>

    <!-- Blog list full width -->
    <!-- <section class="section-1"> -->
     <div class="container">
      <div class="blog blog-list" v-for="post in orderBy(filterBy(posts, titleFilter, 'title'), 'id', sortById).slice(0, `${showNum}`)">
        <div class="blog-item">
          <div class="row">
            <div class="col-md-4">
              <div class="blog-media">
                <router-link v-bind:to="`/posts/${post.id}`"><img class="img-responsive" v-bind:src="post.image" alt=""></router-link>
              </div>
            </div>
            <div class="col-md-8">
              <div class="blog-content">
                <h3 class="blog-tittle"><router-link v-bind:to="`/posts/${post.id}`">{{ post.title }}</router-link></h3>
                <div class="blog-meta">
                  <span class="author">By <a class="theme-color">{{ post.user_name }}</a></span>
                  <span class="date">Created: {{ relativeDate(post.created_at) }}</span>
                  <h4 class="blog-meta author">Category: {{ post.category_name }}</h4>
                </div>
                <p v-if="post.body.length > 300" class="blog-article">{{ post.body.slice(0, 300) }}...</p>
                <p v-else class="blog-article">{{ post.body }}</p>
       
                <div class="blog-action">
                  <span></span>
                </div>
                <div class="continue-reading">
                  <router-link class="btn btn-dark-inverse" v-bind:to="`/posts/${post.id}`"><i class="ei ei-right-arrow"></i></router-link>
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- {{ showNum }} -->
      <div class="text-center mrg-top-50">
        <button v-on:click="showMore()" class="btn btn-dark btn-md">Show More</button>
      </div>
    </div>

  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';
import moment from 'moment';
import Vue2Filters from 'vue2-filters';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      posts: [],
      titleFilter: "",
      sortById: -1,
      showNum: 6
    };
  },

  created: function() {
    axios
      .get("/api/posts")
      .then(response => {
        this.posts = response.data;
        console.log(response.data);
      });
  },

  methods: {
    relativeDate: function(date) {
      return moment(date).startOf('day').fromNow(date);
    },
    showMore: function() {
      this.showNum = this.showNum + 6;
    }
  }
};
</script>