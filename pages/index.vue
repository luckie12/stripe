<template>
  <div class="container">
    <div class="columns">
      <div v-for="product in products" :key="product.id" class="column">
        <div class="box">
          <h1 class="is-large">{{ product.name }}</h1>
          <img :src="product.img" width="300em" alt="" />
          <p class="is-small">Stock: {{ product.stock }}</p>
          <input
            :max="product.stock"
            min="1"
            class="input"
            type="number"
            name="quantity"
            v-model="products[product.id].amount"
          />
          <div class="buttons has-addons is-centered">
            <button @click="buyProduct" class="button is-info is-half">
              Buy
            </button>
            <button @click="addToCart(product.id)" class="button is-dark">
              Add to cart
            </button>
          </div>
          <span class="tag is-success">In home tomorrow!</span>
          {{ $store.state.cart }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import Swal from 'sweetalert2'
// import axios from 'axios'

export default {
  // async asyncData({ params }) {
  //   const { data } = await axios.get(`http://my-api/cart`)
  //   return { title: data.title }
  // },
  data() {
    return {
      products: [
        {
          id: 0,
          name: 'Tshirt!',
          img:
            'https://www.nultien.nu/wp-content/uploads/2019/06/effeserieus_tshirt.png',
          price: '5,99',
          stock: 100,
          amount: 1
        },
        {
          id: 1,
          name: 'Tshirt!',
          img:
            'https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bf73.png',
          price: '5,99',
          stock: 100,
          amount: 1
        },
        {
          id: 2,
          name: 'Tshirt!',
          img:
            'https://www.nultien.nu/wp-content/uploads/2019/06/effeserieus_tshirt.png',
          price: '5,99',
          stock: 100,
          amount: 1
        },
        {
          id: 3,
          name: 'Tshirt!',
          img:
            'https://www.nultien.nu/wp-content/uploads/2019/06/effeserieus_tshirt.png',
          price: '5,99',
          stock: 100,
          amount: 1
        }
      ],
      cart: [{}]
    }
  },
  methods: {
    addToCart(pid) {
      if (this.$store.commit('addToCart', this.products[pid])) {
        Swal.fire({
          title: 'Success!',
          html:
            `Added <strong>` +
            this.products[pid].name +
            `</strong> to your cart!`,
          icon: 'success',
          confirmButtonText: 'Ok!',
          // toast: true,
          timer: 2500,
          timerProgressBar: true
        })
      } else {
        Swal.fire({
          title: 'Error!',
          html: `Something went terribly wrong!`,
          icon: 'error',
          confirmButtonText: 'Ok!',
          // toast: true,
          timer: 2500,
          timerProgressBar: true
        })
      }
    },
    buyProduct() {}
  },
  created() {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
