<script setup lang="ts">
import { useFormStore } from '@/store/form';
import { ADDONS } from '@/utils/constants';
import ItemToggle from '../atoms/ItemToggle.vue';

const store = useFormStore()
</script>

<template>
  <div class="step-content">
    <header>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
    </header>

    <div class="addons-section">
      <ItemToggle v-for="addon in ADDONS" :key="addon.id" :model-value="store.isSelected(addon.id)"
        :price="store.billingType == 'monthly' ? addon.month : addon.year" :title="addon.title"
        :description="addon.description" @update:model-value="(val) => store.updateAddons(addon.id, val)" />
    </div>

  </div>
</template>

<style scoped>
.addons-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
