<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
              <div class="button-list">
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
          <div class="button-wrap">
            <div class="button">西安</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入better-scroll 插件来实现滚动效果
import Bscroll from 'better-scroll'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {

  },
  mounted () {
    // this.$refs.wrapper获取到最外层的dom  ref可以用来获取dom元素
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem
  .button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .button-wrap
      width 33.33%
      float left
      .button
        text-align center
        margin .1rem
        border .02rem solid #ccc
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      color #666
      padding-left .2rem

</style>
