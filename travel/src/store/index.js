import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  // 在页面里用 this.$store.dispatch('actions里的事件名字', 传输的数据)
  // 在state里定义公共数据
  state,
  // actions里面的事件调用mutations里的事件 用commit调用
  actions,
  // mutations里面的事件 更改state里的数据
  mutations
})
