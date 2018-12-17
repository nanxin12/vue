<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button">{{this.$store.state.hotCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrap" v-for="(item, index) in this.getCity1.hotCities" :key="index">
            <div class="button" @click='cityClick(item.name)'>{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key ,index) in this.getCity1.cities" :key="index" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="(inner, index) in item" :key="index" @click='cityClick(inner.name)'>{{inner.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入better-scroll 插件来实现滚动效果
import Bscroll from 'better-scroll'
export default {
  props: {
    getCity1: {
      type: Object,
      default: function () {
        return {}
      }
    },
    listinner: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods: {
    cityClick (city) {
      this.$store.dispatch('changeCity', city) // 出发actions里的事件 用dispatch方法
      sessionStorage.setItem('hotCity', city)
      this.$router.push('/')
    }
  },
  components: {

  },
  mounted () {
    // this.$refs.wrapper获取到最外层的dom  ref可以用来获取dom元素
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  // watch 监听
  watch: {
    // 当数值改变的时候触发 定义格式 listinner () {}
    listinner () {
      if (this.listinner) {
        const el = this.$refs[this.listinner][0]
        this.scroll.scrollToElement(el, 500, false, false)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  bottom: 0;
  right: 0;
}

.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;

  .button-wrap {
    width: 33.33%;
    float: left;

    .button {
      text-align: center;
      margin: 0.1rem;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
}

.item-list {
  .item {
    line-height: 0.76rem;
    color: #666;
    padding-left: 0.2rem;
  }
}
</style>
