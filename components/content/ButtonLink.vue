<script lang="ts" setup>
const props = withDefaults(defineProps<{
  href: string, rounded?: boolean, size?: string, white?: boolean
}>(), {
  size: 'lg'
})

const NuxtLink = resolveComponent('NuxtLink')
const localPath = useLocalePath()

const external = computed(() => props.href.startsWith('http'))
</script>

<template>
  <SButton :external="external" class="underline-transparent hover:underline-current" :to="external ? href : localPath(href)"
    :as="NuxtLink" :size="size" :variant="white ? 'white' : 'gradient'" :class="[rounded ? 'rounded-full!' : '']">
    <slot />
  </SButton>
</template>
