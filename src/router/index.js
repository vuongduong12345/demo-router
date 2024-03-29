import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/Hello',
            name:'Hello',
            component: Hello
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        }
    ]
})