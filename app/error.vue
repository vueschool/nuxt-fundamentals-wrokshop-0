<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <UCard class="max-w-lg mx-auto mt-20 p-8 text-center">
    <template #header>
      <h2 class="text-3xl font-bold mb-2 text-red-600">
        {{ error?.statusCode }}
      </h2>
      <h1 class="text-xl font-semibold mb-1">
        {{ error?.statusMessage || "An error occurred" }}
      </h1>
    </template>
    <div>
      <p class="mb-6 text-gray-400">{{ error?.message }}</p>
      <UButton color="red" @click="handleError"> Clear errors </UButton>
    </div>
  </UCard>
</template>
