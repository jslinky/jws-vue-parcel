import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from './views/Landing.vue'
import LibraryPage from './views/Library.vue'
import HomepageExample from './views/layout-examples/HomepageExample.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.base,
  routes:[ 
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/library',
      name: 'LibraryPage',
      component: LibraryPage
    },
    {
      path: '/homepage',
      name: 'HomepageExample',
      component: HomepageExample
    }    
  ]
})