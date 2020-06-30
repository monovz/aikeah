<template>
    <div>
        <p>name : {{detailProduct.name}}</p>
        <p>stock: {{detailProduct.stock}}</p>
        <p>price: {{detailProduct.price}}</p>
    </div>
</template>
<script>
export default {
  name: 'DetailProduct',
  computed: {
    detailProduct() {
      return this.$store.state.detailProduct;
    },
  },
  created() {
    this.$store.dispatch('getDetailProduct', this.$route.params.id);
  },
};
</script>
