<template>
  <section class="about-section">
    <h1 class="about-section__title">Afanasev Aleksander</h1>
    <div class="about-section__content">
      <div class="image-wrapper"><img src="@/assets/images/Alex-1.jpg" alt="Alex's image." /></div>
      <p class="about-section__text">
        I'm a full-stack developer experienced in building scalable web
        applications with Vue.js and Go. I also have a passion for music, books,
        and data.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  // ...existing code...
};
</script>

<style scoped>
.about-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  & .about-section__title {
    font-size: 3rem;
    color: var(--color-black);
    line-height: 1.5;
  }
  & .about-section__content {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: start;
    justify-content: center;
    width: 100%;
  }
  & .image-wrapper {
    display: flex;
    justify-content: center;
    align-self: center;
    border-radius: .5rem;
    background-color: #e7e7c5;
    height: 300px;
    max-width: 500px;
    width: 100%;
  }
  & .about-section__text {
    font-size: 2rem;
    line-height: 1.5;
    color: var(--color-black);
    text-align: start;
    max-width: 600px;
  }
}
</style>
