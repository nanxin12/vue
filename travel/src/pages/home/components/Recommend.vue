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
        <button class="item-button">查看详情</button>
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
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      display block
      padding 0.1rem
    .item-info
      flex 1
      min-width 0
      .item-title
        line-height 0.74rem
        font-style 0.32rem
        ellipsis()
      .item-desc
        line-height 0.4rem
        color #ccc
        ellipsis()
      .item-button
        line-height 0.44rem
        margin-top .1rem
        background #ff9300
        padding 0 0.2rem
        border-radius .06rem
        border none
        color #ffffff
</style>
