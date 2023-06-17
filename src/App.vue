<script setup>
import { RouterLink, RouterView } from "vue-router";
import LoginButton from "./components/LoginButton.vue";
</script>

<template>
  <body>
    <header>
      <img
        alt="logo empresa"
        class="logo"
        src="@/assets/img/logosync.svg"
        width="150"
        height="100"
      />
  
      <nav>
        <RouterLink to="/description">DESCRIPTION</RouterLink>
        <RouterLink to="/features">FEATURES</RouterLink>
        <RouterLink to="/screens">SCREENS</RouterLink>
        <RouterLink to="/extra">EXTRA</RouterLink>
        <LoginButton />
      </nav>
    </header>
  </body>

  <RouterView />
</template>

<style scoped>
body {
  font-family: "Open Sans", sans-serif;
  background-color: rgb(242, 246, 251);
}

.logo {
  width: 190px;
  height: 40px;
  padding-left: 70px;
}
body {
  display: flex;
  flex-direction: column;
  width: 100%;
}
header {
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  left: 0;
  gap: 3vw;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  color: black;
  list-style: none;
  align-items: center;
  gap: 30px;
  font-size: 12px;
  text-decoration: none;
}

a {
  color: black;
  text-decoration: none;
  font-weight: bold;
}
</style>
