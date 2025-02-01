<template>
  <section class="skills-section">
    <h2 class="skills-section__title">Skills</h2>
    <ul class="skills-list">
      <li v-for="skill in skills" :key="skill.title" class="skill-card">
        <h3 class="skill-card__title">{{ skill.title }}</h3>
        <p class="skill-card__item" v-for="tech in skill.techs" :key="tech">
          {{ tech }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        {
          title: 'Frontend',
          techs: [
            'Vue.js ecosystem (Vuex, Vue Router, Composition API)',
            'Nuxt 3, Vite',
            'TypeScript',
            'JavaScript',
            'Tailwind, SCSS',
            'BEM, SOLID, OOP',
          ],
        },
        {
          title: 'Backend',
          techs: [
            'Go (Gin, gRPC, Protocol Buffers)',
            'GORM',
            'PostgreSQL, MySQL',
            'MongoDB',
            'Redis',
            'REST API',
            'Swagger/OpenAPI',
          ],
        },
        {
          title: 'Additional Skills',
          techs: [
            'Internationalization (i18n)',
            'Performance optimization',
            'API integration expertise',
            'English (B2 level)',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  margin: 4.375rem 0;
}

.skills-section__title {
  font-size: 3rem;
  color: var(--color-black);
  line-height: 1.5;
  align-self: start;
  padding-left: 20px;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.skill-card {
  padding: 1rem;
  text-align: start;
}
.skill-card__title {
  font-size: 1.75rem;
  line-height: 1.5;
  font-weight: 500;
}
.skill-card__item {
  list-style: outside;
  color: var(--color-black);
  font-size: 1.25rem;
  line-height: 1.5;
}
</style>
