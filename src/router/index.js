import Vue from 'vue';
import VueRouter from 'vue-router';
// import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersShow from "../views/UsersShow.vue";
import UsersEdit from "../views/UsersEdit.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostsNew from "../views/PostsNew.vue";
import PostsShow from "../views/PostsShow.vue";
import PostsEdit from "../views/PostsEdit";
import CategoriesIndex from "../views/CategoriesIndex";
import CategoriesShow from "../views/CategoriesShow";
import FavoritesIndex from "../views/FavoritesIndex";
import RecipesIndex from "../views/RecipesIndex";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: About
  // },
  {
    path: '/',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/users/:id',
    name: 'users-show',
    component: UsersShow
  },
  {
    path: '/users/:id/edit',
    name: 'users-edit',
    component: UsersEdit
  },
  {
    path: '/posts',
    name: 'posts-index',
    component: PostsIndex
  },
  {
    path: '/posts/new',
    name: 'posts-new',
    component: PostsNew
  },
  {
    path: '/posts/:id',
    name: 'posts-show',
    component: PostsShow
  },
  {
    path: '/posts/:id/edit',
    name: 'posts-edit',
    component: PostsEdit
  },
  {
    path: '/categories',
    name: 'categories-index',
    component: CategoriesIndex
  },
  {
    path: '/categories/:id',
    name: 'categories-show',
    component: CategoriesShow
  },
  {
    path: '/favorites',
    name: 'favorites-index',
    component: FavoritesIndex
  },
  {
    path: '/recipes',
    name: 'recipes-index',
    component: RecipesIndex
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
