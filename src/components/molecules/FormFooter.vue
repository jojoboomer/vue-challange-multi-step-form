<script setup lang="ts">
import { computed } from 'vue';
import type { Props as ButtonProps } from '../atoms/Button.vue';
import Button from '../atoms/Button.vue';

interface Props {
  canGoBack?: boolean
  canGoNext?: boolean
}
const { canGoBack = true, canGoNext = true } = defineProps<Props>()

const emit = defineEmits(['goBack', 'goNext'])

const nextBtnConfig = computed(() => {
  if (!canGoNext) {
    return {
      label: "Confirm",
      variant: 'accent' as ButtonProps['variant']
    }
  } else {
    return {
      label: "Next Step",
      variant: 'default' as ButtonProps['variant']
    }

  }
})

</script>

<template>
  <footer>
    <Button size="medium" variant="text" @click="emit('goBack')" :hidden="!canGoBack">Go Back</Button>
    <Button size="medium" :variant="nextBtnConfig.variant" @click="emit('goNext')">{{
      nextBtnConfig.label }}</Button>
  </footer>

</template>

<style scoped>
footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: white;
  padding: 1rem;
}

@media (min-width: 768px) {
  footer {
    position: relative;
    padding: 0px;
  }
}
</style>
