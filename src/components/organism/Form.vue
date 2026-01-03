<script setup lang="ts">
import { useFormStore } from '@/store/form';
import { useStepsStore } from '@/store/stepper';
import { computed, ref } from 'vue';
import FormCompleted from '../molecules/FormCompleted.vue';
import FormFooter from '../molecules/FormFooter.vue';
import StepAddOns from '../molecules/StepAddOns.vue';
import StepPlan from '../molecules/StepPlan.vue';
import StepSumary from '../molecules/StepSumary.vue';
import StepUserInfo from '../molecules/StepUserInfo.vue';

type StepExpose = {
  onSubmit?: () => boolean | Promise<boolean>
}

const store = useStepsStore()
const formStore = useFormStore()

const currentStepComponent = computed(() => {
  switch (store.currentStep) {
    case 1: return StepUserInfo
    case 2: return StepPlan
    case 3: return StepAddOns
    case 4: return StepSumary
    default: return null
  }
})

const activeStepRef = ref<StepExpose | null>(null)

const handleGoNext = async () => {
  let canContinue = true

  if (activeStepRef.value?.onSubmit) {
    canContinue = await activeStepRef.value.onSubmit()
  }

  if (canContinue) {
    store.next()
  }
}

const handleGoBack = () => {
  store.back()
}


</script>

<template>
  <section class="form-content">
    <component v-if="!formStore.submited" :is="currentStepComponent" ref="activeStepRef" />
    <FormFooter v-if="!formStore.submited" @go-next="handleGoNext" @go-back="handleGoBack"
      :can-go-back="!store.isFirstStep" :can-go-next="!store.isLastStep" />
    <FormCompleted v-if="formStore.submited" />
  </section>
</template>

<style scoped>
.form-content {
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-inline: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0 1rem;
  border-radius: 1rem;
  margin-top: -5rem;
}

@media (min-width: 768px) {
  .form-content {
    padding-inline: 5rem;
    padding-top: 2.5rem;
    padding-bottom: 1rem;
    translate: 0;
    margin: 0
  }
}
</style>
