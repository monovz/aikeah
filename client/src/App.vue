<template>
  <div id="app" style="min-height: 100vh">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  created() {
    this.$store.dispatch('fetchProducts');
    if (localStorage.token) {
      this.$store.dispatch('fetchTransactions');
      this.$store.commit('setIsLoggedIn');
      this.$store.commit('setUser');
    }
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
