<script setup>
import { experiences } from '@/data/experience'
import portraitUrl from '@/assets/images/portfolio/cx-potrait.webp'
import PageLayout from '@/components/PageLayout.vue'
import { useReveal } from '@/composables/useReveal'

useReveal()
</script>

<template>
  <PageLayout
    title="About"
    subtitle="Full stack developer building web and mobile products — with a love for matcha and photography."
  >
    <div class="row flex-column flex-md-row about">
      <div id="left-content" class="col-md-4 col-sm-12 left-content">
        <div class="single-about-img reveal">
          <img class="rounded portrait-ring" alt="Cx's LinkedIn Profile Picture" :src="portraitUrl" width="200" />
        </div>
        <div class="d-flex justify-content-center mb-3 reveal">
          <div class="title text-md-start">
            <h5 class="mb-1">Hew Chin Xin</h5>
            <h6 class="mb-1">Full Stack Developer</h6>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/chin-xin-hew-a48601197/" target="_blank" rel="noopener">
                <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
              </a>
              <a href="https://github.com/h-chinxin" target="_blank" rel="noopener">
                <font-awesome-icon icon="fa-brands fa-github-square" size="xl" />
              </a>
              <a href="mailto:hewchinxin@gmail.com">
                <font-awesome-icon icon="fa-solid fa-envelope" size="xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="right-content" class="col-md-8 col-sm-12 right-content">
        <section class="aboutMe">
          <div class="section-heading">
            <h2>about me</h2>
          </div>
          <div class="aboutMe-txt reveal">
            <p class="mb-4">
              Hey, it's great to meet you! I'm a full stack developer with over 3 years of hands-on
              experience delivering production web and mobile systems end to end. I collaborate
              effectively with cross-functional teams, turning requirements into reliable software
              through Vue.js frontends, REST API backends, and Docker-based deployment workflows.
              I also build structured system integrations — from ISO 20022 XML payment files and
              webhook callbacks to production debugging and incident resolution.
              <br /><br />
              When I'm not immersed in code, I'm savoring a good cup of matcha, finding inspiration in
              its simplicity and warmth. I also love capturing the world's beauty through my camera,
              transforming everyday moments into compelling visual stories. I'm passionate about
              continuous learning and building dynamic applications through a blend of technology and
              creativity.
            </p>
          </div>
        </section>
        <section class="experience mb-3" id="experience">
          <div class="section-heading">
            <h2 class="mb-3">experience</h2>
          </div>
          <div class="experience-timeline">
            <article
              v-for="job in experiences"
              :key="job.id"
              :id="job.id"
              class="timeline-item reveal"
            >
              <div class="timeline-marker"></div>
              <div class="card experience-card">
                <div class="card-body">
                  <div class="card-title mb-0">
                    <img :src="job.logo" :alt="job.logoAlt" :width="job.logoWidth" />
                  </div>
                  <span class="card-subtitle text-muted off-loc">{{ job.location }}</span>
                  <div
                    v-for="(role, index) in job.roles"
                    :key="role.title"
                    class="card-text d-flex flex-column mt-2 pt-2"
                    :class="{ 'role-divider': index > 0 }"
                  >
                    <span class="job-title">{{ role.title }}</span>
                    <span class="job-date">{{ role.date }}</span>
                    <p class="job-desc m-0 my-2">
                      <template v-for="(bullet, bulletIndex) in role.bullets" :key="bullet">
                        <span v-if="bulletIndex > 0"><br /></span>
                        &bull; {{ bullet }}
                      </template>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="education" class="education">
          <div class="section-heading">
            <h2 class="mb-3">education</h2>
          </div>
          <div class="d-flex flex-column gap-3">
            <div id="tarumt" class="card education-card reveal">
              <div class="card-body">
                <h5 class="card-title">Tunku Abdul Rahman University of Management and Technology</h5>
                <div class="edu-detail d-flex flex-column pb-2">
                  <span class="edu-title">Bachelor Of Information Technology (Honours) In Internet Technology</span>
                  <span class="edu-desc text-muted">June 2020 — July 2022 | CGPA: 3.68</span>
                </div>
                <div class="edu-detail d-flex flex-column pb-2">
                  <span class="edu-title">Diploma in Science (Internet Technology)</span>
                  <span class="edu-desc text-muted">May 2018 — May 2020 | CGPA: 3.61</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </PageLayout>
</template>
