<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import wordmarkLogo from '@/assets/images/portfolio/cx-wordmark-logo.png'
import wordmarkLogoWhite from '@/assets/images/portfolio/cx-wordmark-logo-white.png'

const route = useRoute()
const { theme, toggleTheme } = useTheme()

const logoSrc = computed(() => (theme.value === 'dark' ? wordmarkLogoWhite : wordmarkLogo))

const isScrolled = ref(false)
const scrollProgress = ref(0)

const collapseMenu = () => {
  const navbarCollapse = document.getElementsByClassName('navbar-collapse')
  navbarCollapse[0]?.classList.remove('show')

  const burgerMenu = document.getElementsByClassName('navbar-toggler')
  burgerMenu[0]?.setAttribute('aria-expanded', false)
  burgerMenu[0]?.classList.add('collapsed')
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 8
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="site-header sticky-top" :class="{ 'site-header--scrolled': isScrolled }">
    <div class="scroll-progress" :style="{ width: `${scrollProgress}%` }" aria-hidden="true"></div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <RouterLink
          class="navbar-brand mx-3"
          :class="{ active: route.name === 'home' }"
          aria-current="page"
          :to="{ name: 'home' }"
        >
          <img
            height="26"
            alt="Chin Xin's Wordmark Logo"
            :src="logoSrc"
          />
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav align-items-lg-center">
            <RouterLink
              class="nav-link"
              :class="{ active: route.name === 'about' }"
              :to="{ name: 'about' }"
              @click="collapseMenu"
            >About</RouterLink>
            <RouterLink
              class="nav-link"
              :class="{ active: route.name === 'projects' || route.name === 'project-detail' }"
              :to="{ name: 'projects' }"
              @click="collapseMenu"
            >Projects</RouterLink>
            <RouterLink
              class="nav-link"
              :class="{ active: route.name === 'skills' }"
              :to="{ name: 'skills' }"
              @click="collapseMenu"
            >Skills</RouterLink>
            <RouterLink
              class="nav-link"
              :class="{ active: route.name === 'contact' }"
              :to="{ name: 'contact' }"
              @click="collapseMenu"
            >Contact</RouterLink>
            <button
              type="button"
              class="theme-toggle nav-link"
              :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="toggleTheme"
            >
              <font-awesome-icon :icon="theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
