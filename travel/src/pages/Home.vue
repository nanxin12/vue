<template>
  <div>
    <home-header/>
    <home-swiper/>
  </div>
</template>

<script>
import HomeHeader from './home/components/Header'
import HomeSwiper from './home/components/Swiper'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
