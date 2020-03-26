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
    <section class="page-tittle page-tittle-xl kenburn-bg dark-overlay">
      <img class="kenburn-img" src="assets/images/greengoals_3.jpg" alt="">
      <div class="container">
        <div class="page-tittle-head">
          <h2>Share Your Green Goals With Others</h2>
          <h4>Green Goals is a place to share tips, trick and knowledge on how to lead a sustainable lifestyle.</h4>
        </div>
        <!-- <ol class="breadcrumb pull-right mrg-top-30">
          <li class="breadcrumb-item"><a href="#">Features</a></li>
          <li class="breadcrumb-item"><a href="#">Header</a></li>
          <li class="breadcrumb-item active">Header Transparent Fixed</li>
        </ol> -->
      </div>
    </section>
    <!-- Page Title End -->

    <!-- Dummy Content Start -->
    <!-- <section class="section-1">
      <div class="container">
        <div class="row">
         <div class="col-md-offset-1 col-md-10">
           <h2 class="heading-1 text-center">Experince Eastern</h2>
           <p class="mrg-top-60"><span class="dropcap theme-color">L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simple.</p>
         </div>
       </div>
     </div>
    </section> -->
    <!-- Dummy Content End -->
  

    <!-- Header Start -->
    <!-- <header id="menu" class="header header-sticky header-center">
      <nav class="navbar">
        <div class="container">
          <div class="menu-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
              <span class="top-bar"></span>
              <span class="middle-bar"></span>
              <span class="bottom-bar"></span>
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="nav-logo">
              <a class="logo" href="index.html"><img class="logo-dark" src="/assets/images/logo/logo-2.png" alt="Eastern"></a>
            </div> 
          </div>

          <div class="collapse navbar-collapse nav-collapse">
            <ul class="nav navbar-nav nav-left">
              <li>
                <router-link to="/posts">All Posts</router-link>
              </li>
              <li>
                <router-link v-if="isLoggedIn()" to="/posts/new">Add Post</router-link>
              </li>
              <li>
                <router-link to="/categories">Categories</router-link>
              </li>
              <li>
                <router-link v-if="isLoggedIn()" to="/recipes">Recipes</router-link>
              </li>
            </ul>
            <ul class="nav navbar-nav nav-right">
              <li>
                <router-link v-if="isLoggedIn()" to="/favorites">Favorites</router-link>
              </li>
              <li>
                <router-link v-if="isLoggedIn()" to="/users/:id">Account</router-link>
              </li>
              <li>
                <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
              </li>
              <li>
                <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>
              </li>
              <li>
                <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header> -->
    <!-- Header End -->


    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link> |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> |
      <router-link v-if="isLoggedIn()" to="/users/:id">User Show</router-link> |
      <router-link to="/posts">All Posts</router-link> |
      <router-link v-if="isLoggedIn()" to="/posts/new">New Posts</router-link> |
      <router-link to="/categories">Categories</router-link> |      
      <router-link v-if="isLoggedIn()" to="/favorites">Favorites</router-link> |     
      <router-link v-if="isLoggedIn()" to="/recipes">Recipes</router-link>       
    </div> -->

    <router-view/>

    <!-- Footer Start -->
    <!-- <section class="footer-default">
      <div class="container">
        <div class="row mrg-btm-30">
          <div class="col-md-3">
            <div class="widget widget-about">
              <img class="img-responsive" src="assets/images/logo/logo-1.png" alt="">
              <p class="mrg-top-30">Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
          </div>
          <div class="col-md-4 col-md-offset-1">
            <div class="widget widget-link">
              <h3 class="widget-tittle">Useful Link</h3>
              <div class="row mrg-btm-30">
                <div class="col-md-6">
                  <ul class="link">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="link">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="widget widget-news">
              <h3 class="widget-tittle">News</h3>
              <div class="news-item">
                <div class="news-media">
                  <img class="img-responsive" src="assets/images/news-1.jpg" alt="">
                </div>
                <div class="news-info">
                  <a href="#" class="news-tittle">Feel the Inovation</a>
                  <span class="news-meta">By <a href="#" class="author">Hendry Chew</a> 3 April</span>
                </div>
              </div>
              <div class="news-item">
                <div class="news-media">
                  <img class="img-responsive" src="assets/images/news-2.jpg" alt="">
                </div>
                <div class="news-info">
                  <a href="#" class="news-tittle">Feel the Inovation</a>
                  <span class="news-meta">By <a href="#" class="author">Hendry Chew</a> 3 April</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <span class="copyright"><img class="pdd-right-10" src="assets/images/logo/logo-3.png" alt="eastern"> Copyright © 2016 Eastern. <a href="http://themeforest.net/user/theme_nate">Theme_Nate</a></span>    
        </div>
      </div>
    </section> -->
    <!-- Footer End -->

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
    }
  }
};
</script>
