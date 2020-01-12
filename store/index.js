export const state = () => ({
  counter: 0,
  cart: []
})
export const mutations = {
  increment(state) {
    state.counter++
  },
  addToCart(state, payload) {
    state.cart.push(payload)
  }
  // addToCart(s, payload) {
  //   return { ...state, cart: [...state.cart, payload] }
  // }
}
