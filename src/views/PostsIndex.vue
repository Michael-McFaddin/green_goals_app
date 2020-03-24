<template>
  <div class="posts-index">

    <div class="widget widget-search">
      <h3 class="widget-tittle">Search</h3>
      <label class="input-wrapper">
        <input class="form-control" type="text" placeholder="Title Search" v-model="titleFilter">
        <a href="" class="btn inline-submit mrg-top-5"><i class="ei ei-search"></i></a>
      </label>
      <div class="mrg-btm-15">
        <a class="btn btn-md btn-theme-inverse" v-on:click="sortById = 1 ">Oldest to Newest</a>
      </div>
      <div class="mrg-btm-15">
        <a class="btn btn-md btn-theme-inverse" v-on:click="sortById = -1 ">Newest to Oldest</a>
      </div>
    </div>

    <!-- Blog list full width -->
    <section class="section-1">
     <div class="container">
      <div class="blog blog-list" v-for="post in orderBy(filterBy(posts, titleFilter, 'title'), 'id', sortById)">
        <div class="blog-item">
          <div class="row">
            <div class="col-md-4">
              <div class="blog-media">
                <a href="single-post-full-width.html"><img class="img-responsive" v-bind:src="post.image" alt=""></a>
              </div>
            </div>
            <div class="col-md-8">
              <div class="blog-content">
                <h3 class="blog-tittle"><a href="single-post-full-width.html">{{ post.title }}</a></h3>
                <div class="blog-meta">
                  <span class="author">By <a class="theme-color" href="blog-classic-left-sidebar.html">{{ post.user_name }}</a></span>
                  <h5 class="author">Category: {{ post.category_name }}</h5>
                  <span class="date">Created: {{ relativeDate(post.created_at) }}</span>
                </div>
                <p class="blog-article">{{ post.body }}</p>
                <div class="blog-action">
                  <!-- <span class="comments"><a href="javascript:void(0);"><i class="ei ei-speech-bubble"></i> 20</a></span> -->
                  <!-- <span class="likes"><a href="javascript:void(0);"><i class="ei ei-heart"></i> 168</a></span> -->
                </div>
                <div class="continue-reading">
                  <router-link class="btn btn-dark-inverse" v-bind:to="`/posts/${post.id}`"><i class="ei ei-right-arrow"></i></router-link>
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="text-center mrg-top-50">
        <button class="btn btn-dark btn-md">Show More</button>
      </div> -->
    </div>
    </section>
    <!-- Blog End -->

    <!-- Blog 3 column masonry -->
    <!-- <section class="section-1 bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="blog-card masonry isotope col-3 gutter" v-for="post in orderBy(filterBy(posts, titleFilter, 'title'), 'id', sortById)">
              <div class="blog-item">
                <div class="blog-wrapper">
                  <div class="blog-media">
                    <img class="img-responsive" v-bind:src="post.image" alt="">  
                  </div>
                  <div class="blog-content">
                    <h3 class="blog-tittle"><a href="blog-classic-left-sidebar.html">{{ post.title }}</a></h3>
                    <div class="blog-meta">
                      <span>By </span>
                      <a href="#"><span class="author">Henry Chew</span></a>
                      <span class="pdd-horizon-5">/</span>
                      <span class="date"> May 18th 2016</span>
                    </div>
                    <p class="blog-article">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div class="blog-action">
                      <a class="continue-reading" href="blog-classic-left-sidebar.html">Read More</a>
                    </div>
                  </div>
                </div>
              </div>    
            </div>
            <div class="text-center mrg-top-50">
              <button class="btn btn-dark btn-md">Show More</button>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Blog End -->
    
    <!-- Blog classic with image, right side menu -->
    <!-- <section class="section-1">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="blog-classic">
              <div v-for="post in orderBy(filterBy(posts, titleFilter, 'title'), 'id', sortById)" class="blog-item">
                <div class="blog-media">
                  <img class="img-responsive" v-bind:src="post.image" alt="">
                </div> 
                <div class="blog-content">
                  <h3 class="blog-tittle">{{ post.title }}</h3>
                  <div class="blog-meta">
                    <span class="author">By <b><a class="theme-color" href="blog-classic-left-sidebar.html">{{ post.user_name }}</a></b></span>
                    <span class="pdd-horizon-5"> / </span>
                    <span class="date"><b>Created: {{ relativeDate(post.created_at) }} ago</b></span>
                    <span class="pdd-horizon-5"> / </span>
                    <span>In <b><a class="text-gray" href="blog-classic-left-sidebar.html">{{ post.category_name }}</a></b></span>
                  </div>
                  <div class="blog-article">
                    <p>{{ post.body }}</p>
                  </div>
                  <div class="clearfix">
                    <div class="blog-action">
                      <span class="comments"><a href="javascript:void(0);"><i class="ei ei-speech-bubble"></i> 20</a></span>
                      <span class="likes"><a href="javascript:void(0);"><i class="ei ei-heart"></i> 168</a></span>
                      <span class="share"><a href="javascript:void(0);"><i class="ei ei-sharethis"></i> Share</a></span>
                    </div>
                    <router-link class="continue-reading" v-bind:to="`/posts/${post.id}`">Read More</router-link>
                  </div>
                </div>                
              </div>
            </div>  
          </div>
          <div class="col-md-4">
            <div class="blog-sidebar sidebar-right">
              <div class="widget widget-search">
                <h3 class="widget-tittle">Search</h3>
                <label class="input-wrapper">
                  <input class="form-control" type="text" placeholder="Search">
                  <a href="" class="btn inline-submit mrg-top-5"><i class="ei ei-search"></i></a>
                </label>
              </div>

            <div class="widget widget-link dotted">
              <h3 class="widget-tittle">Archives</h3>
              <ul class="link">
                <li><a href="#">August 2016</a></li>
                <li><a href="#">September 2016</a></li>
                <li><a href="#">October 2016</a></li>
                <li><a href="#">November 2016</a></li>
              </ul>
            </div>

            <div class="widget widget-news">
              <h3 class="widget-tittle">News</h3>
              <div class="news-item">
                <div class="news-media">
                  <a href="#"><img class="img-responsive" src="assets/images/news-1.jpg" alt=""></a>
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
              <div class="news-item">
                <div class="news-media">
                  <a href="#"><img class="img-responsive" src="assets/images/news-3.jpg" alt=""></a>
                </div>
                <div class="news-info">
                  <a href="#" class="news-tittle">Feel the Inovation</a>
                  <span class="news-meta">By <a href="#" class="author">Hendry Chew</a> 3 April</span>
                </div>
              </div>
              <div class="news-item">
                <div class="news-media">
                  <a href="#"><img class="img-responsive" src="assets/images/news-4.jpg" alt=""></a>
                </div>
                <div class="news-info">
                  <a href="#" class="news-tittle">Feel the Inovation</a>
                  <span class="news-meta">By <a href="#" class="author">Hendry Chew</a> 3 April</span>
                </div>
              </div>
            </div>

            <div class="widget widget-about">
              <h3 class="widget-tittle">Latest Feed</h3>
              <div class="swiper-single swiper-container no-pdd-btm">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <a href="#">Read More</a>
                  </div>
                  <div class="swiper-slide">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <a href="#">Read More</a>
                  </div>
                  <div class="swiper-slide">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>  
            </div>


            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Blog End -->

    <!-- <div class="container">
      <h1>All Posts</h1>
      Search by Title: <input type="text" v-model="titleFilter"><br>
      <button v-bind:class="{'button': sortById == -1}" v-on:click="sortById = -1 ">Sort by new to old</button>
      <button v-bind:class="{'button': sortById == 1}" v-on:click="sortById = 1 ">Sort by old to new</button>
    </div> -->
    
    <!-- <div v-for="post in orderBy(filterBy(posts, titleFilter, 'title'), 'id', sortById)">
      <h2>{{ post.title }}</h2>
      <h3>{{ post.category_name }}</h3>
      <h4>{{ post.user_name }}</h4>
      <img v-bind:src="post.image" alt=""><br>
      <h5>Created: {{ relativeDate(post.created_at) }} ago</h5>
      <router-link v-bind:to="`/posts/${post.id}`">Details</router-link><br><br>
    </div> -->

  </div>
</template>

<style>
/*img {
  width: 250px;
}
.button {
  background-color: blue;
  color: white;
}*/
</style>

<script>
import axios from 'axios';
import moment from 'moment';
import Vue2Filters from 'vue2-filters';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      posts: [],
      titleFilter: "",
      sortById: -1
    };
  },

  created: function() {
    axios
      .get("/api/posts")
      .then(response => {
        this.posts = response.data;
        console.log(response.data);
      });
  },

  methods: {
    relativeDate: function(date) {
      return moment(date).startOf('day').fromNow(date);
    }
  }
};
</script>