<template>
  <div class="users-edit">

    <div class="container">
      <form v-on:submit.prevent="updateUser(user)">
        <h1>Edit User</h1>
        <ul>
          <li v-for="error in errors">{{error}}</li>
        </ul>
        <div>
          <label>First Name: </label>
          <input type="text" v-model="user.first_name">
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" v-model="user.last_name">
        </div>
        <div>
          <label>Email: </label>
          <input type="text" v-model="user.email">
        </div>
        <div>
          <label>User Name: </label>
          <input type="text" v-model="user.user_name">
        </div>
        <button v-on:click="updateUser(user)">Update</button>
      </form>
    </div>

    <div>
      <button v-on:click="destroyUser()">Delete User</button>
    </div>

  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      user: {},
      errors: []
    };
  },

  created: function() {
    axios
      .get(`/api/users/${this.$route.params.id}`)
      .then(response => {
        this.user = response.data;
      });
  },


  methods: {
    updateUser: function(user) {
      var params = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        user_name: user.user_name
      };
      axios
        .patch(`api/users/${this.user.id}`, params)
        .then(response => {
          this.$router.push(`/users/${this.user.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destroyUser: function() {
      axios
        .delete(`/api/users/${this.user.id}`)
        .then(response => {
          this.$router.push("/");
        });
    }
  }
};
</script>