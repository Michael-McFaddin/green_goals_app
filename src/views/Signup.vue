<template>
  <div class="signup">


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
                      <div class="text-content pdd-horizon-60 pdd-vertical-60">
                        <h3 class="mrg-btm-30 mrg-top-15">Sign Up</h3>
                        <form v-on:submit.prevent="submit()">
                          <div class="row">
                            <div class="col-md-6 pdd-horizon-5">
                              <div class="form-wrapper">
                                <label><b>First Name</b></label>
                                <input type="text" class="form-control" placeholder="First Name" v-model="firstName">
                              </div>
                            </div>
                            <div class="col-md-6 pdd-horizon-5">
                              <div class="form-wrapper">
                                <label><b>Last Name</b></label>
                                <input type="text" class="form-control" placeholder="Last Name" v-model="lastName">
                              </div>
                            </div>
                            <div class="col-md-6 pdd-horizon-5">
                              <div class="form-wrapper">
                                <label><b>User Name</b></label>
                                <input type="text" class="form-control" placeholder="User Name" v-model="userName">
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12 pdd-horizon-5">
                              <div class="form-wrapper">
                                <label><b>Email</b></label>
                                <input type="email" class="form-control" placeholder="Email" v-model="email">
                              </div>  
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12 pdd-horizon-5">
                              <div class="form-wrapper">
                                <label><b>Password</b></label>
                                <input type="password" class="form-control" placeholder="password" v-model="password">
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12 pdd-horizon-5">
                              <div class="form-wrapper">
                                <label><b>Retype Password</b></label>
                                <input type="password" class="form-control" placeholder="Retype Password" v-model="passwordConfirmation">
                              </div>
                              <div>
                                <small v-if="password !== passwordConfirmation" class="warning">Password Confirmation does not match Password</small>
                              </div>
                            </div>
                          </div>
                          <div class="row mrg-top-10">
                            <div class="col-md-12 pdd-horizon-5">
                              <div>
                                <ul>
                                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                                </ul>
                              </div>
                              <div class="form-wrapper"> 
                                <span class="mrg-top-10 text-gray">Already have an account? <a class="theme-color" href="login-2.html">Sign In</a></span>
                                <input class="btn btn-md btn-dark pull-right" type="submit" value="Sign Up">
                              </div>
                            </div>
                          </div>
                        </form>
                      </div><
                    </div>
                  </div>
                </div>  
                <div class="image-container col-md-5 hidden-xs hidden-sm">
                  <div class="background-holder theme-overlay has-content" style="background-image:url(assets/images/bg-18.jpg)">
                    <div class="content pdd-horizon-50">
                      <img class="img-responsive mrg-btm-20" src="assets/images/logo/logo-1.png" alt="">
                      <p class="text-white">Create a Eastern account or sign in with social media below:</p>
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
        <h1>Signup</h1>
        <div>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>
        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>
        <div class="form-group">
          <label>User Name:</label> 
          <input type="text" class="form-control" v-model="userName">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation"><br>
          <small v-if="password !== passwordConfirmation" class="warning">Password Confirmation does not match Password</small>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<style>
  .warning {
  color: red;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        user_name: this.userName,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>