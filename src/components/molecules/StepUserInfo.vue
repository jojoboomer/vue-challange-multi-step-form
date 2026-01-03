<script setup lang="ts">
import { usePersonalInfoForm } from '@/composables/usePersonalInfoForm';
import Input from '../atoms/Input.vue';

const { formData, errors, validate, markTouched } = usePersonalInfoForm();

defineExpose({
  onSubmit: validate,
})
</script>

<template>
  <div class="step-content">
    <header>
      <h2>Personal info</h2>
      <p> Please provide your name, email address, and phone number. </p>
    </header>
    <div class="user-form">
      <Input id="name" label="Name" placeholder="e.g. Stephen King" v-model="formData.name" :error="errors.name"
        @blur="markTouched('name')" />
      <Input id="email" label="Email Address" type="email" placeholder="e.g. stephenking@lorem.com"
        v-model="formData.email" :error="errors.email" @blur="markTouched('email')" />
      <Input id="phone" label="Phone Number" placeholder="e.g. +1 234 567 890" v-model="formData.phone"
        :error="errors.phone" @blur="markTouched('phone')" />
    </div>
  </div>
</template>

<style scoped>
.user-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
