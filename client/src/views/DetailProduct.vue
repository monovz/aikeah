<template>
    <div>
        <p>name : {{detailProduct.name}}</p>
        <p>stock: {{detailProduct.stock}}</p>
        <p>price: {{detailProduct.price}}</p>
        <button type="button" class="btn btn-success" @click.prevent= "addToCart">
          Add To Cart
        </button>
    </div>
</template>
<script>
export default {
  name: 'DetailProduct',
  methods: {
    addToCart() {
      this.$store.dispatch('makeTransaction', { id: this.detailProduct.id });
    },
  },
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
