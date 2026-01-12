<script setup lang="ts">
const { data, refresh } = useFetch("/api/hello-world", {
  getCachedData(key, nuxtApp) {
    // return undefined to disable caching
    // or return the cached data
    return nuxtApp.payload.data[key];
  },
});

// uncomment to run example
// with expiration
// const { data, refresh } = await useFetch("/api/hello-world", {
//   transform(data) {
//     return {
//       ...data,
//       expiresAt: Date.now() + 10_000,
//     };
//   },
//   getCachedData(key, nuxtApp) {
//     const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
//     if (Date.now() >= data?.expiresAt) return undefined;
//     return data;
//   },
// });
</script>
<template>
  <div>
    <button @click="refresh()">Refresh</button>
    <pre>{{ data }}</pre>
  </div>
</template>
