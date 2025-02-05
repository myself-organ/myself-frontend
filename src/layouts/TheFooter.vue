<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-card">
          <img src="@/assets/icons/github.svg" alt="Github logo." />
          <a
            class="link-text"
            target="_blank"
            href="https://github.com/SubwaySerfer"
            >Github</a
          >
        </div>
        <div class="footer-card">
          <img src="@/assets/icons/tg.svg" alt="Telegram logo." />
          <a
            class="link-text"
            href="https://t.me/blade_runner_49"
            target="_blank"
            >@blade_runner_49</a
          >
        </div>
        <div class="footer-card">
          <img src="@/assets/icons/email.svg" alt="email logo." />
          <a class="link-text" href="mailto:subwayserfer.job@gmail.com"
            >Email</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TheFooter',
});
</script>

<style scoped>
.footer {
  width: 100%;
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    .footer-card {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 0.75rem;
    }
  }
}

.footer .container {
  padding: 3rem 0;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  width: 100%;
}

.link-text {
  color: var(--color-white-light);
  font-size: 1.25rem;
  line-height: 1.5;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
}
</style>
