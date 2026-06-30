<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import resumeUrl from '@/assets/resume/Hew_Chin_Xin-CV.pdf'
import { createTypewriter } from '@/utils/typewriter'

const introSentences = ref([
  'Full Stack Developer',
  'Vue.js · Laravel · REST APIs',
  'XML · Integrations · CI/CD',
  'Flutter · MongoDB · Docker'
])

const typewriterRef = ref(null)

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const el = typewriterRef.value

  if (!el) return

  if (!prefersReducedMotion) {
    createTypewriter(el, introSentences.value, 2000)
  } else {
    el.textContent = introSentences.value[0]
  }
})
</script>

<template>
  <div>
    <section id="home-body" class="home-body">
      <div class="row intro px-2">
        <div class="col col-md-12">
          <span class="intro-header">hi, i'm hew chin xin</span>
          <div class="intro-description typewrite">
            <span ref="typewriterRef" class="wrap typewrite-cursor"></span>
          </div>
          <p class="intro-subline">3+ years building web and mobile products for cross-functional teams.</p>
          <div class="hero-actions mt-4 d-flex flex-wrap gap-3">
            <RouterLink class="btn-primary-custom btn-primary-custom--hero" :to="{ name: 'projects' }">View Projects</RouterLink>
            <RouterLink class="btn-outline-custom btn-outline-custom--hero" :to="{ name: 'about' }">Learn More</RouterLink>
            <a
              class="btn-outline-custom btn-outline-custom--hero"
              :href="resumeUrl"
              type="application/pdf"
              target="_blank"
              download="Hew_Chin_Xin-CV.pdf"
            >Download Resume</a>
          </div>
        </div>
      </div>
      <div class="home-footer m-2">
        <p class="copyright m-0">Copyright &copy; 2026 Hew Chin Xin. All Rights Reserved</p>
      </div>
    </section>
  </div>
</template>
