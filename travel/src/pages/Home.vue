<template>
  <div>
    <home-header/>
    <home-swiper/>
    <icons/>
  </div>
</template>

<script>
import HomeHeader from './home/components/Header'
import HomeSwiper from './home/components/Swiper'
import Icons from './home/components/Icons'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    Icons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
