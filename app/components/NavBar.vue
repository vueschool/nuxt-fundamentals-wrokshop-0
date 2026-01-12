<script setup>
const products = [
  {
    id: 1,
    name: "MacBook Pro M3",
  },
  {
    id: 2,
    name: "MacBook Pro M3 Pro",
  },
  {
    id: 3,
    name: "MacBook Pro M3 Max",
  },
];
</script>

<template>
  <NuxtLink
    v-for="product in products"
    :key="product.id"
    :to="`/products/${product.id}`"
  >
    {{ product.name }}
  </NuxtLink>
</template>
