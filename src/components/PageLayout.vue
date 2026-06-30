<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  showHero: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="page-layout">
    <header v-if="showHero && (title || $slots.hero)" class="page-hero">
      <div class="page-hero__content container-fluid px-4">
        <slot name="hero">
          <h1 class="page-hero__title">{{ title }}</h1>
          <p v-if="subtitle" class="page-hero__intro">{{ subtitle }}</p>
        </slot>
      </div>
    </header>
    <main class="page-content">
      <slot />
    </main>
    <footer class="site-footer">
      <p class="copyright m-0">Copyright &copy; 2026 Hew Chin Xin. All Rights Reserved</p>
    </footer>
  </div>
</template>
