<template>
    <div class="container">
      <h1 class="m-5 text-center">Our Products</h1>
      <div class="row d-flex justify-content-center">
        <div class="mx-4 my-3 col-3" v-for= "(product, i) in products" :key= "i">
          <b-card
          :title= "product.name"
          :img-src= "product.image_url"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          >
            <b-card-text>
              Rp. {{product.price}},00
            </b-card-text>
            <b-button href="" @click.prevent= "getDetailProduct(product.id)"
            variant="primary" class="px-3 py-2">
              Detail
            </b-button>
          </b-card>
        </div>
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
      this.$router.push(`/product/${id}`);
    },
    rupiah(price) {
      const rego = String(price);
      let harga = [];
      let counter = 0;
      for (let i = rego.length - 1; i >= 0; i - 1) {
        // console.log(i)
        if (counter === 3) {
          harga.unshift('.');
          harga.unshift(rego[i]);
          counter = 0;
        } else {
          harga.unshift(rego[i]);
        }
        counter += 1;
      }

      harga = harga.join('');
      // console.log(rego, '<<>>', harga);
      return harga;
    },
  },
};
</script>
