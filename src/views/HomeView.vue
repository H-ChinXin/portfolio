<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import resumeUrl from '@/assets/resume/Hew_Chin_Xin-Software_Developer-Resume.pdf'

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate
  this.el = el
  this.loopNum = 0
  this.period = parseInt(period, 10) || 2000
  this.txt = ''
  this.tick()
  this.isDeleting = false
}

const introSentences = ref([
  'Full Stack Developer',
  'Vue.js · REST APIs · Docker',
  'XML · Integrations · CI/CD'
])

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length
  var fullTxt = this.toRotate[i]

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1)
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

  var that = this
  var delta = 200 - Math.random() * 100

  if (this.isDeleting) {
    delta /= 2
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period
    this.isDeleting = true
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false
    this.loopNum++
    delta = 500
  }

  setTimeout(function () {
    that.tick()
  }, delta)
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var elements = document.getElementsByClassName('typewrite')

  if (!prefersReducedMotion) {
    for (var i = 0; i < elements.length; i++) {
      var toRotate = introSentences.value
      var period = 2000
      if (toRotate) {
        new TxtType(elements[i], toRotate, period)
      }
    }

    var css = document.createElement('style')
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}'
    document.body.appendChild(css)
  } else if (elements[0]) {
    elements[0].innerHTML = '<span class="wrap">' + introSentences.value[0] + '</span>'
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
            <span class="wrap"></span>
          </div>
          <p class="intro-subline">3+ years building web and mobile products for cross-functional teams.</p>
          <div class="hero-actions mt-4 d-flex flex-wrap gap-3">
            <RouterLink class="button-55" aria-current="page" :to="{ name: 'projects' }">View Projects</RouterLink>
            <RouterLink class="button-55 button-55-outline" aria-current="page" :to="{ name: 'about' }">Learn More</RouterLink>
            <a
              class="button-55 button-55-outline"
              :href="resumeUrl"
              type="application/pdf"
              target="_blank"
              download="Hew_Chin_Xin-Software_Developer-Resume.pdf"
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

<style></style>
