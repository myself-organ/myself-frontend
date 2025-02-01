<template>
  <header class="header">
    <a class="logo-btn" href="/">
      <span>Afanasev Aleksander</span>
    </a>
    <nav class="menu">
      <!-- <ul class="menu-list">
        <li class="menu__item"><a href="/" class="menu__link menu__link--active">Home</a></li>
        <li class="menu__item"><a href="/" class="menu__link">CV</a></li>
        <li class="menu__item">
          <a href="/" class="menu__link">Contact</a>
        </li>
      </ul> -->
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);

function toggleLogin() {
  isLoggedIn.value = !isLoggedIn.value;
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 40px;
}

.menu__link {
  color: var(--color-black);
  border-radius: 2px;
  padding: 0.15em 0.5em;
  text-decoration: underline;
  transition: opacity 0.3s;
  font-size: 1.25rem;
  line-height: 1.5;
  opacity: 0.6;
  border-radius: 2px;
  &:hover {
    opacity: 1;
  }
}
.menu__link--active {
  opacity: 1;
  /* background: var(--color-primary); */
}

.logo-btn {
  background: transparent;
  cursor: pointer;
  transition: opacity 0.3s;
  color: var(--color-black);
  font-size: 1.5rem;
  line-height: 1.5;
  &:hover {
    opacity: 0.6;
  }
}
</style>
