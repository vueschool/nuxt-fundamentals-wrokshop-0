<script setup lang="ts">
const renderingMode = import.meta.client
  ? "client"
  : "server";
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <h1 class="text-3xl">
      I rendered on the
      <span class="text-primary"> {{ renderingMode }} </span
      >!
    </h1>
  </div>
</template>
