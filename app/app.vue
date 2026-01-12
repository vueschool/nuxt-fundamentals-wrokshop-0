<script setup>
// Use useSeoMeta here 👇
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.app-wrapper {
  @apply h-screen relative text-lg;
}

.header {
  @apply h-16 border-b-2 border-primary;
}

.header__nav {
  @apply flex gap-2 justify-between items-center flex-row px-4 h-full md:container mx-auto;
}

main {
  @apply py-4 px-6 flex justify-center items-center flex-col text-left min-h-[80%] container mx-auto;
}

a:not(.header__nav > *) {
  @apply text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:underline transition-colors block;
}

h1 {
  @apply font-semibold text-primary-500 text-4xl;
}
</style>
