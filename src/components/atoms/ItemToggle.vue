<script setup lang="ts">
import CheckIcon from './CheckIcon.vue';

interface Props {
  title: string
  description: string
  price: string
}
const props = defineProps<Props>();
const model = defineModel({ type: Boolean, default: false });
const toggleStatus = () => {
  console.log(model.value)
  model.value = !model.value;
};
</script>

<template>
  <div class="addons-item" :class="{ 'is-checked': model }" @click="toggleStatus">
    <label class=" custom-checkbox">
      <input type="checkbox" v-model="model" @click.stop />
      <CheckIcon v-if="model" class="check-icon" />
    </label>
    <div class="item-content">
      <p class="item-title">{{ props.title }}</p>
      <p class="item-description">{{ props.description }}</p>
    </div>
    <div class="item-action">{{ props.price }}</div>
  </div>
</template>

<style scoped>
.addons-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  /* Añadido para mejor espaciado */
  border: 1px solid var(--gray-light, #eee);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.addons-item .item-content {
  flex: 1;
}

.addons-item.is-checked {
  background-color: var(--blue-400);
  border-color: var(--purple);
}

.item-title {
  color: var(--blue-650);
}

.item-description {
  font-weight: 400;
  color: var(--gray);
  font-size: 14px;
}

@media (min-width: 768px) {
  .item-description {
    font-size: 16px;
  }
}

.item-action {
  font-weight: 400;
  color: var(--purple);
  font-size: 14px;
}

@media (min-width: 768px) {
  .item-action {
    font-size: 16px;
  }
}

.custom-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
}

.custom-checkbox input[type="checkbox"] {
  appearance: none;
  width: 100%;
  height: 100%;
  margin: 0;
  outline: none;
  border: 1px solid var(--gray);
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.custom-checkbox input[type="checkbox"]:checked {
  background-color: var(--purple);
}

.check-icon {
  position: absolute;
  pointer-events: none;
  /* Evita que el icono interfiera con el clic */
  width: 12px;
  height: 12px;
  z-index: 10;
}
</style>
