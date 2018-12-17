<template>
  <div class="icons">
     <swiper :options="swiperOption">
       <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon"  v-for="item in page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-center" :src="item.imgUrl" alt="">
            </div>
            <p class="icon-text">{{item.desc}}</p>
          </div>
       </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    icons: {
      type: Array
    }
  },
  data () {
    return {
      num: [],
      iconlist: [
        {
          iconimg: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          icontext: '景点文化',
          id: '001'
        }, {
          iconimg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          icontext: '一日游',
          id: '002'
        }, {
          iconimg: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          icontext: '景点文化',
          id: '003'
        }, {
          iconimg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          icontext: '一日游',
          id: '004'
        }, {
          iconimg: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          icontext: '景点文化',
          id: '005'
        }, {
          iconimg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          icontext: '一日游',
          id: '006'
        }, {
          iconimg: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          icontext: '景点文化',
          id: '007'
        }, {
          iconimg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          icontext: '一日游',
          id: '008'
        }, {
          iconimg: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          icontext: '景点文化',
          id: '009'
        }, {
          iconimg: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          icontext: '一日游',
          id: '010'
        }
      ],
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  watch: {
    num (x, y) {
      this.num = this.icons
      console.log(this.num)
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';
  .icons
    height 0
    padding-bottom 50%
    .icon
      float left
      height 0
      width 25%
      padding-bottom 25%
      overflow hidden
      position relative
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        padding-top: 0.1rem;
        .icon-img-center
          height: 1.1rem;
          display: block;
          margin: 0 auto;
          width: 1.1rem;
      .icon-text
        position absolute
        left 0
        right 0
        bottom 0.2rem
        height 0.44rem
        line-height 0.44rem
        color  #333
        text-align center
        //封装css样式到mixins.styl 里 用ellipsis()调用
        ellipsis()

</style>
