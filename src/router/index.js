import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Full Stack Developer Portfolio | Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'Full Stack Developer Portfolio | About'
      }
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
      meta: {
        title: 'Full Stack Developer Portfolio | Skills'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Full Stack Developer Portfolio | Projects'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Full Stack Developer Portfolio | Contact Me'
      }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  const { title } = to.meta
  const defaultTitle = 'Full Stack Developer Portfolio'

  document.title = title || defaultTitle
})

export default router
