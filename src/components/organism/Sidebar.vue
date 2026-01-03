<script setup lang="ts">
import { useStepsStore } from '@/store/stepper';
import { STEPS } from '@/utils/constants';
import StepperItem from '../molecules/StepperItem.vue';

const store = useStepsStore()

const handleClick = (index: number) => {
  if (index < store.currentStep)
    store.goToStep(index)
}

const isVisited = (idx: number) => {
  return idx < store.currentStep
}
</script>

<template>
  <aside class="form-sidebar">
    <div class=" stepper">
      <StepperItem v-for="step in STEPS" :index="step.id" :label="step.label" :active="step.id === store.currentStep"
        :visited="isVisited(step.id)" @click="handleClick(step.id)" />
    </div>
  </aside>
</template>

<style scoped>
.form-sidebar {
  background-image: url('@/assets/images/bg-sidebar-mobile.svg');
  background-size: cover;
  background-position: center;
  height: 12rem;
}

.stepper {
  display: flex;
  gap: 1.5rem;
  align-items: start;
  justify-content: center;
  height: 100%;
  padding-top: 2rem;
}

@media (min-width: 768px) {
  .form-sidebar {
    background-image: url('@/assets/images/bg-sidebar-desktop.svg');
    border-radius: 10px;
    padding: 2rem;
    height: 100%;

  }

  .stepper {
    flex-direction: column;
    justify-content: start;
    padding-top: 0;

  }
}
</style>
