import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import UserCreate from './components/UserCreate'
import UserMove from './components/UserMove'
import UserAuth from './components/UserAuth'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/balance/:username',
            name: "user_balance",
            component: UserBalance
        },
        {
            path: '/createuser/',
            name: "UserCreate",
            component : UserCreate
        },
        {
            path: '/user/auth/',
            name: "UserAuth",
            component : UserAuth
        },
        {
            path: '/user/recarga/',
            name: "UserMove",
            component : UserMove
        }
    ]
})
export default router