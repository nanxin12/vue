<template>
  <div>
    <home-header/>
  </div>
</template>

<script>
import HomeHeader from './home/components/Header'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
