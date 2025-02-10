<template>
  <section class="about-section">
    <img
      class="about-image"
      width="120"
      height="120"
      src="@/assets/images/alex-1.jpg"
      alt="Afanasev Aleksandr photo."
    />
    <h1 class="about-section__title">
      I’m a full-stack developer experienced in building scalable web
      applications with <span class="title-vue">Vue.js</span> and
      <span class="title-go">Go</span>. I also have a passion for music, books,
      and data.
    </h1>
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
  gap: 1.25rem;
  align-items: start;
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 10rem;
  margin-top: 12.5rem;
  @media (max-width: 768px) {
    margin-top: 5rem;
    margin-bottom: 7rem;
    padding: 0 1rem;
  }
}
.about-section__title {
  font-weight: 500;
  font-size: 3.75rem;
  line-height: 110%;
  color: var(--color-white-light);
  text-align: start;
  max-width: 71.25rem;
  & .title-vue {
    background: linear-gradient(39deg, #0dff00 0%, #d4ff00 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & .title-go {
    background: linear-gradient(24deg, #0dff00 0%, #d4ff00 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
}
.about-image {
  border-radius: 5rem;
}
</style>
