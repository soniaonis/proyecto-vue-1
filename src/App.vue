<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logosync.svg" width="150" height="100" />

      <nav>
        <RouterLink to="/description">DESCRIPTION</RouterLink>
        <RouterLink to="/features">FEATURES</RouterLink>
        <RouterLink to="/screens">SCREENS</RouterLink>
        <RouterLink to="/extra">EXTRA</RouterLink>
      </nav>
    
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 15vh;
}

.logo {
  padding-left: 40px;
  margin-top: 70px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: right;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 0rem 0;
    margin-top: 0rem;
  }
}
</style>
