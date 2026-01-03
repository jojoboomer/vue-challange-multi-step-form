import { useFormStore } from '@/store/form'
import { computed, reactive, watch } from 'vue'

export interface PersonalInfo {
  name: string
  email: string
  phone: string
}

export function usePersonalInfoForm() {
  const store = useFormStore()
  const formData = reactive<PersonalInfo>({ ...store.personalInfo })

  const errors = reactive<Record<keyof PersonalInfo, string>>({
    name: '',
    email: '',
    phone: '',
  })

  const touched = reactive<Record<keyof PersonalInfo, boolean>>({
    name: false,
    email: false,
    phone: false,
  })

  const validators = {
    name(value: string) {
      if (!value.trim()) return 'This field is required'
      return ''
    },
    email(value: string) {
      if (!value.trim()) return 'This field is required'
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) return 'Invalid email format'
      return ''
    },
    phone(value: string) {
      if (!value.trim()) return 'This field is required'
      return ''
    },
  }

  function validateField<K extends keyof PersonalInfo>(field: K) {
    const error = validators[field](formData[field])
    errors[field] = error
    return !error
  }

  function markTouched<K extends keyof PersonalInfo>(field: K) {
    touched[field] = true
    validateField(field)
  }

  function validate(): boolean {
    let isValid = true

    ;(Object.keys(formData) as (keyof PersonalInfo)[]).forEach((field) => {
      touched[field] = true
      if (!validateField(field)) isValid = false
    })

    if (isValid) {
      store.updatePersonalInfo(formData)
    }

    return isValid
  }

  watch(
    () => ({ ...formData }),
    () => {
      ;(Object.keys(formData) as (keyof PersonalInfo)[]).forEach((field) => {
        if (touched[field]) {
          validateField(field)
        }
      })
    },
  )

  const hasErrors = computed(() => Object.values(errors).some(Boolean))

  const reset = () => {
    Object.assign(formData, { name: '', email: '', phone: '' })
    Object.assign(errors, { name: '', email: '', phone: '' })
    Object.assign(touched, { name: false, email: false, phone: false })
  }

  return {
    formData,
    errors,
    touched,
    hasErrors,
    validate,
    validateField,
    markTouched,
    reset,
  }
}
