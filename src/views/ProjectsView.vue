<script setup>
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <div class="d-flex flex-column">
    <div class="projects-page">
      <div class="section-heading px-2">
        <h2>Projects</h2>
        <p class="section-intro">
          Selected work spanning mobile apps, full-stack platforms, and enterprise data visualization.
        </p>
      </div>
      <div class="projects-grid px-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          v-bind="project"
        />
      </div>
    </div>
    <div class="projects-footer p-2 text-center">
      <p class="copyright m-0">Copyright &copy; 2026 Hew Chin Xin. All Rights Reserved</p>
    </div>
  </div>
</template>
