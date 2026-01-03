import { defineStore } from 'pinia'
import { ref } from 'vue'

export type BillingType = 'monthly' | 'yearly'

export interface PersonalInfo {
  name: string
  email: string
  phone: string
}

export const useFormStore = defineStore(
  'form',
  () => {
    const billingType = ref<BillingType>('monthly')
    const plan = ref<number>(1)
    const addons = ref<string[]>([])
    const submited = ref<boolean>(false)
    const personalInfo = ref<PersonalInfo>({
      name: '',
      email: '',
      phone: '',
    })

    const setBillingType = (type: BillingType) => (billingType.value = type)
    const selectPlan = (planId: number) => (plan.value = planId)
    const updateAddons = (addonId: string, isSelected: boolean) => {
      if (isSelected) {
        if (!addons.value.includes(addonId)) addons.value.push(addonId)
      } else {
        addons.value = addons.value.filter((id) => id !== addonId)
      }
    }
    const isSelected = (addonId: string) => {
      if (!addons.value) return false
      return addons.value.includes(addonId)
    }

    const completeFlow = () => {
      submited.value = true
    }

    const restartStore = () => {
      Object.assign(personalInfo, { name: '', email: '', phone: '' })
      billingType.value = 'monthly'
      plan.value = 1
      addons.value = []
      submited.value = false
      personalInfo.value = { name: '', email: '', phone: '' }
    }

    const updatePersonalInfo = (data: PersonalInfo) => {
      personalInfo.value = data
    }

    return {
      billingType,
      plan,
      addons,
      submited,
      personalInfo,
      setBillingType,
      selectPlan,
      updateAddons,
      isSelected,
      completeFlow,
      restartStore,
      updatePersonalInfo,
    }
  },
  {
    persist: {
      storage: localStorage,
      pick: ['billingType', 'addons', 'plan', 'submited', 'personalInfo'],
    },
  },
)
