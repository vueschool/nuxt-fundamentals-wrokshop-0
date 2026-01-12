<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <div class="flex gap-2">
      <NuxtLink to="/lazy">Lazy</NuxtLink>
      <NuxtLink to="/server">Server</NuxtLink>
      <NuxtLink to="/">Home</NuxtLink>
    </div>
    <NuxtPage />
  </div>
</template>
