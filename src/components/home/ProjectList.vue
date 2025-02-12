<template>
  <section class="projects-section">
    <h2 class="projects-section__title">Projects</h2>
    <ul class="project-list">
      <li v-for="project in projects" :key="project.id" class="project-card">
        <h3 class="project-card__title">{{ project.title }}</h3>
        <p class="project-card__desc">{{ project.description }}</p>
        <!-- <img :src="project.image" alt="Project image" /> -->
        <!-- <a :href="project.github">GitHub</a> -->
        <p class="project-card__stack">{{ project.stack }}</p>
        <a target="_blank" class="project-card__link" :href="project.demo"
          >Demo
          <img src="@/assets/icons/arrow.svg" alt="green arrow." loading="lazy"
        /></a>
      </li>
    </ul>
  </section>
  <!-- Project list template -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Project } from '../../types';

export default defineComponent({
  name: 'ProjectList',
  setup() {
    const projects = ref<Project[]>([
      {
        id: 1,
        title: 'Metrics-beats',
        description:
          'is an automated analytics platform that transforms complex Google Analytics data into clear reports and automatically delivers key metrics directly to Slack, helping marketing teams make data-driven decisions faster and more effectively.',
        image: '/placeholder-1.jpg',
        github: '#',
        stack:
          'Go, Echo, GORM, PostgreSQL, Google Analytics API, Slack API, OAuth2, Testify, Vue, Vuex, Vue-router.',
        demo: 'https://www.metricsbeat.com/',
      },
      {
        id: 2,
        title: 'Yepic.AI',
        description:
          ' is a platform that creates AI avatar videos and video chatbots capable of speaking in over 120 languages, combining facial recognition, emotion tracking, and GPT models to deliver lifelike interactive experiences. The platform offers a suite of tools including real-time Video Agents, Studio Express for quick videos, Studio Pro for professional content, and an API for scalable solutions, primarily serving industries like education, customer support, and health & fitness.',
        image: '/placeholder-2.jpg',
        stack: 'React, Tailwind, Zustand, TypeScript, Formik',
        demo: 'https://www.yepic.ai/',
      },
      {
        id: 3,
        title: 'Basel.kz',
        description:
          'is a digital insurance company in Kazakhstan that provides online insurance for cars, property, travel, and other assets. The company enables customers to purchase policies and handle insurance claims entirely online without visiting an office.',
        image: '/placeholder-3.jpg',
        github: '#',
        stack:
          'Vue, Nuxt, Vue-router, TypeScript, Tailwind, SCSS, i18n, Axios, Gitlab, Vitest, Vuex, Composition API',
        demo: 'https://www.basel.kz/',
      },
    ]);

    return { projects };
  },
});
</script>

<style scoped>
.projects-section {
  margin: 3.75rem 0 7rem;
  /* padding: 0 2rem; */
  @media(max-width: 768px) {
    margin: 2.5rem 0 4rem;
  }
}
.projects-section__title {
  margin-bottom: 5rem;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 3.75rem;
  line-height: 110%;
  color: var(--color-white-light);
  text-align: start;
  padding: 0 2rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
}
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  align-items: center;
  width: 100%;
  min-height: 30.12rem;
  row-gap: 2rem;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: start;
  color: var(--color-white-light);
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 132%;
  padding: 0 2rem;
  @media(max-width: 768px) {
    padding: 0 1rem;
  }
}
.project-card:not(:first-child) {
  border-left: 1px solid var(--color-white-light);
}
@media (max-width: 1200px) {
  .project-card:nth-child(3) {
    border-left: 0;
  }
}
@media (max-width: 800px) {
  .project-card:nth-child(2) {
    border-left: 0;
  }
}
.project-card__title {
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 110%;
  margin-bottom: 5rem;
  @media(max-width: 768px) {
    margin-bottom: 2rem;
  }
}
.project-card__desc {
  font-size: 1rem;
  line-height: 1.5;
  flex: 1;
  margin-bottom: 1.5rem;
}
.project-card__stack {
  margin-bottom: 1.5rem;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 132%;
  color: var(--color-gray);
}
.project-card__link {
  width: fit-content;
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 120%;
  color: var(--color-green);
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
