import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    baseUrl: 'http://localhost:3000',
    user: {},
    products: [],
    detailProduct: {},
  },
  mutations: {
    setIsLoggedIn(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.user = {};
    },
    setUser(state) {
      state.user = JSON.parse(localStorage.user);
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setDetailProduct(state, payload) {
      state.detailProduct = payload;
    },
  },
  actions: {
    fetchProducts(context) {
      axios({
        method: 'get',
        url: `${context.state.baseUrl}/products`,
        headers: {
          token: localStorage.token,
        },
      })
        .then(({ data }) => {
          context.commit('setProducts', data);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    getDetailProduct(context, productId) {
      const id = productId;
      axios({
        method: 'get',
        url: `${context.state.baseUrl}/products/${id}`,
        headers: {
          token: localStorage.token,
        },
      })
        .then(({ data }) => {
          context.commit('setDetailProduct', data);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
  modules: {
  },
});
