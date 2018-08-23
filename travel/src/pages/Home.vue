<template>
  <div>
    <home-header/>
    <home-swiper/>
    <icons/>
    <recommend/>
    <weekend/>
  </div>
</template>

<script>
import HomeHeader from './home/components/Header'
import HomeSwiper from './home/components/Swiper'
import Icons from './home/components/Icons'
import Recommend from './home/components/Recommend'
import Weekend from './home/components/Weekend'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    Recommend,
    Weekend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
