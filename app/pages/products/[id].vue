<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <h1>Product ID: {{ $route.params.id }}</h1>
    <NuxtLink to="/products">Go back</NuxtLink>
  </div>
</template>
