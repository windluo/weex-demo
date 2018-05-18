/*global Vue*/
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // }
  ]
})
