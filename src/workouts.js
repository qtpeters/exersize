
import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store.js'
import Landing from './components/landing.vue'
import axios from 'axios'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.css'
import './vendor/font-awesome/4.7.0/css/font-awesome.css'
import './vendor/font-awesome/4.7.0/fonts/fontawesome-webfont.svg'
import './vendor/font-awesome/4.7.0/fonts/fontawesome-webfont.eot'
import './vendor/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf'
import './vendor/font-awesome/4.7.0/fonts/fontawesome-webfont.woff'
import './vendor/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2'
import './vendor/font-awesome/4.7.0/fonts/FontAwesome.otf'

Vue.use( VueRouter )

Vue.use( VueMaterial )
Vue.material.registerTheme('default', {
  primary: 'purple',
  accent: 'red',
  warn: 'red',
  background: 'grey'
})

new Vue({
  el: '#workouts',
  store: Store,
  router: new VueRouter({
    routes: [{
      path: '/',
      component: Landing
    }]
  })
});
