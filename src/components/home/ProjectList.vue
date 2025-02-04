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
          >Demo</a
        >
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
  margin: 7rem 0;
}
.projects-section__title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
}
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.25rem;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  @media(max-width: 500) {
    grid-template-columns: 1fr;
  }
}
.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background-color: var(--color-gray);;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  height: 100%;
  text-align: start;
  color: var(--color-text);
}
.project-card__title {
  font-size: 1.75rem;
  line-height: 1.3;
  font-weight: 600;
}
.project-card__desc {
  font-size: 1rem;
  line-height: 1.5;
  flex: 1;
}
.project-card__stack {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}
.project-card__link {
  width: min-content;
  padding: 5px 5px 5px 0;
}
</style>
