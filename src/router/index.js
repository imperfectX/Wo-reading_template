import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Me from '@/components/Me'

import Receive from '@/components/homelist/Receive'
import Class from '@/components/homelist/Class'


import Login from '@/components/melist/Login'
import Opening from '@/components/melist/Opening'
import Message from '@/components/melist/Message'
import Help from '@/components/melist/Help'
import Myvip from '@/components/melist/Myvip'
import Collection from '@/components/melist/Collection'
import Order from '@/components/melist/Order'
import Detail from '@/components/melist/Detail'

import Ha from '@/components/leb/Ha'








Vue.use(Router)

export default new Router( {
routes:[ {
path:'/', 
name:'Home', 
component:Home, meta: {
// 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
index:0, 
showFooter:true
}},  {
path:'/Home/Receive', 
name:'Receive', 
component:Receive
}, ,  {
path:'/Home/Class', 
name:'Class', 
component:Class
    },  {
path:'/me', 
name:'Me', 
component:Me, meta: {
// 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
index:0, 
showFooter:true
}
},  {
path:'/me/login', 
name:'Login', 
component:Login
 },  {
path:'/me/Opening', 
name:'Opening', 
component:Opening
},  {
path:'/me/Receive', 
name:'Receive', 
component:Receive
},  {
path:'/me/Message', 
name:'Message', 
component:Message
},  {
path:'/me/Help', 
name:'Help', 
component:Help
},  {
path:'/me/Myvip', 
name:'Myvip', 
component:Myvip
    },  {
path:'/me/Collection', 
name:'Collection', 
component:Collection
},  {
path:'/me/Order', 
name:'Order', 
component:Order
},  {
path:'/me/class/Detail', 
name:'Detail', 
component:Detail
    },  {
path:'/Ha', 
name:'Ha', 
component:Ha
            }
]
})
