<template>
    <div class="container">
      <div class="row d-flex align-items-center" style="min-height:80vh;">
        <div class="col-4 mr-3">
          <b-img :src= "detailProduct.image_url" fluid-grow alt="image"></b-img>
        </div>
        <div class="col-7 text-left p-4">
          <h1 class="my-3">{{detailProduct.name}}</h1>
          <h5 class="mb-4"><b>Rp. {{detailProduct.price}}</b></h5>
          <p>Stock: {{detailProduct.stock}} pcs</p><br><br>
          <form @submit.prevent= "addToCart" v-if= "detailProduct.stock!==0">
            <div>
              <b-form-input id="range-1" v-model= "amount" type="range" min="1"
              :max= "detailProduct.stock">
              </b-form-input>
              <div class="mt-2"><b>Amount: {{ amount }} pcs</b></div>
            </div><br><br>
            <button type="submit" class="mb-3 btn btn-success mr-4">
              Add To Cart
            </button>
            <button type="button" class="mb-3 btn btn-danger" @click.prevent= "backToShop">
              Back Shopping
            </button>
          </form>
          <div v-else >
            <h5 class="text-danger">
              This product is out of stock.
            </h5>
            <button type="button" class="my-3 btn btn-danger" @click.prevent= "backToShop">
              Back Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'DetailProduct',
  data() {
    return {
      amount: 1,
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch('makeTransaction', { id: this.detailProduct.id, amount: this.amount });
      this.$router.push('/');
    },
    backToShop() {
      this.$router.push('/');
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
