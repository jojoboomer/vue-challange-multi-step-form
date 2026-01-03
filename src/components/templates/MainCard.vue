<script setup lang="ts">
import Form from '@/components/organism/Form.vue';
import Sidebar from '@/components/organism/Sidebar.vue';
</script>

<template>
  <div class="form-layout">
    <Sidebar />
    <Form />
  </div>
</template>

<style scoped>
.form-layout {
  height: 100%;
  width: 100%;
  max-width: 1024px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .form-layout {
    border-radius: 26px;
    padding: 1rem;
    grid-template-columns: 1fr 2fr;
    background-color: white;
  }
}
</style>
