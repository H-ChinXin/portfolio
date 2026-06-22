<script setup>
import { skillCategories } from '@/data/skills'
</script>

<template>
  <div>
    <div class="skills">
      <div class="section-heading px-2">
        <h2>Skills</h2>
        <p class="section-intro">
          Technologies I use across frontend, backend, data, and deployment workflows.
        </p>
      </div>
      <section
        v-for="category in skillCategories"
        :key="category.id"
        :id="category.id"
        class="skill-category px-2"
      >
        <h3 class="skill-category-title">{{ category.title }}</h3>
        <div class="skill-chips d-flex flex-wrap gap-2">
          <span v-for="skill in category.skills" :key="skill" class="skill-chip">{{ skill }}</span>
        </div>
      </section>
    </div>
    <div class="skills-footer p-2 text-center">
      <p class="copyright m-0">Copyright &copy; 2026 Hew Chin Xin. All Rights Reserved</p>
    </div>
  </div>
</template>
