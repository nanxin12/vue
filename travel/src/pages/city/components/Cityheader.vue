<template>
  <div class="header">
    <router-link to="/">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    </router-link>
    <div class="header-conter">
        <p>城市选择</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  // 模板注册
  components: {

  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  display: flex;
  background: $bgColor;
  height: $height;
  color: #fff;
  line-height: $height;
  position relative
  .header-left
    width: 0.64rem;
    float: left;
    position absolute
    left  0
    top 0
    .back-icon
      text-align: center;
      font-size: 0.4rem;
      color #fff
  .header-conter
    flex 1
    text-align center
    font-size 0.32rem
</style>
