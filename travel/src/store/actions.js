export default ({
  changeCity (ctx, city) {
    ctx.commit('changeCity', city)
  },
  changeNx (ctx, a) {
    ctx.commit('changeNx', a)
  }
})
