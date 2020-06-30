<template>
  <div class="container">
    <div class="row justify-content-center align-items-center" style="min-height:80vh;">
      <div class="col-4">
        <h2 class="text-center">Register</h2><br>
        <form v-on:submit.prevent= 'register' class="text-left">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text"
              class="form-control custom-form"
              v-model= 'username'
              id="username" placeholder="Enter username">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text"
              class="form-control custom-form"
              v-model= 'email'
              id="email" placeholder="Enter email">
            </div>
            <div class="form-group mb-4">
              <label for="password">Password</label>
              <input type="password"
              class="form-control custom-form"
              v-model= 'password'
              id="password" placeholder="Enter password">
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="custom-btn btn btn-success px-3 py-2">Register</button>
            </div>
            <br>
            <small class="form-text text-center">
              <router-link class="text-primary" to="/login">
              <b class="text-primary">Back to Login</b>
              </router-link>
            </small><br>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      if (this.email === '' || this.password === '') {
        console.log('Email and password is required');
      } else {
        axios({
          method: 'post',
          url: `${this.baseUrl}/register`,
          data: {
            username: this.username,
            email: this.email,
            password: this.password,
          },
        })
          .then(() => {
            this.$router.push('/login');
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      }
    },
  },
  computed: {
    baseUrl() {
      return this.$store.state.baseUrl;
    },
  },
};
</script>
