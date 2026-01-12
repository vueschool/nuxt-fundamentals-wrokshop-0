<script setup lang="ts">
const { data } = await useFetch("/api/hello-world", {
  server: false,
});
</script>
<template>
  <div>
    Server
    <pre>{{ data }}</pre>
  </div>
</template>
