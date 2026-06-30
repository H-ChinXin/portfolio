<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true,
    validator: (value) => value >= 1 && value <= 5
  }
})
</script>

<template>
  <article class="skill-card reveal">
    <div class="skill-card__header">
      <font-awesome-icon :icon="icon" class="skill-card__icon" />
      <span class="skill-card__name">{{ name }}</span>
    </div>
    <div class="skill-card__bar" role="presentation">
      <div class="skill-card__fill" :style="{ '--fill-width': `${level * 20}%` }"></div>
    </div>
  </article>
</template>
