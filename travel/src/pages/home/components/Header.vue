<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont arrow-icon">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  //scoped样式只在本页面管用  lang="stylus" 引入stylus样式书写css
  // @import '../../../assets/styles/varibles.styl'
  // 在这里引入需要加在@前加~
  @import '~@/assets/styles/varibles.styl'
  .header
    display flex
    background $bgColor
    height 0.86rem
    color #fff
    line-height .86rem

    .header-left
      width 0.64rem
      float left
      .back-icon
        text-align center
        font-size .4rem

    .header-input
      flex 1
      height .64rem
      background #fff
      margin-left .2rem
      border-radius .1rem
      margin-top .12rem
      color #ccc
      line-height .64rem
      padding-left .2rem

    .header-right
      width 1.24rem
      float right
      text-align center
      .arrow-icon
        margin-left .1rem
        font-size .24rem
</style>
