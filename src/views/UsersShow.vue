<template>
  <div class="users-show">

    <section class="section-5 bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="pdd-horizon-40">
              <img class="img-responsive img-style-2 mrg-horizon-auto border-radius-round" src="assets/images/thumb/user.jpg" alt="">
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="text-white text-center-sm">
              <h2 class="no-mrg-btm">{{ user.first_name }} {{ user.last_name }}</h2>
              <h4>User name: {{ user.user_name }}</h4>
              <h4>Email: {{ user.email }}</h4>
              <div class="mrg-top-40">
                <router-link v-bind:to="`/users/${user.id}/edit`" class="btn btn-md border-radius-6 btn-theme mrg-right-10">Edit User</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
        this.user = response.data;
      });
  },


  methods: {}
};
</script>