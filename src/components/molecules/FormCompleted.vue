<script setup lang="ts">
import ThankIcon from '@/assets/images/icon-thank-you.svg?url';
import { useFormStore } from '@/store/form';
import { useStepsStore } from '@/store/stepper';
import Button from '../atoms/Button.vue';

const formStore = useFormStore()
const stepsStore = useStepsStore()

const handleRestart = () => {
  stepsStore.goToStep(1)
  formStore.restartStore()
}
</script>

<template>
  <div class="step-content">
    <img :src="ThankIcon" alt="icon-thank-you">
    <h2>Thank you!</h2>
    <p> Thanks for confirming your subscription! We hope you have fun
      using our platform. If you ever need support, please feel free
      to email us at support@loremgaming.com.</p>
    <div class="restart-footer">
      <Button variant="accent" fullWidth @click="handleRestart">
        Restart
      </Button>
    </div>
  </div>

</template>

<style scoped>
.step-content {
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

@media (min-width: 768px) {
  .step-content {
    padding-inline: 1.5rem;
  }
}

img {
  width: 3rem;
  height: 3rem;
}

@media (min-width: 768px) {
  img {
    width: 5rem;
    height: 5rem;
    margin-bottom: 1rem;
  }
}

h2 {
  color: var(--blue-650);
  font-weight: 700;
  font-size: 2rem;
}

p {
  color: var(--gray);
  font-weight: 400;
}

.restart-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
</style>
