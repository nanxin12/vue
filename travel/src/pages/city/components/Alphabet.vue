<template>
  <div>
    <ul class="list">
      <li
        class="item"
        v-for="item in Letter"
        :key="item"
        @click="getinner"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    getCity2: {}
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    getinner (e) {
      this.$emit('getinner', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    }
  },
  // 计算属性
  computed: {
    // Letter 返回一个citys 的数组
    Letter () {
      const citys = []
      for (let i in this.getCity2.cities) {
        citys.push(i)
      }
      return citys
    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.54rem;

  .item {
    text-align: center;
    color: $bgColor;
    margin-top: 5px;
  }
}
</style>
