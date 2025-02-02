<template>
  <section class="projects-section">
    <h2 class="projects-section__title">Projects</h2>
    <ul class="project-list">
      <li v-for="project in projects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <img :src="project.image" alt="Project image" />
        <a :href="project.github">GitHub</a>
        <a :href="project.demo">Demo</a>
      </li>
    </ul>
  </section>
  <!-- Project list template -->
</template>

<script >
import { Project } from '@/types';

export default {
  name: 'ProjectList',
  data() {
    return {
      projects: [
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
          title: 'Project 2',
          description: 'Description of the project and the technologies used',
          image: '/placeholder-2.jpg',
          stack: 'React, Tailwind, Zustand, TypeScript, Formik',
          demo: 'https://www.yepic.ai/',
        },
        {
          id: 3,
          title: 'Project 3',
          description: 'Description of the project and the technologies used',
          image: '/placeholder-3.jpg',
          github: '#',
          stack:
            'Vue, Nuxt, Vue-router, TypeScript, Tailwind, SCSS, i18n, Axios, Gitlab, Vitest, Vuex, Composition API',
          demo: 'https://www.basel.kz/',
        },
      ],
    };
  },
};
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
</style>
