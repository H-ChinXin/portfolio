<script setup>
import { RouterLink, RouterView } from 'vue-router'

const collapseMenu = () => {
  const navbarCollapse = document.getElementsByClassName('navbar-collapse')
  navbarCollapse[0].classList.remove('show')

  const burgerMenu = document.getElementsByClassName('navbar-toggler')
  burgerMenu[0].setAttribute('aria-expanded', false)
  burgerMenu[0].classList.add('collapsed')
}
</script>

<template>
  <header class="sticky-top shadow-sm bg-white">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <RouterLink class="navbar-brand mx-3" aria-current="page" :to="{name: 'home'}"
          ><img height="26" alt="Chin Xin's WordmarkdLogo" :src="require('@/assets/images/portfolio/cx-wordmark-logo.png')"
        /></RouterLink>
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
        <div class="collapse navbar-collapse bg-white justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <RouterLink class="nav-link" aria-current="page" :to="{name: 'about'}"  @click="collapseMenu"
              >About</RouterLink
            >
            <RouterLink class="nav-link" aria-current="page" :to="{name: 'skills'}" @click="collapseMenu"
              >Skills</RouterLink
            >
            <RouterLink class="nav-link" aria-current="page" :to="{name: 'contact'}" @click="collapseMenu"
              >Contact</RouterLink
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
  <router-view v-slot="{ Component, route }">
    <!-- <transition :name="route.meta.transition || 'fade'" mode="out-in"> -->
      <component :is="Component"></component>
    <!-- </transition> -->
  </router-view>
</template>