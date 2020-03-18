<template>
  <div class="posts-index">
    
    <div class="container">
      <h1>All Posts</h1>
      Search by Title: <input type="text" v-model="titleFilter"><br>
      <button v-bind:class="{'button': sortById == -1}" v-on:click="sortById = -1 ">Sort by new to old</button>
      <button v-bind:class="{'button': sortById == 1}" v-on:click="sortById = 1 ">Sort by old to new</button>
    </div>
    
    <div v-for="post in orderBy(filterBy(posts, titleFilter, 'title'), 'id', sortById)">
      <h2>{{ post.title }}</h2>
      <h3>{{ post.category_name }}</h3>
      <h4>{{ post.user_name }}</h4>
      <img v-bind:src="post.image" alt=""><br>
      <h5>Created: {{ relativeDate(post.created_at) }} ago</h5>
      <router-link v-bind:to="`/posts/${post.id}`">Details</router-link><br><br>
    </div>

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
      posts: [],
      titleFilter: "",
      sortById: -1
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
    }
  }
};
</script>