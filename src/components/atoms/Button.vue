<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

export interface Props {
  size?: "small" | "medium" | "large";
  variant?: "text" | "default" | "accent";
  type?: ButtonHTMLAttributes['type'];
  disabled?: boolean;
  hidden?: boolean
  onClick?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  variant: 'default',
  type: 'button',
  disabled: false,
  hidden: false
})
</script>

<template>
  <button :type="type" :disabled="disabled" class="btn"
    :class="[`btn--${size}`, `btn--${variant}`, { 'hidden': props.hidden }]" @click="onClick">
    <slot />
  </button>
</template>

<style scoped>
.hidden {
  visibility: hidden;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 5px;
  border: 2px solid transparent;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* size */
.btn.btn--small {
  padding-inline: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 12px;
}

.btn.btn--medium {
  padding-inline: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
}

.btn.btn--large {
  padding-inline: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 18px;
}

/* variants */
.btn.btn--text {
  background-color: transparent;
  border: none;
  color: var(--gray);
}

.btn.btn--text:hover {
  color: var(--blue-650);
}

.btn.btn--default {
  background-color: var(--blue-650);
  color: white;
  border: 2px solid var(--blue-650);
}

.btn.btn--default:hover {
  opacity: 0.9;
}

.btn.btn--accent {
  background-color: var(--purple);
  color: white;
  border: 2px solid var(--purple);
}

.btn.btn--accent:hover {
  opacity: 0.8;
}

/* Estado deshabilitado */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
