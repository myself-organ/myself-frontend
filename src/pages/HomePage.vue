<!-- App.vue -->
<template>
  <div class="min-h-screen bg-slate-900 text-white">
    <about-section />
    <skills-section />
    <section class="media">
      <div class="container">
        <h2 class="section-title">Media</h2>
        <div class="media-grid">
          <div class="media-card">
            <img src="@/assets/icons/github.svg" alt="Github logo." />
            <a
              class="skill-card__text"
              target="_blank"
              href="https://github.com/SubwaySerfer"
              >Github</a
            >
          </div>
          <div class="media-card">
            <img src="@/assets/icons/tg.svg" alt="Telegram logo." />
            <a
              class="skill-card__text"
              href="https://t.me/blade_runner_49"
              target="_blank"
              >@blade_runner_49</a
            >
          </div>
          <div class="media-card">
            <img src="@/assets/icons/email.svg" alt="email logo." />
            <a class="skill-card__text" href="mailto:subwayserfer.job@gmail.com"
              >Email</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AboutSection from '@/components/home/AboutSection.vue';
import SkillsSection from '@/components/home/SkillsSection.vue';

const skills = [
  { title: 'Frontend', techs: 'Vue, React, Angular' },
  { title: 'Backend', techs: 'Node.js, Express' },
  { title: 'Database', techs: 'MongoDB, PostgreSQL' },
  { title: 'Tools', techs: 'Git, Docker, AWS' },
];

const projects = [
  {
    id: 1,
    title: 'Проект 1',
    description: 'Описание проекта и использованных технологий',
    image: '/placeholder-1.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Проект 2',
    description: 'Описание проекта и использованных технологий',
    image: '/placeholder-2.jpg',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Проект 3',
    description: 'Описание проекта и использованных технологий',
    image: '/placeholder-3.jpg',
    github: '#',
    demo: '#',
  },
];

const experience = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Компания',
    period: '2020 - Настоящее время',
    description: 'Описание обязанностей и достижений на позиции',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Компания',
    period: '2018 - 2020',
    description: 'Описание обязанностей и достижений на позиции',
  },
];

const form = ref({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  // Здесь будет логика отправки формы
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #fff;
  background-color: #0f172a;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  padding: 80px 0;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 24px;
}

.hero .highlight {
  color: #34d399;
}

.hero p {
  font-size: 20px;
  color: #94a3b8;
  margin-bottom: 32px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.button {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.button-primary {
  background-color: #34d399;
  color: #fff;
}

.button-secondary {
  border: 1px solid #475569;
  color: #34d399;
}

.about {
  padding: 80px 0;
}

.section-title {
  font-size: 32px;
  margin-bottom: 48px;
  color: #fff;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.skill-card {
  background-color: #334155;
  padding: 24px;
  border-radius: 8px;
  transition: transform 0.3s;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.projects {
  padding: 80px 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.project-card {
  background-color: #1e293b;
  border-radius: 8px;
  overflow: hidden;
}

.project-image {
  height: 200px;
  background-color: #334155;
}

.project-content {
  padding: 24px;
}

.contact {
  padding: 80px 0;
}

.contact-form {
  max-width: 660px;
  padding: 2rem;
  margin: 0 auto;
  background: #334155;
  border-radius: 8px;
}

.form-input {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  background-color: #1e293b;
  border: 1px solid #475569;
  border-radius: 8px;
  color: #fff;
}

h3 {
  font-size: 24px;
  color: #fff;
}

.skill-card__text {
  color: var(--color-black);
  font-size: 1.25rem;
  line-height: 1.5;
  transition: opacity 0.3s;
  &:hover {
    opacity: .7;
  }
}

.media {
  width: 100%;
  .media-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    .media-card {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
}

.media .container {
  padding: 3rem 0;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  width: 100%;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }
  .button-group {
    flex-direction: column;
  }
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
