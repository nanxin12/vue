<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
    <citylist></citylist>
  </div>
</template>

<script>
import Cityheader from './components/Cityheader'
import Citysearch from './components/search'
import Citylist from './components/List'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    Cityheader,
    Citysearch,
    Citylist
  }
}
</script>

<style scoped>
</style>
