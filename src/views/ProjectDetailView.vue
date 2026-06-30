<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getProjectById } from '@/data/projects'
import PageLayout from '@/components/PageLayout.vue'
import { useReveal } from '@/composables/useReveal'

const route = useRoute()
const project = computed(() => getProjectById(route.params.id))

useReveal()
</script>

<template>
  <PageLayout v-if="project" :show-hero="false">
    <article class="project-detail">
      <RouterLink class="project-detail__back" :to="{ name: 'projects' }">
        <font-awesome-icon icon="fa-solid fa-arrow-left" /> Back to projects
      </RouterLink>

      <header class="project-detail__hero reveal">
        <div
          class="project-detail__image"
          :class="{ 'project-detail__image--screenshot': project.imageType === 'screenshot' }"
        >
          <img :src="project.image" :alt="project.imageAlt" />
        </div>
        <div class="project-detail__meta">
          <p class="project-detail__company">{{ project.company }}</p>
          <h1 class="project-detail__title">{{ project.title }}</h1>
          <p v-if="project.role" class="project-detail__role">{{ project.role }}</p>
          <div class="project-tags d-flex flex-wrap gap-2 mt-3">
            <span v-for="tag in project.tags" :key="tag" class="skill-chip">{{ tag }}</span>
          </div>
          <a
            v-if="project.url"
            :href="project.url"
            class="btn-primary-custom mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >View live project</a>
        </div>
      </header>

      <section v-if="project.problem" class="project-detail__section reveal">
        <h2>Problem</h2>
        <p>{{ project.problem }}</p>
      </section>

      <section v-if="project.solution" class="project-detail__section reveal">
        <h2>Solution</h2>
        <p>{{ project.solution }}</p>
      </section>

      <section v-if="project.outcome" class="project-detail__section reveal">
        <h2>Outcome</h2>
        <p>{{ project.outcome }}</p>
      </section>

      <section class="project-detail__section reveal">
        <h2>Overview</h2>
        <p>{{ project.description }}</p>
      </section>
    </article>
  </PageLayout>

  <PageLayout v-else title="Project not found" subtitle="This project does not exist.">
    <div class="text-center py-5">
      <RouterLink class="btn-primary-custom" :to="{ name: 'projects' }">View all projects</RouterLink>
    </div>
  </PageLayout>
</template>
