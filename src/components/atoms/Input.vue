<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue';

interface Props {
  id: string
  label: string
  placeholder?: string
  type?: InputHTMLAttributes['type']
  labelClass?: string
  inputClass?: string
  modelValue: string // Añadido para v-model
  error?: string     // Añadido para el mensaje de error
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur'): void
}>()
</script>

<template>
  <div class="input-wrapper">
    <div class="label-container">
      <label :for="id" class="input-label" :class="labelClass">{{ props.label }}</label>
      <span v-if="error" class="error-message">{{ error }}</span>
    </div>

    <input :type="props.type ? props.type : 'text'" :id="id" :placeholder="placeholder" class="input-box"
      :class="[inputClass, { 'input-error': error }]" :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" @blur="emit('blur')">
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.label-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-label {
  font-size: 14px;
  font-weight: 400;
  color: var(--blue-650);
}

.error-message {
  color: var(--red);
  font-size: 14px;
  font-weight: 700;
}

.input-box {
  width: 100%;
  height: 2.5rem;
  margin-top: 0.35rem;
  border-radius: 8px;
  padding-inline: 0.75rem;
  border: 1px solid var(--gray);
  color: var(--blue-650);
  box-sizing: border-box;
}

/* Estilo cuando hay error */
.input-error {
  border-color: var(--red);
}

.input-box:focus-visible {
  outline: 1px solid var(--blue-650);
}
</style>
