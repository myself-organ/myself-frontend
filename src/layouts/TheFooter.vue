<template>
  <footer class="footer">
    <p class="footer-info">© 2025 Alexander Afanasjev, All Rights Reserved.</p>

    <ul class="menu-list">
      <li class="menu__item">
        <a
          href="https://github.com/SubwaySerfer"
          class="menu__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub</a
        >
      </li>
      <li class="menu__item">
        <router-link to="/contacts" class="menu__link">Contacts</router-link>
      </li>
    </ul>
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
  padding: 2.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 103px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 1rem;
    padding: 1rem;
    align-items: start;
    height: 85px;
  }
}
.menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
}
.footer-info {
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 120%;
  color: var(--color-white-light);
  @media (max-width: 768px) {
    font-size: 0.88rem;
    line-height: 132%;
    color: var(--color-gray);
  }
}
.menu__link {
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 120%;
  color: var(--color-white-light);
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
</style>
