<template>
  <section class="about-section">
    <h1 class="about-section__title">Afanasev Aleksander</h1>
    <div class="about-section__content">
      <div class="image-wrapper">
        <img width="100%" height="100%"  src="@/assets/images/Alex-1.jpg" alt="Alex's image." />
      </div>
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
    @media (max-width: 1100px) {
      padding: 0 10px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 20px;
      align-items: center;
    }
  }
  & .image-wrapper {
    display: flex;
    justify-content: center;
    align-self: center;
    border-radius: 0.5rem;
    background-color: #e7e7c5;
    height: 300px;
    max-width: 500px;
    width: 100%;
    img {
      object-fit: contain;
    }
    @media (max-width: 768px) {
      height: auto;
      img {
        border-radius: 0.5rem;
      }
    }
  }
  & .about-section__text {
    font-size: 2rem;
    line-height: 1.5;
    color: var(--color-black);
    text-align: start;
    max-width: 600px;
    @media (max-width: 1100px) {
      max-width: 450px;
    }
    @media (max-width: 768px) {
      font-size: 1.75rem;
      line-height: 1.3;
    }
  }
}
</style>
