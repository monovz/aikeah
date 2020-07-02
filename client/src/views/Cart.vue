<template>
    <div class="container my-5">
        <h1 class="text-left my-5">Your Cart</h1>
        <b-card no-body class="overflow-hidden mb-4">
            <template v-if= "carts.length > 0">
                <b-row no-gutters v-for= "(cart, i) in carts" :key= "i"
                style="border: 1px solid rgba(0,0,0,.125)">
                <b-col md="2" class="pl-5">
                    <b-card-img :src= "cart.Product.image_url" alt="Image"
                    class="rounded-0" fluid></b-card-img>
                </b-col>
                <b-col md="10" class="text-left px-5 d-flex align-items-center">
                    <b-card-body :title= "cart.Product.name">
                    <b-card-text>
                        Amount: {{cart.amount}} pcs
                    </b-card-text>
                    <b-card-text>
                        <a href="" @click.prevent= "deleteTransaction(cart.Product.id)"
                        class="text-danger" style="text-decoration:underline;">
                            <small>Delete Transaction</small>
                        </a>
                        <h4 class="text-right">Rp. {{totalCarts[cart.Product.name]}},00</h4>
                    </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </template>
            <div class="p-4" v-else>
                No Transaction on the cart.
            </div>
            <template v-slot:footer>
                <div class="text-right py-3">
                    <span style="display: inline-block"><h4 class="text-left">Total: </h4></span>
                    <h4 style="display: inline-block;" class="text-muted px-5">
                        Rp. {{totalCarts.total}},00
                    </h4>
                </div>
            </template>
        </b-card>
        <button @click.prevent= "checkout" class="btn btn-success mr-4">
            Checkout
        </button>
        <button type="button" class="btn btn-danger" @click.prevent= "backToShop">
            Back Shopping
        </button>
    </div>
</template>
<script>
export default {
  name: 'Cart',
  computed: {
    carts() {
      const carts = [];
      this.$store.state.transactions.forEach((element) => {
        // console.log(element);
        if (element.status === 'to cart') {
          carts.push(element);
        }
      });

      return carts;
    },
    totalCarts() {
      let total = 0;
      const obj = {};
      this.carts.forEach((el) => {
        // console.log(total);
        obj[el.Product.name] = Number(el.Product.price) * Number(el.amount);
        total += Number(el.Product.price) * Number(el.amount);
      });
      obj.total = total;
      return obj;
    },
  },
  methods: {
    checkout() {
      this.$store.dispatch('updateTransactions');
      this.$router.push('/');
    },
    backToShop() {
      this.$router.push('/');
    },
    deleteTransaction(productId) {
      this.$store.dispatch('deleteTransaction', { id: productId });
    },
  },
  created() {
    this.$store.dispatch('fetchTransactions');
  },
};
</script>
