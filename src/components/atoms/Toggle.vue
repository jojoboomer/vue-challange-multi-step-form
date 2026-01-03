<script setup lang="ts">
interface Props {
  id: string
  name?: string
}
const props = defineProps<Props>()

const model = defineModel({ type: Boolean, default: false });
const handleChange = (event) => {
  console.log('handle inside')
};
</script>

<template>
  <label :for="props.id" class="switch" :class="{ 'checked': model }">
    <input v-bind="$attrs" type="checkbox" class="sr-only" :id="props.id" :name="props.name" v-model="model"
      @change="handleChange">
    <span class="slider"></span>
  </label>
</template>

<style scoped>
.switch {
  position: relative;
  display: block;
  width: 3rem;
  height: 1.5rem;
  background-color: var(--blue-650);
  border-radius: 9999px;
  transition: background-color 0.3s;
  -webkit-tap-highlight-color: transparent;
}

.switch:hover {
  cursor: pointer;
}

.switch.cheked {
  background-color: #22c55e;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.slider {
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 1rem;
  height: 1rem;
  background-color: white;
  border-radius: 9999px;
  transition: left 0.3s;
  margin: 4px;
  inset-block: 0;
}

.switch.checked .slider {
  left: 1.5rem;
}
</style>
