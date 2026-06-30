<script setup>
import portraitUrl from '@/assets/images/portfolio/cx-potrait.webp'

const profileUrl = 'https://www.linkedin.com/in/chin-xin-hew-a48601197/'
</script>

<template>
  <a
    class="linkedin-profile-card"
    :href="profileUrl"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="linkedin-profile-card__header">
      <font-awesome-icon icon="fa-brands fa-linkedin" class="linkedin-profile-card__logo" />
      <span>LinkedIn</span>
    </div>
    <div class="linkedin-profile-card__body">
      <img
        class="linkedin-profile-card__photo"
        :src="portraitUrl"
        alt="Chin Xin Hew"
        width="72"
        height="72"
      />
      <p class="linkedin-profile-card__name">Chin Xin Hew</p>
      <span class="linkedin-profile-card__cta">View profile</span>
    </div>
  </a>
</template>
