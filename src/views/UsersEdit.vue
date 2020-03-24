<template>
  <div class="users-edit">

    <div class="container">
      <div class="col-md-6">
        <h2 class="mrg-btm-30">Edit User</h2>
        <form v-on:submit.prevent="updateUser(user)">
          <div class="row">
            <div class="form-group col-md-6">
              First Name<input type="text" class="form-control" v-model="user.first_name">
            </div>
            <div class="form-group col-md-6">
              Last Name<input type="text" class="form-control"  v-model="user.last_name">
            </div>
            <div class="form-group col-md-12">
              User Name<input type="text" class="form-control" v-model="user.user_name">
            </div>
            <div class="form-group col-md-12">
              Email<input type="email" class="form-control" v-model="user.email">
            </div>
            <div class="form-group col-md-12">
              Password<input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group col-md-12">
              Password<input type="password" class="form-control" v-model="password_confirmation">
              <small v-if="password !== password_confirmation" class="warning">Does not match Password</small>
            </div>
            <div class="form-group col-md-12">
              <input class="btn btn-md btn-dark" type="submit" value="Update">
            </div>
            <div class="form-group col-md-12">
              <a class="btn btn-md btn-danger" v-on:click="destroyUser()">Delete User</a>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- <div class="container">
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
        <div>
          <label>Password: </label>
          <input type="password" v-model="password">
        </div>
        <div>
          <label>Password Confirmation: </label>
          <input type="password" v-model="password_confirmation"><br>
          <small v-if="password !== password_confirmation" class="warning">Does not match Password</small>
        </div>
        <input type="submit" value="Submit">
      </form>
    </div>

    <div>
      <button v-on:click="destroyUser()">Delete User</button>
    </div> -->

  </div>
</template>

<style>
.warning {
  color: red;
}
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      user: {},
      password: "",
      password_confirmation: "",
      errors: []
    };
  },

  created: function() {
    axios
      .get(`/api/users/${this.$route.params.id}`)
      .then(response => {
        this.user = response.data;
        console.log(response.data);
      });
  },


  methods: {
    updateUser: function(user) {
      var params = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        user_name: user.user_name,
        password: this.password,
        password_confirmation: this.password_confirmation
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
      if (confirm("Do you really want to delete your account?")) {
        axios
          .delete(`/api/users/${this.user.id}`)
          .then(response => {
            this.$router.push("/logout");
          });
      }    
    }
  }
};
</script>