<template>
  <div class="contact-page">
    <div class="contact-block">
      <p class="contact-subtitle">mail</p>
      <a
        class="contact-title"
        href="mailto:sasha.af.one@gmail.com"
        rel="noopener noreferrer"
        >sasha.af.one@gmail.com</a
      >
    </div>
    <div class="contact-block">
      <p class="contact-subtitle">telegram</p>
      <a class="contact-title" href="https://t.me/blade_runner_49" target="_blank" rel="noopener noreferrer"
        >@blade_runner_49</a
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  flex: 1;
}
.contact-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.contact-subtitle {
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 120%;
  text-align: center;
  color: var(--color-gray);
  @media (max-width: 700px) {
    font-size: 1rem;
  }
}

.contact-title {
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 110%;
  color: var(--color-green);
  @media (max-width: 768px) {
    font-size: 1.31rem;
  }
}
</style>
