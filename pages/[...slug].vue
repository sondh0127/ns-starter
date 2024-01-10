<script setup lang="ts">
const { params } = useRoute()

const isResources = params.slug.includes('resources')
</script>

<template>
  <NuxtLayout :name="isResources ? 'resources' : 'default'">
    <ContentDoc />
  </NuxtLayout>
</template>
