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
              <router-link tag="a" class="logo" :to="{ name: 'categories-index' }"><img class="logo-light" src="/assets/images/logo/green_goals_white.png" alt="Eastern"></router-link>
              <router-link tag="a" class="logo" :to="{ name: 'categories-index' }"><img class="logo-dark" src="/assets/images/logo/green_goals_logo.png" alt="Eastern"></router-link>
            </div>                          
          </div>
          <div class="collapse navbar-collapse nav-collapse">
            <ul class="nav navbar-nav" >
              <li>
                <router-link   class="dropdown-toggle" to="/posts">All Posts</router-link>
              </li>
              <li>
                <router-link  to="/categories">Categories</router-link>
              </li >
              <li>
                <router-link  v-if="isLoggedIn()" to="/posts/new">New Post</router-link>
              </li>
              <li>
                <router-link  v-if="isLoggedIn()" to="/favorites">Favorites</router-link>
              </li>
              <li>
                <router-link  v-if="isLoggedIn()" to="/recipes">Recipe Search</router-link>
              </li>
              <li>
                <router-link  v-if="!isLoggedIn()" to="/login">Login</router-link>
              </li>
              <li>
                <router-link  v-if="!isLoggedIn()" to="/">Sign up</router-link>
              </li>
              <li>
                <router-link  v-if="isLoggedIn()" to="/users/:id">Account</router-link>
              </li>
              <li>
                <router-link  v-if="isLoggedIn()" to="/logout">Logout</router-link>
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

    <!-- <div style="position: relative; text-align: center;">
      <img style="width: 100%;" src="assets/images/greengoals_4.jpg" alt="">
        <div class="bottom-left">
            <h2 class="title-text1">Share Your Green Goals With Others</h2>
            <h4 class="title-text2">Green Goals is a place to share tips, trick and knowledge on how to lead a sustainable lifestyle.</h4>
        </div>
    </div> -->

    <div class="hero">
      <!-- <img style="width: 100%;" src="assets/images/greengoals_4.jpg" alt=""> -->
        <div class="bottom-left">
          <h2 class="title-text1">Share Your Green Goals With Others</h2>
          <h4 class="title-text2">Green Goals is a place to share tips, tricks and knowledge on how to lead a sustainable lifestyle.</h4>
        </div>
    </div>
    
    <!-- Page Title End -->

    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view />
    </transition>

  </div>
</template>

<style>
</style>

<script>
export default {
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function() {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
