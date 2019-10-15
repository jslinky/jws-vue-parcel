import Vue from 'vue';
import App from './App.vue';
import router from './router'

// resolveConfig helper you can use to generate a fully merged version of Tailwind configuration object
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)
// Assign tailwind config to Vue prototype
Vue.prototype.$siteVars = fullConfig

Vue.prototype.$extendObj = function (copyThis) {
  return Vue.util.extend({}, copyThis)
}
Vue.prototype.$stringObj = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')