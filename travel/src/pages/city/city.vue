<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
    <citylist></citylist>
    <alphabet></alphabet>
  </div>
</template>

<script>
import Cityheader from './components/Cityheader'
import Citysearch from './components/search'
import Citylist from './components/List'
import Alphabet from './components/Alphabet'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  // 注册子组件
  components: {
    Cityheader,
    Citysearch,
    Citylist,
    Alphabet
  }
}
</script>

<style scoped>
</style>
