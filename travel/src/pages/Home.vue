<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperlist="swiperlist"></home-swiper>
    <icons :icons="icons"></icons>
    <recommend :remcommend="remcommend"></recommend>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=3qkFf2G2rUbWKsNYmc2dDvL7"></script>
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
      remcommend: [],
      weekendList: []
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
    this.getCity()
  },
  methods: {
    getHomeInfo () {
      Axios.get('../../static/axios/index.json').then(this.axiosSucc)
    },
    axiosSucc (res) {
      const data = res.data.data
      this.icons = data.iconList
      this.swiperlist = data.swiperList
      this.remcommend = data.recommendList
      this.weekendList = data.weekendList
    },
    getCity () {
      // localStorage.removeItem('hotCiyt') 删除localStorage里的存的某个数据
      let noCity = () => {
        alert(1)
        let myFun = (result) => {
          this.city = result.name
          this.$store.dispatch('changeCity', this.city) // 出发actions里的事件 用dispatch方法
          sessionStorage.setItem('hotCity', this.city)
        }
        let myCity = new BMap.LocalCity()
        myCity.get(myFun)
      }
      let haveCity = () => {
        this.city = sessionStorage.getItem('hotCity')
        this.$store.dispatch('changeCity', this.city)
      }
      sessionStorage.getItem('hotCity') ? haveCity() : noCity()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
