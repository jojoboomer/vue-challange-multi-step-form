<script setup lang="ts">
type Props = {
  index: number
  label: string
  active: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['click'])

</script>

<template>
  <div class="stepper-item" :class="{ active }" @click="emit('click')">
    <div class="item-indicator">{{ props.index }}</div>
    <div class="item-content">
      <p>Step {{ props.index }}</p>
      <p>{{ props.label }}</p>
    </div>
  </div>
</template>

<style scoped>
.stepper-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.item-indicator {
  color: var(--blue-200);
  border: 2px solid var(--blue-200);
  border-radius: 50%;
  width: 2.3rem;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700
}

.stepper-item:hover {
  opacity: 0.9;
  cursor: pointer;

  .item-indicator {
    background-color: var(--blue-200);
    color: black;
  }
}

.item-content {
  display: none;
}

.item-content p:first-of-type {
  font-weight: 300;
}

.item-content p:last-of-type {
  font-weight: 700;
}

.stepper-item.active {
  .item-indicator {
    background-color: var(--blue-200);
    color: black;
  }
}

@media (min-width: 768px) {
  .item-content {
    display: flex;
    flex-direction: column;
    color: var(--blue-200);
    text-transform: uppercase;
  }
}
</style>
