<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperlist="swiperlist"></home-swiper>
    <icons :icons="icons"></icons>
    <recommend :remcommend="remcommend"></recommend>
    <weekend :remcommend="remcommend"></weekend>
  </div>
</template>

<script>
import HomeHeader from './home/components/Header'
import HomeSwiper from './home/components/Swiper'
import Icons from './home/components/Icons'
import Recommend from './home/components/Recommend'
import Weekend from './home/components/Weekend'
import Axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      icons: [],
      city: '',
      swiperlist: [],
      remcommend: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    Recommend,
    Weekend
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      Axios.get('/api/index.json').then(this.axiosSucc)
    },
    axiosSucc (res) {
      const data = res.data
      this.city = data.city
      this.icons = data.iconlist
      this.swiperlist = data.swiperlist
      this.remcommend = data.remcommend
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
