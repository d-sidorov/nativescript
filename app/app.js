import Vue from 'nativescript-vue'
import store from './store/index'

// require('@nativescript/local-notifications')
import { DeviceInfo } from "nativescript-dna-deviceinfo";

Vue.prototype.$device = DeviceInfo;

import App from './components/App'

new Vue({
  store,
  render: (h) => h('frame', [h(App)]),
}).$start()
