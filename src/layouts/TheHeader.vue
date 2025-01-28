<template>

  <header class="header">
    <button>
      <span>Afanasev Aleksander</span>
    </button>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cv">CV</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
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
  background-color: var(--color-primary);
}

.header__link {
  color: var(--color-text-primary);
  border-radius: 50%;
  display: block;
}

.header__logo {
  display: block;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
