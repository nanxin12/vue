<template>
<div>
  <div class="recommend-title">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of remcommend" :key="item.id">
      <div class="item-img-wrap">
        <img class="item-img" :src="item.imgurl" alt="">
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      remcommend: [{
        id: '001',
        imgurl: 'http://img1.qunarzz.com/sight/p0/1709/3c/3cdce4296a3df57fa3.img.jpg_200x200_96983e81.jpg',
        title: '鄂尔多斯草原旅游区',
        desc: '123456789789456123'
      }, {
        id: '002',
        imgurl: 'http://img1.qunarzz.com/sight/p0/1709/3c/3cdce4296a3df57fa3.img.jpg_200x200_96983e81.jpg',
        title: '鄂尔多斯草原旅游区',
        desc: '123456789789456123'
      }, {
        id: '003',
        imgurl: 'http://img1.qunarzz.com/sight/p0/1709/3c/3cdce4296a3df57fa3.img.jpg_200x200_96983e81.jpg',
        title: '鄂尔多斯草原旅游区',
        desc: '123456789789456123'
      }, {
        id: '004',
        imgurl: 'http://img1.qunarzz.com/sight/p0/1709/3c/3cdce4296a3df57fa3.img.jpg_200x200_96983e81.jpg',
        title: '鄂尔多斯草原旅游区',
        desc: '123456789789456123'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .recommend-title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrap
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
      display block
  .item-info
    padding 0.1rem
    .item-title
      line-height 0.54rem
      font-style 0.32rem
      ellipsis()
    .item-desc
      line-height 0.25rem
      color #ccc
      padding-top 0.1rem;
      ellipsis()
</style>
