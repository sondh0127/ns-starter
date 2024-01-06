<script lang="ts" setup>
definePropsRefs<{ href: string }>()

const NuxtLink = resolveComponent('NuxtLink')
const localPath = useLocalePath()
</script>

<template>
  <SButton class="underline-transparent hover:underline-current" :to="localPath(href)" :as="NuxtLink" size="lg" variant="gradient">
    <slot />
  </SButton>
</template>
