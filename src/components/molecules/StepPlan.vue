<script setup lang="ts">
import { useFormStore } from '@/store/form';
import { PLANS } from '@/utils/constants';
import { computed } from 'vue';
import Toggle from '../atoms/Toggle.vue';

const store = useFormStore()

const isChecked = computed({
  get: () => store.billingType === 'yearly',
  set: (newValue: boolean) => {
    store.setBillingType(newValue ? 'yearly' : 'monthly');
  }
});

</script>

<template>
  <div class="step-content">
    <header>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
    </header>

    <div class="plan-section">
      <div v-for="p in PLANS" class="plan" :class="{ 'plan-active': p.id === store.plan }"
        @click="store.selectPlan(p.id)">
        <div>
          <img :src="p.icon" :alt="p.title">
        </div>
        <div>
          <div class="plan-title">{{ p.title }}</div>
          <div class="plan-type">{{ store.billingType === 'monthly' ? p.month : p.year }}</div>
          <div class="plan-description" v-if="store.billingType === 'yearly'">2 months free</div>
        </div>
      </div>
    </div>

    <div class="toggle-section">
      <span :class="{ 'toggle-active': !isChecked }">Monthly</span>
      <Toggle id="plan-toggle" v-model="isChecked" />
      <span :class="{ 'toggle-active': isChecked }">Yearly</span>
    </div>
  </div>
</template>

<style scoped>
.plan-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .plan-section {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.plan.plan-active {
  background-color: var(--blue-100);
  border-color: var(--blue-650);
}

.plan:hover {
  border-color: var(--blue-650);
  cursor: pointer;
}

.plan {
  display: flex;
  gap: 1rem;
  border-radius: 5px;
  border: 1px solid var(--gray);
  transition: all 0.1s ease-in-out;
  padding: 1rem;
}

@media (min-width: 768px) {
  .plan {
    flex-direction: column;
    gap: 2.5rem;
  }
}

.plan .plan-title {
  color: var(--blue-650);

}

.plan .plan-type {
  color: var(--gray);
  font-size: 0.9rem;
}

.plan .plan-description {
  color: var(--blue-650);
  font-size: 0.75rem;
}

.toggle-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  background-color: var(--blue-100);
}

.toggle-section span {
  color: var(--gray);
  transition: color 0.3s;

}

.toggle-section span.toggle-active {
  color: var(--blue-650);
}
</style>
