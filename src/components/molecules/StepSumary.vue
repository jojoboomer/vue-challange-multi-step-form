<script setup lang="ts">
import { useFormStore } from '@/store/form';
import { ADDONS, PLANS } from '@/utils/constants';
import { computed } from 'vue';

const store = useFormStore()

const planData = computed(() => {
  const selected = PLANS.find(e => e.id == store.plan);
  return {
    title: selected?.title,
    price: store.billingType == 'monthly' ? selected?.month : selected?.year
  }
})

const servicesData = computed(() => {
  const selectedServices = Array.from(store.addons).map(addOnId => {
    return ADDONS.find(addOn => addOn.id === addOnId)
  })

  return selectedServices.map(service => {
    return {
      title: service?.title,
      price: store.billingType == 'monthly' ? service?.month : service?.year
    }
  })
})

const totalPrice = computed(() => {
  let total = 0;
  if (planData.value?.price) {
    total += parseInt(planData.value.price.replace('$', ''));
  }
  servicesData.value.forEach(service => {
    if (service.price) {
      total += parseInt(service.price.replace('$', ''));
    }
  });
  return `+$${total}/${store.billingType === 'monthly' ? 'mo' : 'yr'}`;
});

const complete = () => {
  store.completeFlow()
}

defineExpose({
  onSubmit: complete,
})

</script>

<template>
  <div class="step-content">
    <header>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
    </header>

    <div class="sumary-section">
      <div class="sumary-data">
        <div class="plan-data sumary-item">
          <div>
            <p>{{ planData?.title }} <span>({{ store.billingType }})</span></p>
          </div>
          <p>{{ planData?.price }}</p>
        </div>
        <div class="separator"></div>
        <div class="service-data sumary-item" v-for="service in servicesData">
          <div>
            <p>{{ service?.title }} </p>
          </div>
          <p>{{ service?.price }}</p>
        </div>
      </div>
      <div class="sumary-total">
        <p>Total (per month/year)</p>
        <p>{{ totalPrice }}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.sumary-data {
  background-color: var(--blue-100);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
}

.sumary-data .plan-data {
  color: var(--blue-650);
}

.sumary-data .service-data {
  color: var(--gray);
  font-weight: 400;
}

.sumary-data .service-data>p {
  color: var(--blue-650);
}

.sumary-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.separator {
  width: 100%;
  background-color: var(--gray);
  opacity: 0.5;
  height: 1px;
}

.sumary-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  color: var(--gray);
}

.sumary-total p:last-child {
  color: var(--purple);
  font-size: 1.2rem;
}
</style>
