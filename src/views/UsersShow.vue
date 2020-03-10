<template>
  <div class="users-show">
    <h1>Hello {{ user.first_name }}!</h1>
    <h3>{{ user.first_name }} {{ user.last_name }}</h3>
    <h3>User Name: {{ user.user_name }}</h3>
    <h3>Email: {{ user.email }}</h3>

    <router-link v-bind:to="`/users/${user.id}/edit`">Edit User</router-link>

  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      user: {}
    };
  },


  created: function() {
    axios
      .get(`/api/users/${this.$route.params.id}`)
      .then(response => {
        console.log(response.data);
        this.user = response.data;
      });
  },


  methods: {}
};
</script>