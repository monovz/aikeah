<template>
  <div class="container">
    <div class="row justify-content-center align-items-center" style="min-height:80vh;">
      <div class="col-4">
        <h2 class="text-center">Welcome</h2><br>
        <form v-on:submit.prevent= 'login' class="text-left">
            <div class="form-group">
              <label for="username-login">Username/email</label>
              <input type="text"
              class="form-control custom-form"
              v-model= 'username'
              id="username-login" placeholder="Enter username/email">
            </div>
            <div class="form-group mb-4">
              <label for="password-login">Password</label>
              <input type="password"
              class="form-control custom-form"
              v-model= 'password'
              id="password-login" placeholder="Enter password">
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="custom-btn btn btn-success px-3 py-2">Login</button>
            </div>
            <br>
            <small class="form-text text-center">
              Don't have account?
              <router-link class="text-sucess" to="/register">
              <b class="text-success">Sign up</b>
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
  name: 'Home',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      axios({
        method: 'post',
        url: `${this.baseUrl}/login`,
        data: {
          username: this.username,
          password: this.password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token);
          this.$store.commit('setIsLoggedIn');
          this.$router.push('/');
          localStorage.setItem('user', `{"id":"${data.id}","username":"${data.username}","email":"${data.email}"}`);
          this.$store.commit('setUser');
        })

        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
  computed: {
    baseUrl() {
      return this.$store.state.baseUrl;
    },
  },
};
</script>
