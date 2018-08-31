<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperlist" :key="item.id">
        <img class="swiper-img" :src="item.imgsrc" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> 上按钮
    <div class="swiper-button-next" slot="button-next"></div>  下按钮
    <div class="swiper-scrollbar"   slot="scrollbar"></div>  滚动条-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperlist: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 1000,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperlist.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.7%;

  // 宽高比例31.25%   或者31.25vw 但是兼容不好
  .swiper-img {
    width: 100%;
  }
}
</style>
