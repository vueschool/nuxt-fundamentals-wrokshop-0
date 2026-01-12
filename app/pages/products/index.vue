<script setup>
const products = ref([]);

const { data } = await useFetch("/api/products", {
  transform: (allProducts) =>
    allProducts.map((product) => {
      const { images, price, ...restOfProperties } = product;
      restOfProperties.image = product.images[0];

      return restOfProperties;
    }),
});

products.value = data.value;
</script>

<template>
  <div>
    <section v-if="products.length">
      <!-- Loop over the products and render a NuxtLink for each -->
      <NuxtLink
        v-for="product in products"
        :key="product.id"
        :to="`/products/${product.id}`"
      >
        {{ product.title }}
      </NuxtLink>
    </section>
    <section v-else>
      <p>
        Use <code class="text-yellow-500">useFetch()</code> composable to fetch
        the products and update the
        <code class="text-yellow-500">products</code> variable ref
      </p>
    </section>
    <NuxtLink to="/" class="mt-4">Go back</NuxtLink>
  </div>
</template>
