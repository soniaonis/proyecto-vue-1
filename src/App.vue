<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoginButton from './components/LoginButton.vue'
//import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    <img alt="logo empresa" class="logo" src="@/assets/img/logosync.svg" width="150" height="100" />

      <nav>
        <RouterLink to="/description">DESCRIPTION</RouterLink>
        <RouterLink to="/features">FEATURES</RouterLink>
        <RouterLink to="/screens">SCREENS</RouterLink>
        <RouterLink to="/extra">EXTRA</RouterLink>
        <LoginButton/>
      </nav> 
  </header>

  <RouterView />
</template>

<style scoped>
body{
    font-family: 'Open Sans', sans-serif;
    background-color: rgb(242, 246, 251) ;
}

.logo {
    width: 90px;
    height: 40px;
    padding-left: 70px;
    margin-top: 30px;
}
 
header {
    position: sticky;
    top: 0;
}
  
nav {
    display: flex;
    justify-content: flex-end;
    color:black;
    list-style: none;
    align-items: center;
    gap: 30px;
    font-size: 12px;
    margin-right: 100px;
    margin-top: -30px;
    text-decoration: none;  
}
 
a {
  color: black;
  text-decoration: none;
  font-weight: bold;
} 
</style>
