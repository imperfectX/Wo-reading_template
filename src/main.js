// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vant ui
import Vant from '../node_modules/vant'; 
import '../node_modules/vant/lib/index.css'; 
// 引入rem
import './js/rem'

import axios from "../node_modules/axios"; 
Vue.prototype.$http = axios;


// 按需添加
import {Button, Swipe, SwipeItem, Icon, Tabbar, TabbarItem, NavBar, Tab, Tabs, RadioGroup, Radio  }from 'vant'; 
Vue.use(Vant).use(Button).use(Swipe).use(SwipeItem).use(Icon).use(Tabbar).use(TabbarItem).use(NavBar).use(Tab).use(Tabs).use(RadioGroup).use(Radio); 



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue( {
el:'#app', 
router, 
components: {App }, 
template:'<App/>'
})
