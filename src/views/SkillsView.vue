<script setup>
import { skillCategories } from '@/data/skills'
import SkillCard from '@/components/SkillCard.vue'
import PageLayout from '@/components/PageLayout.vue'
import { useReveal } from '@/composables/useReveal'

useReveal()
</script>

<template>
  <PageLayout
    title="Skills"
    subtitle="Technologies and practices I use across web, mobile, backend, and deployment workflows."
  >
    <section
      v-for="(category, index) in skillCategories"
      :key="category.id"
      :id="category.id"
      class="skill-category-section"
      :class="{ 'skill-category-section--alt': index % 2 === 1 }"
    >
      <h3 class="skill-category-title">{{ category.title }}</h3>
      <div class="skill-grid">
        <SkillCard
          v-for="skill in category.skills"
          :key="skill.name"
          :name="skill.name"
          :icon="skill.icon"
          :level="skill.level"
        />
      </div>
    </section>
  </PageLayout>
</template>
