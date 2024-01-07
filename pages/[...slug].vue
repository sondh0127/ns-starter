<script setup lang="ts">
const { params } = useRoute()

const isResources = params.slug.includes('resources')
console.log('[LOG] ~ file: [...slug].vue:6 ~ isResources:', isResources)
</script>

<template>
  <NuxtLayout :name="isResources ? 'resources' : 'default'">
    <ContentDoc />
  </NuxtLayout>
</template>
