import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Invite from '../views/Invite.vue'
import NotFound from '../views/NotFound.vue'
import More from '../views/More.vue'
import Coming from '../views/Coming.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // {
    //   path: '/invite/:id',
    //   name: 'invite',
    //   component: Invite
    // },
    // {
    //   path: '/more',
    //   name: 'more',
    //   component: More
    // },
    // {
    //   path: '/whoiscoming',
    //   name: 'coming',
    //   component: Coming
    // }
  ]
})

export default router
