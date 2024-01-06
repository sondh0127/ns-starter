<script lang="ts" setup>
const { } = definePropsRefs<{
  image: string
}>()
</script>

<template>
  <div class="grid justify-items-center bg-[linear-gradient(180deg,#FCF7EC_0%,#FCF2EC_100%)] py-20 container"
    xl="flex flex-wrap">
    <div class="w-full flex items-center" xl="w-1/2">
      <div class="grid gap-2 mx-auto mb-8 justify-items-center" xl="max-w-2xl justify-items-start">

        <slot />
      </div>
    </div>
    <div class="relative w-full flex items-center justify-center" xl="w-1/2" lg="block w-1/2">
      <NuxtImg :src="image" class="absolute inset-0 h-full w-full object-scale-down" />
    </div>
  </div>
</template>
