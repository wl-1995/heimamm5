import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/login/index'

Vue.use(VueRouter)

const router =new VueRouter({
    routes:[
        {
            path:'/login',
            component:login
        }
    ]
})

Vue.config.productionTip = false

export default router