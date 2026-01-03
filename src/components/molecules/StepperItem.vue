<script setup lang="ts">
import { Transition } from 'vue';
import CheckIcon from '../atoms/CheckIcon.vue';
type Props = {
  index: number
  label: string
  active: boolean
  visited: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['click'])

</script>

<template>
  <div class="stepper-item" :class="{ active, visited }" @click="emit('click')" role="button" tabindex="0">
    <div class="item-indicator">
      <Transition mode="out-in">
        <span v-if="!visited">{{ props.index }}</span>
        <CheckIcon color="black" v-else />
      </Transition>
    </div>
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
  font-weight: 700;
  transition: all 0.25s ease-in-out;
}

.stepper-item.active .item-indicator {
  background-color: var(--blue-200);
  color: black;
}

.stepper-item.visited .item-indicator {
  background-color: var(--blue-200);
  color: var(--gray);
}

.stepper-item:hover {
  opacity: 0.8;
  cursor: pointer;
}

.stepper-item:hover .item-indicator {}

.item-content {
  display: none;
}

.item-content p:first-of-type {
  font-weight: 300;
}

.item-content p:last-of-type {
  font-weight: 700;
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
