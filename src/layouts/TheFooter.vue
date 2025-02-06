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
        <router-link to="/" class="menu__link" style="cursor: no-drop"
          >Contact</router-link
        >
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
}
.menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 40px;
}
.footer-info {
font-weight: 500;
font-size: 1.19rem;
line-height: 120%;
color: var(--color-white-light);
}
.menu__link {
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 120%;
  color: var(--color-white-light);
  cursor: pointer;
}
</style>
