<template>
  <div id="app">

        <!-- Header Start -->
    <header id="menu" class="header header-sticky header-transparent">
      <nav class="navbar">
        <div class="container-fluid">
          <div class="menu-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
             <span class="top-bar"></span>
             <span class="middle-bar"></span>
             <span class="bottom-bar"></span>
             <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="nav-logo">
              <a class="logo" href="index.html"><img class="logo-light" src="assets/images/logo/green_goals_white.png" alt="Eastern"></a>
              <a class="logo" href="index.html"><img class="logo-dark" src="assets/images/logo/green_goals_logo.png" alt="Eastern"></a>
            </div>                          
          </div>
          <div class="collapse navbar-collapse nav-collapse">
            <ul class="nav navbar-nav" >
              <li class="nav-item dropdown">
                <router-link to="/posts">All Posts</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link to="/categories">Categories</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link v-if="isLoggedIn()" to="/posts/new">New Post</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link v-if="isLoggedIn()" to="/favorites">Favorites</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link v-if="isLoggedIn()" to="/recipes">Recipe Search</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link v-if="!isLoggedIn()" to="/signup">Sign up</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link v-if="isLoggedIn()" to="/users/:id">Account</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- Header End -->

    <!-- Page Title Start -->
    <!-- <section class="page-tittle page-tittle-xl kenburn-bg dark-overlay">
      <img class="kenburn-img" src="assets/images/greengoals_3.jpg" alt="">
      <div class="container">
        <div class="page-tittle-head">
          <h2>Share Your Green Goals With Others</h2>
          <h4>Green Goals is a place to share tips, trick and knowledge on how to lead a sustainable lifestyle.</h4>
        </div> -->
        <!-- <ol class="breadcrumb pull-right mrg-top-30">
          <li class="breadcrumb-item"><a href="#">Features</a></li>
          <li class="breadcrumb-item"><a href="#">Header</a></li>
          <li class="breadcrumb-item active">Header Transparent Fixed</li>
        </ol> -->
      <!-- </div> -->
    <!-- </section> -->

    <div style="position: relative; text-align: center;">
      <img style="width: 100%;" src="assets/images/greengoals_4.jpg" alt="">
      <!-- <div class="container page-tittle"> -->
        <div class="bottom-left">
            <h2 style="text-align: left; color: white;">Share Your Green Goals With Others</h2>
            <h4 style="text-align: left; color: white;">Green Goals is a place to share tips, trick and knowledge on how to lead a sustainable lifestyle.</h4>
        </div>
      <!-- </div> -->
    </div>


    <!-- Page Title End -->

    

    <router-view/>

  </div>
</template>

<style>
</style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
