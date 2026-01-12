<script setup>
// Use the productId variable to pass the id as parameter with the fetch request
const { id: productId } = useRoute().params;

// Update this variable ref with the data
const product = ref(null);
</script>

<template>
  <div>
    <section v-if="product">
      <div class="max-w-sm w-full h-96">
        <UCarousel
          v-slot="{ item }"
          :items="product.images"
          :ui="{ item: 'basis-full' }"
          class="rounded-lg overflow-hidden"
          indicators
        >
          <img
            width="150"
            height="150"
            :src="item"
            class="w-full"
            draggable="false"
          />
        </UCarousel>
      </div>

      <h1>{{ product.title }}</h1>
      <p>${{ product.price }}</p>
    </section>
    <section v-else>
      <p>
        Use <code class="text-yellow-500">useAsyncData()</code> composable to
        fetch the product and update the
        <code class="text-yellow-500">product</code> variable ref
      </p>
    </section>
    <NuxtLink to="/products" class="mt-4">Go back</NuxtLink>
  </div>
</template>
