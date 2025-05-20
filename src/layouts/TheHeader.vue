<template>
  <header class="header">
    <a class="menu__link" href="/">
      <span>Alexander Afanasjev</span>
    </a>
    <nav class="menu">
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
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 2rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 1rem;
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

.menu__link {
  font-weight: 500;
  font-size: 1.19rem;
  line-height: 120%;
  color: var(--color-white-light);
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
}
</style>
