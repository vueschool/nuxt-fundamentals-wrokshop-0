<script setup lang="ts">
const { data } = await useFetch("/api/hello-world", {
  lazy: true,
});
</script>
<template>
  <div>
    Lazy
    <pre>{{ data }}</pre>
  </div>
</template>
