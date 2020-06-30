<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <router-link to="/">
      <b-navbar-brand>AIKEAH</b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" class = "hover-menu">
            Products
          </router-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto mr-4">
          <b-nav-item-dropdown right v-if= "isLoggedIn">
            <template v-slot:button-content>
              <em>{{user.username}}</em>
            </template>
            <b-dropdown-item href="" @click.prevent= 'logout'>Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <div v-else>
            <router-link to="/login" class="btn btn-success px-4 py-2">
              Login
            </router-link>

          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/login');
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>
<style>
  .hover-menu{
    color: white;
  }
  .hover-menu:hover{
    text-decoration: none!important;
  }
</style>
