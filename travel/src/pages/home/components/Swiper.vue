<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swiperlist" :key="item.id">
      <img class="swiper-img" :src="item.imgsrc" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: 'true'
      },
      swiperlist: [
        {
          id: '001',
          imgsrc: 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
        }, {
          id: '002',
          imgsrc: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
        }, {
          id: '003',
          imgsrc: 'http://img1.qunarzz.com/piao/fusion/1808/5e/514ce60160e62602.jpg_750x200_9b0074e2.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// .wrapper >>> .swiper-pagination-bullet-active 穿透下面.swiper-pagination-bullet-active改变样式
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    //宽高比例31.25%   或者31.25vw 但是兼容不好
    .swiper-img
      width 100%
</style>
