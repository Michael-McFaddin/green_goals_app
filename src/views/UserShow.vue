<template>
  <div class="user-show">
    <h1>Hello {{ user.first_name }}!</h1>
    <h3>{{ user.first_name }}</h3>
    <h3>{{ user.last_name }}</h3>
    <h3>{{ user.user_name }}</h3>
    <h3>{{ user.email }}</h3>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      message: "User Show!",
      user: {}
    };
  },


  created: function() {
    axios
      .get(`/api/users/${"user_id"}`)
      .then(response => {
        console.log(response.data);
        this.user = response.data;
      });
  },


  methods: {}
};
</script>