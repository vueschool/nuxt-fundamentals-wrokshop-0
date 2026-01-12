<script setup lang="ts">
const divideBy = ref(1);
const constant = 10;
const result = computed(() => {
  if (divideBy.value === 0) {
    throw new Error("cannot divide by 0");
  }
  return constant / divideBy.value;
});
</script>

<template>
  <UCard class="max-w-md mx-auto">
    <template #header>
      <h1 class="text-xl font-bold">Division Widget</h1>
    </template>
    <template #default>
      {{ constant }} / <UInput v-model="divideBy" type="number" /> =
      {{ result }}
    </template>
  </UCard>
</template>
