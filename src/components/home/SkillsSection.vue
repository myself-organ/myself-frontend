<template>
  <section class="skills-section">
    <ul class="skills-list">
      <li v-for="skill in skills" :key="skill.title" class="skill-card">
        <p class="skill-card__title">{{ skill.title }}</p>
        <div class="skill-card__items">
          <template v-for="tech in skill.techs" :key="tech">
            <template v-if="Array.isArray(tech)">
              <p class="skill-card__item">
                {{ tech[0] }}
                <span class="skill-card__item--secondary">{{ tech[1] }}</span>
              </p>
            </template>

            <template v-else>
              <p class="skill-card__item">{{ tech }}</p>
            </template>
          </template>
        </div>
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
            ['Vue 2 / 3', '(Vuex, Vue Router, Composition API, Pinia)'],
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
            ['Go', '(Gin, gRPC, Protocol Buffers)'],
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
  @media (max-width: 768px) {
    margin: 2.5rem 0;
  }
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    row-gap: 3rem;
    padding: 0 1rem;
  }
}

.skill-card {
  flex: 1;
  padding: 0 2rem;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4.5rem;
  max-width: 26rem;
  min-height: 300px;
  @media (max-width: 768px) {
    gap: 3.75rem;
    min-height: auto;
    width: 100%;
    border-left: 1px solid #e6e6e6;
    padding: 0rem 0rem 0rem 0.75rem;
  }
}
.skill-card__title {
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 110%;
  color: var(--color-white-light);
}
.skill-card__item {
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 120%;
  color: var(--color-white-light);
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
.skill-card__item--secondary {
  color: var(--color-gray);
  text-wrap: nowrap;
  @media (max-width: 425px) {
    text-wrap: wrap;
  }
}
.skill-card__items {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
@media (min-width: 769px) {
  .skill-card:nth-child(2),
  .skill-card:nth-child(3) {
    border-left: 1px solid var(--color-white-light);
    padding-left: 2rem;
  }
}

@media (min-width: 769px) and (max-width: 1000px) {
  .skill-card:nth-child(3) {
    border-left: none;
  }
}
@media (min-width: 769px) and (max-width: 840px) {
  .skill-card:nth-child(2) {
    border-left: none;
  }
}
</style>
