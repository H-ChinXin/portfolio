<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  imageType: {
    type: String,
    default: 'logo',
    validator: (value) => ['logo', 'screenshot'].includes(value)
  },
  url: {
    type: String,
    default: null
  },
  featured: {
    type: Boolean,
    default: false
  },
  hasDetail: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article class="card project-card h-100 reveal">
    <RouterLink
      v-if="hasDetail"
      :to="{ name: 'project-detail', params: { id } }"
      class="project-card-link"
    >
      <div class="project-card-image" :class="{ 'project-card-image--screenshot': imageType === 'screenshot' }">
        <img :src="image" :alt="imageAlt" :class="{ 'project-screenshot': imageType === 'screenshot' }" />
      </div>
    </RouterLink>
    <div v-else class="project-card-image" :class="{ 'project-card-image--screenshot': imageType === 'screenshot' }">
      <img :src="image" :alt="imageAlt" :class="{ 'project-screenshot': imageType === 'screenshot' }" />
    </div>
    <div class="card-body d-flex flex-column">
      <p class="project-company text-muted mb-1">{{ company }}</p>
      <h3 class="project-title">
        <RouterLink
          v-if="hasDetail"
          :to="{ name: 'project-detail', params: { id } }"
          class="project-title-link"
        >{{ title }}</RouterLink>
        <a
          v-else-if="url"
          :href="url"
          class="project-title-link"
          target="_blank"
          rel="noopener noreferrer"
        >{{ title }}</a>
        <template v-else>{{ title }}</template>
      </h3>
      <p class="project-description flex-grow-1">{{ description }}</p>
      <div class="project-tags d-flex flex-wrap gap-2">
        <span v-for="tag in tags" :key="tag" class="skill-chip">{{ tag }}</span>
      </div>
      <RouterLink
        v-if="hasDetail"
        :to="{ name: 'project-detail', params: { id } }"
        class="project-read-more"
      >Read case study →</RouterLink>
    </div>
  </article>
</template>
