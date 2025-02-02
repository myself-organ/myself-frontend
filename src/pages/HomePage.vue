<!-- App.vue -->
<template>
  <div class="min-h-screen bg-slate-900 text-white">
    <about-section />
    <skills-section />
    <work-section />
    <project-list />
  </div>
</template>

<script setup>
import AboutSection from '@/components/home/AboutSection.vue';
import SkillsSection from '@/components/home/SkillsSection.vue';
import WorkSection from '@/components/home/WorkSection.vue';
import ProjectList from '@/components/home/ProjectList.vue';
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
    opacity: 0.7;
  }
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
