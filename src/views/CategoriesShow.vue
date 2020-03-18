<template>
  <div class="categories-show">

    <div class="container">
      <h1>{{ category.name }}</h1>
      Search by Title: <input type="text" v-model="titleFilter"><br>
      <button v-bind:class="{'button': sortById == -1}" v-on:click="sortById = -1 ">Sort by new to old</button>
      <button v-bind:class="{'button': sortById == 1}" v-on:click="sortById = 1 ">Sort by old to new</button> 
    </div>

    <div v-for="post in orderBy(filterBy(category.posts, titleFilter, 'title'), 'id', sortById)">
      <h2>{{ post.title }}</h2>
      <h4>{{ post.user_name }}</h4>
      <p>{{ post.body }}</p>
      <img :src="post.image" alt=""><br>
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

  methods: {}
};
</script>