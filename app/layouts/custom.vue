<template>
  <UCard class="error-container">
    <slot />
  </UCard>
</template>

<style>
.error-container {
  @apply flex justify-center items-center absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-full max-w-lg;
}

.error-container div {
  @apply flex justify-center items-center flex-col gap-3;
}

.error-container h1 {
  @apply text-2xl;
}

.error-container p {
  @apply text-3xl font-semibold;
}

.error-container button {
  @apply bg-primary-600 text-white py-1 px-2 rounded-md hover:bg-primary-700 transition-colors text-sm mt-2;
}
</style>
