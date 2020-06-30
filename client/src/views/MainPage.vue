<template>
    <div>
        <div
        @click.prevent= "getDetailProduct(product.id)"
        v-for= "(product, i) in products"
        :key= "i">
            Product:
            <router-link :to= "{name: 'DetailProduct', params:{id: product.id}}">
            {{product.name}}
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MainPage',
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    getDetailProduct(id) {
      this.$store.dispatch('getDetailProduct', id);
    },
  },
};
</script>
