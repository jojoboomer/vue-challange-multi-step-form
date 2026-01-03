<script setup lang="ts">

type Props = {
  color?: string
  width?: string
  height?: string
  class?: string
}
const props = defineProps<Props>()

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width ? width : 12" :height="height ? height : 9" viewBox="0 0 12 9"
    :class="class">
    <path fill="none" :stroke="color ? color : '#FFF'" stroke-width="2" d="m1 4 3.433 3.433L10.866 1" />
  </svg>
</template>
