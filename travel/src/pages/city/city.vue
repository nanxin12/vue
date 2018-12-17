<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
    <citylist :getCity1='getCity' :listinner='listinner'></citylist>
    <alphabet :getCity2='getCity' @getinner="getinner"></alphabet>
  </div>
</template>
<script>
import Cityheader from './components/Cityheader'
import Citysearch from './components/search'
import Citylist from './components/List'
import Alphabet from './components/Alphabet'
import Axios from 'axios'
export default {
  props: {
  },
  data () {
    return {
      getCity: {},
      listinner: ''
    }
  },
  methods: {
    // 定义两个写axios的函数 要return出去
    // geta () {
    //   return Axios({
    //     url: '/api/city.json',
    //     method: 'get',
    //     data: {
    //       name: '111'
    //     }
    //   })
    // },
    // getb () {
    //   return Axios({
    //     url: '/api/index.json',
    //     method: 'get',
    //     data: {
    //       name: '111'
    //     }
    //   })
    // }
    getinner (e) {
      this.listinner = e
    }
  },
  // 注册子组件
  components: {
    Cityheader,
    Citysearch,
    Citylist,
    Alphabet
  },
  mounted () {
    Axios({
      url: '/api/city.json',
      method: 'get',
      // get 在 params 里写传输的数据
      // post 正在 data 里写传输的数据
      params: {
        name: '111'
      }
    }).then(response => {
      this.getCity = response.data.data
    })
    // Axios.all 发送多个请求
    // Axios.all([this.geta(), this.getb()]).then(Axios.spread((acct, perms) => {
    //   console.log(acct)
    //   console.log(perms)
    // }))
  }
}
</script>

<style scoped>
</style>
