<template>
  <section class="work-section">
    <h2 class="skills-section__title">Work</h2>
    <ul class="skills-list">
      <li v-for="work in works" :key="work.title" class="skill-card">
        <h3 class="skill-card__title">
          <span class="skill-card__title__ages">{{ work.ages }}</span>
          <span class="skill-card__title__ages">/</span>
          {{ work.jobPosition }}
          <span class="skill-card__title__position">/</span>
          <span class="skill-card__title__position">{{ work.title }}</span>
          <span class="skill-card__title__country">({{ work.country }})</span>
        </h3>
        <div class="skill-card__items work-experience">
          <p class="skill-card__item" v-for="exp in work.exps" :key="exp">
            {{ exp }}
          </p>
        </div>
        <div class="skill-card__items">
          <template v-if="work.techs.length === 1">
            <p class="skill-card__item" :class="{ 'item-mt': idx === 0 }">
              <span v-for="el in work.techs[0].stack" class="skill-wrapper">{{
                el
              }}</span>
            </p>
          </template>
          <template v-else>
            <p v-for="item in work.techs" class="skill-card__item">
              <span class="tech-title">{{ item.title }}</span>
              <span v-for="el in item.stack" class="skill-wrapper">{{
                el
              }}</span>
            </p>
            <!-- <p class="skill-card__item">
                <span class="tech-title">{{  }}</span>
                <span v-for="el in tech[1]" class="skill-wrapper">{{
                  el
                }}</span>
              </p>
              <span></span
            > -->
          </template>
          <!-- <template v-if="work.techs.length === 1">
            <p class="skill-card__item" :class="{ 'item-mt': idx === 0 }">
                <span v-for="el in tech.stack" class="skill-wrapper">{{ el }}</span>
              </p>
          </template>
          <template v-else>
              <p class="skill-card__item">
                <span class="tech-title">{{ tech[0] }}</span>
                <span v-for="el in tech[1]" class="skill-wrapper">{{
                  el
                }}</span>
              </p>
              <span></span
            >
          </template> -->
          <!-- <template v-for="(tech, idx) in work.techs">
            <template v-if="tech.length === 1">
              <p class="skill-card__item" :class="{ 'item-mt': idx === 0 }">
                <span v-for="el in tech.stack" class="skill-wrapper">{{ el }}</span>
              </p>
            </template>
            
           
          </template> -->
        </div>
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
          title: 'Launchist',
          country: 'US',
          jobPosition: 'FullStack developer',
          exps: [
            'Optimized microservice architecture resulting in 10% reduction in video generation time and improved system scalability',
            'Increased system throughput from 1,000 to 2,000 concurrent requests per minute through efficient service communication using gRPC',
            'Reduced API response time by 65% (from 800ms to 280ms) by implementing Redis caching strategy',
            'Designed and developed intuitive AI prompt management interface using Vue 3 and Nuxt 3',
            'Improved system reliability by implementing comprehensive logging with Logrus and API documentation with Swagger',
          ],
          techs: [
            {
              title: 'Frontend: ',
              stack: ['Vue 3', 'Nuxt 3', 'Vuex', 'TypeScript', 'Tailwind CSS'],
            },
            {
              title: 'Backend: ',
              stack: [
                'Go',
                'Gin',
                'gRPC',
                'Protocol Buffers',
                'PostgreSQL',
                'GORM',
                'Redis',
                'Logrus',
              ],
            },
            {
              title: 'DevOps: ',
              stack: ['Docker', 'CI/CD'],
            },
          ],
          ages: '2024 - 2025',
        },
        {
          title: 'Puzzle',
          country: 'KZ',
          jobPosition: 'Frontend developer',
          exps: [
            'Improved application performance by 30% through code optimization and lazy loading implementation',
            'Developed and launched multilingual support for 3 languages (Kazakh, Russian, English), increasing market reach by 40%',
            'Rebuilt insurance policy calculator leading to 5% conversion rate increase',
          ],
          techs: [
            {
              stack: [
                'Vue 3',
                'Nuxt 3',
                'TypeScript',
                'SCSS',
                'Tailwind CSS',
                'i18n',
                'Axios',
              ],
            },
          ],
          ages: '2023 - 2024',
        },
        {
          title: 'Exmail',
          country: 'RU',
          jobPosition: 'Frontend developer',
          exps: [
            'Optimized website performance metrics to "green" status in Core Web Vitals, reducing LCP by 70% (from 4.2s to 1.2s)',
            'Implemented lazy loading and asset optimization strategies for furniture catalog',
            'Developed and maintained responsive UI components using Vue 3 and Vuex',
          ],
          techs: [
            {
              stack: ['Vue 2/3', 'Vuex', 'Vite', 'CSS'],
            },
          ],
          ages: '2022 - 2023',
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills-section__title {
  color: var(--color-white-light);
  text-align: start;
  font-weight: 500;
  font-size: 3.75rem;
  line-height: 84%;
  @media (max-width: 768px) {
    align-self: center;
    font-size: 2.5rem;
  }
}

.skills-list {
  display: grid;
  grid-template-columns: 1fr;
  /* gap: 1rem; */
  width: 100%;
}

.skill-card {
  padding: 3.75rem 0;
  text-align: start;
  &:first-child {
    padding-top: 0;
  }
}
.skill-card:not(:first-child) {
  border-top: 1px solid #2e2e2e;
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
.work-section {
  color: var(--color-white-light);
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin: 10rem 0 3.75rem;
  padding: 0 2rem;
  gap: 2rem;
  @media (max-width: 768px) {
    margin: 4rem 0 2.5rem;
    padding: 0 1rem;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
.skill-card {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
}
.skill-card__title {
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 110%;
  color: var(--color-white-light);
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 1rem;
  @media (max-width: 768px) {
    gap: 0.5rem;
    flex-wrap: wrap;
  }
}
.skill-card__title__ages {
  color: var(--color-green);
}
.skill-card__title__position {
  color: var(--color-gray);
}
.skill-card__title__country {
  color: var(--color-green);
  flex: 1;
  text-align: end;
}
.skill-card__items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.work-experience {
  max-width: 48.5rem;
}
.skill-card__item {
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 132%;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.tech-title {
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 120%;
  color: var(--color-gray);
  width: 100px;
  margin-right: 0.75rem;
}
.skill-wrapper {
  border-radius: 1.88rem;
  padding: 0.19rem 0.75rem 0.25rem 0.75rem;
  width: auto;
  text-wrap: nowrap;
  background: #2e2e2e;
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 120%;
  color: var(--color-white-light);
}
</style>
