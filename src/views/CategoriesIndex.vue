<template>
  <div class="categories-index">

    <!-- <div class="container text-center mrg-top-30">
        <h2 class="mrg-btm-40">Select a Category and see what people are posting.</h2>
    </div> -->  

    <!-- Page Tittle Start -->
    <section class="page-tittle page-tittle-sm bg-white">
      <div class="container">               
        <div class="page-tittle-head display-block text-center">
          <h1 class="font-size-45 font-weight-light ls-1-5">Select a Category</h1>
          <h3>See what others have to share as they reach for Green Goals</h3>
        </div>
      </div>
    </section>
    <!-- Page Tittle End -->

    <!-- Portfolio Start -->
    <section class="section-5">
      <div class="container">  
        <div class="portfolio isotope row col-3 gutter mrg-top-50">
          <div class="folio-item web-design" v-for="category in categories">
            <div class="folio-style-4">
              <div class="folio-image">
                <img class="img-responsive" :src="category.image_url" alt="">
              </div>
              <div class="overlay">
                <div class="folio-caption">
                  <div class="folio-content">
                    <div class="folio-info">
                      <h3 class="folio-tittle">{{ category.name }}</h3>
                    </div>
                    <span class="divider"></span>
                    <div class="folio-action">
                      <!-- <a class="lightbox-img" href="assets/images/portfolio/folio-26.jpg" title="The Card"><i class="ei ei-plus-boxed"></i></a> -->
                      <router-link class="" :to="`/categories/${category.id}`"><i class="ei ei-link"></i></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
    <!-- Portfolio End -->

    <!-- <div v-for="category in categories">
      <h1>{{ category.name }}</h1>
      <img :src="category.image_url" alt=""><br>
      <router-link :to="`/categories/${category.id}`">Posts</router-link>
    </div> -->
  

  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      categories: []
    };
  },

  created: function() {
    axios
      .get("/api/categories")
      .then(response => {
        this.categories = response.data;
      });
  },

  methods: {}
};
</script>