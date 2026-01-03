<script setup lang="ts">
import MainCard from './components/templates/MainCard.vue';

</script>

<template>
  <main>
    <MainCard />
  </main>
</template>

<style scoped>
main {
  background-color: var(--blue-100);
  width: 100%;
  min-height: 100vh;
}

@media (min-width: 768px) {
  main {
    height: 100vh;
    padding: 4rem;
  }
}
</style>
