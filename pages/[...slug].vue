<script setup lang="ts">
const { params } = useRoute()
console.log('[LOG] ~ file: [...slug].vue:3 ~ params:', params)
</script>

<template>
  <NuxtLayout>
    <ContentDoc />
  </NuxtLayout>
</template>
