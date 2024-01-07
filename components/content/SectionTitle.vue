<script lang="ts" setup>
defineProps<{
  align?: 'left'
}>()
</script>

<template>
  <div class=""
    :class="`container flex w-full flex-col mt-10 ${align === 'left' ? '' : 'items-center justify-center text-center'}`">
    <div class="text-lg font-bold tracking-wider uppercase text-primary">
      <ContentSlot :use="$slots.subtitle" unwrap="p" />
    </div>

    <h2
      class="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight dark:text-white">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <div class="max-w-2xl py-2 text-start text-lg prose prose-gray lg:text-xl xl:text-xl">
      <slot />
    </div>
  </div>
</template>
