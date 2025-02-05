<template>
  <section class="skills-section">
    <h2 class="skills-section__title">Work</h2>
    <ul class="skills-list">
      <li v-for="work in works" :key="work.title" class="skill-card">
        <h3 class="skill-card__title">{{ work.title }}</h3>
        <p class="skill-card__item work-title"><span>{{ work.ages }}</span> {{ work.subtitle }}</p>
        <p class="skill-card__item" v-for="exp in work.exps" :key="exp">
          {{ exp }}
        </p>
        <p
          v-for="(tech, idx) in work.techs"
          class="skill-card__item"
          :class="{ 'item-mt': idx === 0 }"
        >
          {{ tech }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'WorksSection',
  data() {
    return {
      works: [
        {
          title: 'NDA - USA',
          subtitle: 'FullStack developer',
          exps: [
            'Optimized microservice architecture resulting in 10% reduction in video generation time and improved system scalability',
            'Increased system throughput from 1,000 to 2,000 concurrent requests per minute through efficient service communication using gRPC',
            'Reduced API response time by 65% (from 800ms to 280ms) by implementing Redis caching strategy',
            'Designed and developed intuitive AI prompt management interface using Vue 3 and Nuxt 3',
            'Improved system reliability by implementing comprehensive logging with Logrus and API documentation with Swagger',
          ],
          techs: [
            'Frontend: Vue 3, Nuxt 3, Vuex, TypeScript, Tailwind CSS',
            'Backend: Go, Gin, gRPC, Protocol Buffers, PostgreSQL, GORM, Redis, Logrus, Swagger',
            'DevOps: Docker, CI/CD',
          ],
          ages: '2024 - ',
        },
        {
          title: 'Puzzle - KZ',
          subtitle: 'Frontend developer',
          exps: [
            'Improved application performance by 30% through code optimization and lazy loading implementation',
            'Developed and launched multilingual support for 3 languages (Kazakh, Russian, English), increasing market reach by 40%',
            'Rebuilt insurance policy calculator leading to 5% conversion rate increase',
          ],
          techs: ['Vue 3, Nuxt 3, TypeScript, SCSS, Tailwind CSS, i18n, Axios'],
          ages: '2023 - 2024',
        },
        {
          title: 'Exmail - RU',
          subtitle: 'Frontend intern',
          exps: [
            'Optimized website performance metrics to "green" status in Core Web Vitals, reducing LCP by 60% (from 4.2s to 1.2s)',
            'Implemented lazy loading and asset optimization strategies for furniture catalog',
            'Developed and maintained responsive UI components using Vue 3 and Vuex',
          ],
          techs: ['Vue 3, Vuex, Vite, CSS'],
          ages: '2022 - 2023',
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
  @media(max-width: 768px) {
    margin: 2.5rem 0;
  }
}

.skills-section__title {
  font-size: 3rem;
  color: var(--color-white-light);
  line-height: 1.5;
  align-self: start;
  padding-left: 20px;
  @media(max-width: 768px) {
    padding-left: 0;
    align-self: center;
  }
}

.skills-list {
  display: grid;
  grid-template-columns: 1fr;
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
  color: var(--color-white-light);
  font-size: 1.25rem;
  line-height: 1.5;
}
.item-mt {
  margin-top: 1rem;
}
.work-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-white-light);
  span {
    color: var(--color-primary);
  }
}
</style>
