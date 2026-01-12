<script setup>
const { id: productId } = useRoute().params;

const { data: product, error } = await useAsyncData(
  () => {
    return $fetch(`/api/products/${productId}`, {
      pick: ["id", "title", "images", "price"],
    });
  },
  {
    deep: true,
  }
);

useSeoMeta({
  title: () => product.value.title,
});

// display a full error page if the error is not null
watch(
  error,
  (newError) => {
    if (newError) {
      throw createError({
        status: 500,
        message: error.value?.message || "Error fetching product data",
        // or statusText
        statusMessage:
          "Sorry, something went wrong! Try again later. (User Friendly Message)",
        fatal: true,
      });
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <section v-if="product">
      <div class="max-w-sm w-full h-96 bg-stone-900 rounded-lg">
        <UCarousel
          v-slot="{ item }"
          :items="product.images"
          :ui="{ item: 'basis-full' }"
          class="h-96"
          indicators
        >
          <div class="w-96 h-96 flex justify-center items-center">
            <img
              width="300"
              height="300"
              :src="item"
              class="object-contain"
              draggable="false"
            />
          </div>
        </UCarousel>
      </div>

      <div class="mt-5">
        <h1>{{ product.title }}</h1>
        <UInput v-model="product.title" />
        <p>${{ product.price }}</p>
      </div>
    </section>
    <section v-else>
      <p>
        Looks like we failed to load the product! We should handle the error
        coming from
        <code>useAsyncData</code>.
      </p>
    </section>
    <NuxtLink to="/products" class="mt-4">Go back</NuxtLink>
  </div>
</template>
