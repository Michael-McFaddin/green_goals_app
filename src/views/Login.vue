<template>
  <div class="login">

    <!-- Modal Start -->
<!-- use data-backdrop="static" & data-keyboard="false" to lock modal -->
<!-- <div class="modal fade modal-center load-active" id="login" role="dialog" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-body no-pdd">
        <div class="login-panel">
          <div class="content-block-2">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-7 col-md-offset-5">
                  <div class="text-content pdd-horizon-60">
                    <h3 class="mrg-btm-30 mrg-top-15">Sign In</h3>
                    <form v-on:submit.prevent="submit()">
                      <div class="form-wrapper">
                        <label><b>Email</b></label>
                        <input type="email" class="form-control" v-model="email" placeholder="Email">
                      </div>
                      <div class="form-wrapper">
                        <label><b>Password</b></label>
                        <input type="password" class="form-control" v-model="password" placeholder="Password">
                      </div>
                      <div>
                        <ul>
                          <li class="text-danger" v-for="error in errors">{{ error }}</li>
                        </ul>
                      </div>
                      <div>
                        <a href=""><i class="text-gray">Forgot Password ?</i></a>
                      </div>
                      <input class="btn btn-md btn-theme mrg-vertical-20" type="submit" value="Sign in">
                    </form>
                  </div>
                </div>
              </div>
            </div>  
            <div class="image-container col-md-5 hidden-xs hidden-sm">
              <div class="background-holder theme-overlay has-content" style="background-image:url(assets/images/bg-18.jpg)">
                <div class="content pdd-horizon-50">
                  <h3 class="mrg-btm-20 text-white">Sign Up Now!</h3>
                  <p class="text-white font-size-14">This Modal is locked on, but you can optionaly turn this fucntion off.</p>
                  <button class="btn btn-sm btn-white-inverse mrg-vertical-20">Register</button>
                  <ul class="social-btn mrg-top-30">
                    <li><a class="btn icon-btn-md btn-white-inverse hover-facebook border-radius-round" href="javascript:void(0);"><i class="ei ei-facebook"></i></a></li>
                    <li><a class="btn icon-btn-md btn-white-inverse hover-twitter border-radius-round" href="javascript:void(0);"><i class="ei ei-twitter"></i></a></li>
                    <li><a class="btn icon-btn-md btn-white-inverse hover-google-plus border-radius-round" href="javascript:void(0);"><i class="ei ei-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->
<!-- Modal End -->


    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <div>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/posts");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>