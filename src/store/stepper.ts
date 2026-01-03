import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useStepsStore = defineStore(
  'stepper',
  () => {
    const currentStep = ref(1)
    const totalSteps = 4

    const isFirstStep = computed(() => currentStep.value === 1)
    const isLastStep = computed(() => currentStep.value === totalSteps)

    const next = () => {
      if (currentStep.value < totalSteps) {
        currentStep.value++
      }
    }
    const back = () => {
      if (currentStep.value > 1) {
        currentStep.value--
      }
    }
    const goToStep = (step: number) => {
      if (step >= 1 && step <= totalSteps) {
        currentStep.value = step
      }
    }

    return { currentStep, totalSteps, isFirstStep, isLastStep, next, back, goToStep }
  },
  {
    persist: {
      storage: localStorage,
      pick: ['currentStep'],
    },
  },
)
