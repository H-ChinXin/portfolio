<script setup>
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'
import PageLayout from '@/components/PageLayout.vue'
import { useReveal } from '@/composables/useReveal'

useReveal()
</script>

<template>
  <PageLayout
    title="Projects"
    subtitle="Selected work spanning mobile apps, full-stack platforms, and enterprise data visualization."
  >
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        v-bind="project"
        :class="{ 'project-card--featured': project.featured }"
      />
    </div>
  </PageLayout>
</template>
