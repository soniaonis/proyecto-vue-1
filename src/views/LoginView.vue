<script setup>
import { ref } from 'vue';
// let showPassword = false; equivalente en javascript.

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <section>
    <h1>welcome</h1>
    <form>
      <input type="text" placeholder="user name" />
      <input
        :type="showPassword ? 'text' : 'password'"
        placeholder="password"
      />
            <!-- el tipo texto muestra los caracteres y el tipo password esconde los caracteres vasados en el showPassword. -->
      <button type="button" @click="togglePasswordVisibility">
        {{ showPassword ? 'Hide' : 'Show' }} Password
        <!-- if (showPassword) {
            "hide" } else {
            "show"} -->
      </button>
      <button type="button">Login</button>
    </form>
  </section>
</template>

<style scoped>
section {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5vh;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 2vh;
}
input,
button {
  padding: 1vh 2vw;
}
</style>
