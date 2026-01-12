<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <div class="flex gap-2">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
    <NuxtPage />
  </div>
</template>
