<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link :to="{ path: '/city'}">
      <div class="header-right">{{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
// scoped样式只在本页面管用  lang="stylus" 引入stylus样式书写css
// @import '../../../assets/styles/varibles.styl'
// 在这里引入需要加在@前加~
@import '~@/assets/styles/varibles.styl';

.header {
  display: flex;
  background: $bgColor;
  height: $height;
  color: #fff;
  line-height: $height;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    background: #fff;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    color: #ccc;
    line-height: 0.64rem;
    padding-left: 0.2rem;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    color #fff

    .arrow-icon {
      margin-left: 0.1rem;
      font-size: 0.24rem;
    }
  }
}
</style>
