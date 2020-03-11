<template>
  <div class="posts-new">

    <h1>Make a new Post</h1>
    <form action="">
      
    </form>

  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      newTitle: "",
      newBody: "",
      newCategoryId: 1,
      errors: []
    };
  },

  created: function() {},

  methods: {}
};
</script>