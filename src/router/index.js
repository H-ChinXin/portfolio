import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Full Stack Developer Portfolio | Home',
        // transition: 'slide-right'
      }
    },
    {
      path: '/#about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'Full Stack Developer Portfolio | About',
        // transition: 'slide-left'
      }
    },
    {
      path: '/#skills',
      name: 'skills',
      component: SkillsView,
      meta: {
        title: 'Full Stack Developer Portfolio | Skills',
        // transition: 'slide-right'
      }
    },
    {
      path: '/#contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Full Stack Developer Portfolio | Contact Me',
        // transition: 'slide-left'
      }
    }
  ]
})

router.beforeEach((to) => {
  const { title } = to.meta
  const defaultTitle = 'Full Stack Developer Portfolio'

  document.title = title || defaultTitle
})

export default router
