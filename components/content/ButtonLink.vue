<script lang="ts" setup>
withDefaults(defineProps<{ href: string, rounded?: boolean, size?: string }>(), {
  size: 'lg'
})

const NuxtLink = resolveComponent('NuxtLink')
const localPath = useLocalePath()
</script>

<template>
  <SButton class="underline-transparent hover:underline-current" :to="localPath(href)" :as="NuxtLink" :size="size"
    variant="gradient" :class="[rounded ? 'rounded-full!' : '']">
    <slot />
  </SButton>
</template>
