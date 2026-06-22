<script setup>
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
  }
})
</script>

<template>
  <article class="card project-card h-100">
    <div class="project-card-image" :class="{ 'project-card-image--screenshot': imageType === 'screenshot' }">
      <img :src="image" :alt="imageAlt" :class="{ 'project-screenshot': imageType === 'screenshot' }" />
    </div>
    <div class="card-body d-flex flex-column">
      <p class="project-company text-muted mb-1">{{ company }}</p>
      <h3 class="project-title">
        <a
          v-if="url"
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
    </div>
  </article>
</template>
