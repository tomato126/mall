import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
//1.安装fastclick
//2.导入
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast/Toast'

Vue.config.productionTip = false
//添加事件总线对象
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)

//3.引用
//解决移动端300ms延迟
FastClick.attach(document.body)
//使用懒加载的插件
Vue.use(VueLazyLaod, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
